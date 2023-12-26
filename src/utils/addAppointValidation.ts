import { StringSchema, NumberSchema, AnyObject } from "yup";
import {
  ERROR_MESSAGES,
  VALIDATION_RULE_TYPES,
  INPUT_VALIDATION_TYPES,
} from "../features/AddAppointmentForm/AddAppointmentForm.constants";
import {
  CustomRuleFields,
  FieldValidation,
  FormFieldConfig,
  Rule,
} from "../features/AddAppointmentFields/AddAppointmentInputs.type";
import { formatDateTime } from "./addAppointUtils";

import * as yup from "yup";

type SchemaType =
  | (StringSchema<string | undefined, AnyObject, undefined, ""> &
      NumberSchema<number | undefined, AnyObject, undefined, "">)
  | AnyObject;

// VAlidation errors messages functions
const validateRequired = (
  validationSchema: SchemaType,
  field: FormFieldConfig
) => {
  const isRequired = field.validation.find((rule) => rule.type === "required");
  if (field.name === "new_patient") console.log(field.name);
  // Translate field name
  const fieldName = field.label;

  // check if the field is Required, since not all fields are required
  return (
    isRequired &&
    validationSchema.required(
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.REQUIRED](fieldName)
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

  // Translate field name
  const fieldName = field.label;

  // if (field.name === "new_patient.first_name") {
  // console.log(yup.ref("show_add_patient"));
  // }

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
          ERROR_MESSAGES[VALIDATION_RULE_TYPES.REQUIRED_IF](fieldName)
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

  // Translate field name
  const fieldName = field.label;

  // accepted format "YYYY/MM/DD"
  return (
    formattedDate &&
    fieldName &&
    validationSchema.max(
      formattedDate,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.EARLIER_THAN](
        fieldName,
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

  // Translate field name
  const fieldName = field.label;

  // accepted format "YYYY/MM/DD"
  return (
    formattedDate &&
    fieldName &&
    validationSchema.min(
      formattedDate,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.LATER_THAN](
        fieldName,
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
  const targetField = fields && fields[0].field;

  // Translate field name & target field
  const fieldName = field.label,
    targetFieldLabel = fields && fields[0].fieldLabel;

  return (
    targetField &&
    fieldName &&
    targetFieldLabel &&
    validationSchema.isTimeEarlierThan({
      targetField,
      errorMsg: ERROR_MESSAGES[VALIDATION_RULE_TYPES.TIME_EARLIER_THAN](
        fieldName,
        targetFieldLabel
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
  const targetField = fields && fields[0].field;

  // Translate field name & target field
  const fieldName = field.label,
    targetFieldLabel = fields && fields[0].fieldLabel;

  return (
    targetField &&
    fieldName &&
    targetFieldLabel &&
    validationSchema.isTimeLaterThan({
      targetField,
      errorMsg: ERROR_MESSAGES[VALIDATION_RULE_TYPES.TIME_LATER_THAN](
        fieldName,
        targetFieldLabel
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

  // Translate field name
  const fieldName = field.label;

  return (
    pattern &&
    fieldName &&
    validationSchema.matches(
      pattern,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.HAS_PATTERN](fieldName)
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

  // Translate field name
  const fieldName = field.label;

  // accepted format "YYYY/MM/DD"
  return (
    minimum &&
    fieldName &&
    validationSchema.min(
      minimum,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.MINIMUM](fieldName, minimum)
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

  // Translate field name
  const fieldName = field.label;

  // accepted format "YYYY/MM/DD"
  return (
    maximum &&
    fieldName &&
    validationSchema.max(
      maximum,
      ERROR_MESSAGES[VALIDATION_RULE_TYPES.MAXIMUM](fieldName, maximum)
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
