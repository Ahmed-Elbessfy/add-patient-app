import dayjs from "dayjs";
import {
  ERROR_MESSAGES,
  VALIDATION_RULE_TYPES,
  INPUT_VALIDATION_TYPES,
} from "../features/AddAppointmentForm/AddAppointmentForm.constants";
import {
  FieldValidation,
  FormFieldConfig,
  Rule,
} from "../features/AddAppointmentFields/AddAppointmentInputs.type";

// VAlidation errors messages functions
const validateRequired = (validationSchema, field: FormFieldConfig) => {
  const { defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "required")[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // check if the field is Required, since not all fields are required
  return validationSchema.required(
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.REQUIRED](errorMsgKey)
  );
};

const validateRequiredIf = (validationSchema, field: FormFieldConfig) => {
  const {
    requiredConditions,
    defaultErrorMsg,
    customErrorMsg,
    useCustomErrorMsg,
  } = field.validation.filter(
    (rule: FieldValidation) => rule.type === "requiredIf"
  )[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // WHEN method is used to watch for required condition fields and validate on change
  // IS parameters is the values of the fields accepted as first parameter of WHEN method
  // and with the same order.
  // Order is important since fields value is compared to the same order in the required conditions.
  // Used index to match order
  return validationSchema.when(
    requiredConditions &&
      requiredConditions.map((condition: Rule) => condition.field),
    {
      is: (...fields) => {
        return (
          requiredConditions &&
          requiredConditions.every(
            (condition: Rule, ind: number) => condition.value === fields[ind]
          )
        );
      },
      then: (schema) => {
        return schema.required(
          ERROR_MESSAGES[VALIDATION_RULE_TYPES.REQUIRED_IF](errorMsgKey)
        );
      },
    }
  );
};

const validateEarlierThan = (validationSchema, field: FormFieldConfig) => {
  const { date, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "earlier_than")[0];

  const formattedDate =
    date === "today"
      ? dayjs().format("YYYY/MM/DD")
      : date && date.split("/").reverse().join("/");

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // accepted format "YYYY/MM/DD"
  return validationSchema.max(
    formattedDate,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](errorMsgKey)
  );
};

const validateLaterThan = (validationSchema, field: FormFieldConfig) => {
  const { date, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "later_than")[0];

  const formattedDate =
    date === "today"
      ? dayjs().format("YYYY/MM/DD")
      : date && date.split("/").reverse().join("/");

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // accepted format "YYYY/MM/DD"
  return validationSchema.min(
    formattedDate,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.LATER_THAN](errorMsgKey)
  );
};

const validateTimeEarlierThan = (validationSchema, field: FormFieldConfig) => {
  const { fields, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "time_earlier_than")[0];

  // make sure that if fields exist, get target field value
  const targetField = fields && fields[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  return validationSchema.isTimeEarlierThan({
    targetField,
    errorMsg:
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.TIME_EARLIER_THAN](errorMsgKey),
  });
};

const validateTimeLaterThan = (validationSchema, field: FormFieldConfig) => {
  const { fields, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "time_later_than")[0];

  // make sure that if fields exist, get target field value
  const targetField = fields && fields[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  return validationSchema.isTimeLaterThan({
    targetField,
    errorMsg:
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.TIME_LATER_THAN](errorMsgKey),
  });
};

const validatePattern = (validationSchema, field: FormFieldConfig) => {
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

const validateMinimum = (validationSchema, field: FormFieldConfig) => {
  const { minimum, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "minimum")[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // accepted format "YYYY/MM/DD"
  return validationSchema.min(
    minimum,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](errorMsgKey)
  );
};

const validateMaximum = (validationSchema, field: FormFieldConfig) => {
  const { maximum, defaultErrorMsg, customErrorMsg, useCustomErrorMsg } =
    field.validation.filter((rule) => rule.type === "maximum")[0];

  const errorMsgKey = useCustomErrorMsg ? customErrorMsg : defaultErrorMsg;

  // accepted format "YYYY/MM/DD"
  return validationSchema.max(
    maximum,
    ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](errorMsgKey)
  );
};

const validationRules = {
  [VALIDATION_RULE_TYPES.REQUIRED]: validateRequired,
  [VALIDATION_RULE_TYPES.REQUIRED_IF]: validateRequiredIf,
  [VALIDATION_RULE_TYPES.EARLIER_THAN]: validateEarlierThan,
  [VALIDATION_RULE_TYPES.LATER_THAN]: validateLaterThan,
  [VALIDATION_RULE_TYPES.TIME_EARLIER_THAN]: validateTimeEarlierThan,
  [VALIDATION_RULE_TYPES.TIME_LATER_THAN]: validateTimeLaterThan,
  [VALIDATION_RULE_TYPES.HAS_PATTERN]: validatePattern,
  [VALIDATION_RULE_TYPES.MINIMUM]: validateMinimum,
  [VALIDATION_RULE_TYPES.MAXIMUM]: validateMaximum,
};

// creating a schema
export const parseValidation = (input: FormFieldConfig) => {
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
