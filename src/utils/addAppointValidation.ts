import dayjs from "dayjs";
import {
  ERROR_MESSAGES,
  VALIDATION_RULE_TYPES,
  INPUT_VALIDATION_TYPES,
} from "../features/AddAppointmentForm/AddAppointmentForm.constants";

// VAlidation errors messages functions
const validateRequired = (validationSchema, field) => {
  const rule = {
    fieldName: field.name,
  };

  // check if the field is Required, since not all fields are required
  const fieldRequiredStatus = field.validation.find(
    (rule) => rule.type === "required"
  ).required;

  return fieldRequiredStatus
    ? validationSchema.required(
        ERROR_MESSAGES[VALIDATION_RULE_TYPES.REQUIRED](rule)
      )
    : validationSchema;
};

const validateEarlierThan = (validationSchema, field) => {
  const date = field.validation.filter(
    (rule) => rule.type === "earlier_than"
  )[0].date;

  const formattedDate =
    date === "today"
      ? dayjs().format("YYYY/MM/DD")
      : date.split("/").reverse().join("/");

  const rule = {
    fieldName: field.name,
    date: date === "today" ? dayjs().format("DD/MM/YYYY") : date,
  };

  // accepted format "YYYY/MM/DD"
  return validationSchema.max(
    formattedDate,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](rule)
  );
};

const validateLaterThan = (validationSchema, field) => {
  const date = field.validation.filter((rule) => rule.type === "later_than")[0]
    .date;

  const formattedDate =
    date === "today"
      ? dayjs().format("YYYY/MM/DD")
      : date.split("/").reverse().join("/");

  const rule = {
    fieldName: field.name,
    date: date === "today" ? dayjs().format("DD/MM/YYYY") : date,
  };

  // accepted format "YYYY/MM/DD"
  return validationSchema.min(
    formattedDate,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.LATER_THAN](rule)
  );
};

const validationRules = {
  [VALIDATION_RULE_TYPES.REQUIRED]: validateRequired,
  [VALIDATION_RULE_TYPES.EARLIER_THAN]: validateEarlierThan,
  [VALIDATION_RULE_TYPES.LATER_THAN]: validateLaterThan,
};

// creating a schema
export const parseValidation = (input) => {
  // if field of unknown or handled type
  if (!INPUT_VALIDATION_TYPES[input.fieldType]) {
    throw Error(`Unknown input type of type ${input.fieldType}`);
  }

  return input.validation.reduce((validationSchema, rule) => {
    // if field has unknown or handled error
    if (!validationRules[rule.type]) {
      return `Unknown validation rule of ${rule.type}`;
    }

    return validationRules[rule.type](validationSchema, input);
  }, INPUT_VALIDATION_TYPES[input.fieldType]);
};
