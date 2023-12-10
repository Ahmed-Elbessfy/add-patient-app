import { SchemaName } from "./../features/AddAppointmentFields/AddAppointmentInputs.type";
import { StringSchema, NumberSchema, AnyObject } from "yup";
// import i18next from "i18next";
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
import { formatDateTime } from "./addAppointUtils";

type SchemaType =
  | (StringSchema<string | undefined, AnyObject, undefined, ""> &
      NumberSchema<number | undefined, AnyObject, undefined, "">)
  | AnyObject;

type CustomRuleFields = string | number | boolean;

// VAlidation errors messages functions
const validateRequired = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const isRequired = field.validation.find((rule) => rule.type === "required");

  // check if the field is Required, since not all fields are required
  return (
    isRequired &&
    validationSchema.required(
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.REQUIRED](field.schemaName)
    )
  );
};

const validateRequiredIf = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const { requiredConditions } = field.validation.filter(
    (rule: FieldValidation) => rule.type === "requiredIf"
  )[0];

  // WHEN method is used to watch for required condition fields and validate on change
  // IS parameters is the values of the fields accepted as first parameter of WHEN method
  // and with the same order.
  // Order is important since fields value is compared to the same order in the required conditions.
  // Used index to match order
  return validationSchema.when(
    requiredConditions &&
      requiredConditions.map((condition: Rule) => condition.field),
    {
      is: (...fields: CustomRuleFields[]) => {
        return (
          requiredConditions &&
          requiredConditions.every(
            (condition: Rule, ind: number) => condition.value === fields[ind]
          )
        );
      },
      then: (schema: SchemaType) => {
        return schema.required(
          ERROR_MESSAGES[VALIDATION_RULE_TYPES.REQUIRED_IF](field.schemaName)
        );
      },
    }
  );
};

const validateEarlierThan = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const { date } = field.validation.filter(
    (rule) => rule.type === "earlier_than"
  )[0];

  const formattedDate = date && formatDateTime(date);

  // accepted format "YYYY/MM/DD"
  return (
    formattedDate &&
    validationSchema.max(
      formattedDate,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](
        field.schemaName,
        formattedDate.format("DD/MM/YYYY")
      )
    )
  );
};

const validateLaterThan = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const { date } = field.validation.filter(
    (rule) => rule.type === "later_than"
  )[0];

  const formattedDate = date && formatDateTime(date);

  // accepted format "YYYY/MM/DD"
  return (
    formattedDate &&
    validationSchema.min(
      formattedDate,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.LATER_THAN](
        field.schemaName,
        formattedDate.format("DD/MM/YYYY")
      )
    )
  );
};

const validateTimeEarlierThan = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const { fields } = field.validation.filter(
    (rule) => rule.type === "time_earlier_than"
  )[0];

  // make sure that if fields exist, get target field value
  const targetField = fields && fields[0];

  return (
    targetField &&
    validationSchema.isTimeEarlierThan({
      targetField,
      errorMsg: ERROR_MESSAGES[VALIDATION_RULE_TYPES.TIME_EARLIER_THAN](
        field.schemaName,
        targetField
      ),
    })
  );
};

const validateTimeLaterThan = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const { fields } = field.validation.filter(
    (rule) => rule.type === "time_later_than"
  )[0];

  // make sure that if fields exist, get target field value
  const targetField = fields && fields[0];

  return (
    targetField &&
    validationSchema.isTimeLaterThan({
      targetField,
      errorMsg: ERROR_MESSAGES[VALIDATION_RULE_TYPES.TIME_LATER_THAN](
        field.schemaName,
        targetField
      ),
    })
  );
};

const validatePattern = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const { pattern } = field.validation.filter(
    (rule) => rule.type === "hasPattern"
  )[0];

  return (
    pattern &&
    validationSchema.matches(
      pattern,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.HAS_PATTERN](field.SchemaName)
    )
  );
};

const validateMinimum = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const { minimum } = field.validation.filter(
    (rule) => rule.type === "minimum"
  )[0];

  // accepted format "YYYY/MM/DD"
  return (
    minimum &&
    validationSchema.min(
      minimum,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](
        field.schemaName,
        minimum
      )
    )
  );
};

const validateMaximum = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const { maximum } = field.validation.filter(
    (rule) => rule.type === "maximum"
  )[0];

  // accepted format "YYYY/MM/DD"
  return (
    maximum &&
    validationSchema.max(
      maximum,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](
        field.schemaName,
        maximum
      )
    )
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
// use FormFieldConfig type since it is the type of field have required properties for building schema, no need for onChange or Disability features but it can be used if needed with using the FieldConfig type
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
