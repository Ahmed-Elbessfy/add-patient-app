import dayjs from "dayjs";
import {
  ERROR_MESSAGES,
  VALIDATION_RULE_TYPES,
  INPUT_VALIDATION_TYPES,
} from "../features/AddAppointmentForm/AddAppointmentForm.constants";

// VAlidation errors messages functions
const validateCRequired = (validationSchema, field) => {
  const rule = {
    fieldName: field.name,
  };

  // check if the field is Required, since not all fields are required
  const fieldRequiredStatus = field.validation.find(
    (rule) => rule.type === "crequired"
  ).required;

  return fieldRequiredStatus
    ? validationSchema.required(
        ERROR_MESSAGES[VALIDATION_RULE_TYPES.CREQUIRED](field.errorTransKey)
      )
    : validationSchema;
};
const validateRequired = (validationSchema, field) => {
  const { required, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.find((rule) => rule.type === "required");

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // check if the field is Required, since not all fields are required
  return required
    ? validationSchema.required(
        ERROR_MESSAGES[VALIDATION_RULE_TYPES.REQUIRED](errorMsgKey)
      )
    : validationSchema;
};

const validateEarlierThan = (validationSchema, field) => {
  const { date, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "earlier_than")[0];

  const formattedDate =
    date === "today"
      ? dayjs().format("YYYY/MM/DD")
      : date.split("/").reverse().join("/");

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // accepted format "YYYY/MM/DD"
  return validationSchema.max(
    formattedDate,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](errorMsgKey)
  );
};

const validateLaterThan = (validationSchema, field) => {
  const { date, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "later_than")[0];

  const formattedDate =
    date === "today"
      ? dayjs().format("YYYY/MM/DD")
      : date.split("/").reverse().join("/");

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // accepted format "YYYY/MM/DD"
  return validationSchema.min(
    formattedDate,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.LATER_THAN](errorMsgKey)
  );
};

const validateTimeEarlierThan = (validationSchema, field) => {
  const { fields, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "time_earlier_than")[0];

  const targetField = fields[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  return validationSchema.isTimeEarlierThan({
    targetField,
    errorMsg:
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.TIME_EARLIER_THAN](errorMsgKey),
  });
};

const validateTimeLaterThan = (validationSchema, field) => {
  const { fields, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "time_later_than")[0];
  const targetField = fields[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  return validationSchema.isTimeLaterThan({
    targetField,
    errorMsg:
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.TIME_LATER_THAN](errorMsgKey),
  });
};

const validatePattern = (validationSchema, field) => {
  const { pattern, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "hasPattern")[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  return (
    pattern &&
    validationSchema.matches(
      pattern,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.HAS_PATTERN](errorMsgKey)
    )
  );
};

const validateMinimum = (validationSchema, field) => {
  const { minimum, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "minimum")[0];
  console.log("minimum : ", minimum);
  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // accepted format "YYYY/MM/DD"
  return validationSchema.max(
    minimum,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](errorMsgKey)
  );
};

const validateMaximum = (validationSchema, field) => {
  const { maximum, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "maximum")[0];
  console.log("maximum : ", maximum);

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // accepted format "YYYY/MM/DD"
  return validationSchema.max(
    maximum,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](errorMsgKey)
  );
};

const validationRules = {
  [VALIDATION_RULE_TYPES.CREQUIRED]: validateCRequired,
  [VALIDATION_RULE_TYPES.REQUIRED]: validateRequired,
  [VALIDATION_RULE_TYPES.EARLIER_THAN]: validateEarlierThan,
  [VALIDATION_RULE_TYPES.LATER_THAN]: validateLaterThan,
  [VALIDATION_RULE_TYPES.TIME_EARLIER_THAN]: validateTimeEarlierThan,
  [VALIDATION_RULE_TYPES.TIME_LATER_THAN]: validateTimeLaterThan,
  [VALIDATION_RULE_TYPES.HAS_PATTERN]: validatePattern,
  [VALIDATION_RULE_TYPES.MINIMUM]: validateMinimum,
  [VALIDATION_RULE_TYPES.MAXIMUM]: validateMaximum,
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
