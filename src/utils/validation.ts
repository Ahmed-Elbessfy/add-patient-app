import { DynamicFormFieldConfig } from "./../patterns/DynamicInput/DynamicInput.types";
import {
  error_messages,
  input_validation_types,
  validation_rule_types,
} from "../patterns/DynamicForm/DynamicForm.constants";

import { StringSchema, NumberSchema, AnyObject } from "yup";
// import { DynamicFormOutput } from "../patterns/DynamicForm/DynamicForm.types";
type ValidationSchema =
  | (StringSchema<string | undefined, AnyObject, undefined, ""> &
      NumberSchema<number | undefined, AnyObject, undefined, "">)
  | AnyObject;

const validateRequired = (
  validationSchema: ValidationSchema,
  input: DynamicFormFieldConfig
) => {
  const rule = {
    fieldName: input.name,
  };

  return validationSchema.required(
    error_messages[validation_rule_types.required](rule)
  );
};

const validateMinimum = (
  validationSchema: ValidationSchema,
  input: DynamicFormFieldConfig
) => {
  const minValue = input.validation.find(
    (rule) => rule.type === "minimum"
  )?.minNumber;

  if (minValue !== undefined) {
    const rule = {
      fieldName: input.name,
      minNumber: minValue,
    };

    return validationSchema.min(
      minValue,
      error_messages[validation_rule_types.minimum](rule)
    );
  }

  return validationSchema;
};

const validateInteger = (
  validationSchema: ValidationSchema,
  input: DynamicFormFieldConfig
) => {
  const rule = {
    fieldName: input.name,
  };

  return validationSchema.integer(
    error_messages[validation_rule_types.isInteger](rule)
  );
};

const validatePattern = (
  validationSchema: ValidationSchema,
  input: DynamicFormFieldConfig
) => {
  const rule = { fieldName: input.name };
  const pattern = input.validation.filter((rule) => rule.type === "pattern")[0]
    .pattern;

  return (
    pattern &&
    validationSchema.matches(
      pattern,
      error_messages[validation_rule_types.pattern](rule)
    )
  );
};

const validateAtLeastOneRequired = (
  validationSchema: ValidationSchema,
  input: DynamicFormFieldConfig
) => {
  const rule = {
    fieldName: input.name,
  };
  return validationSchema.required(
    error_messages[validation_rule_types.atLeastOneRequired](rule)
  );
};

const validateMaximum = (
  validationSchema: ValidationSchema,
  input: DynamicFormFieldConfig
) => {
  const maxValue = input.validation.filter((rule) => rule.type === "maximum")[0]
    .maxNumber;

  const rule = {
    fieldName: input.name,
    maxNumber: maxValue,
  };
  return (
    maxValue &&
    validationSchema.max(
      maxValue,
      error_messages[validation_rule_types.maximum](rule)
    )
  );
};

const validateEarlierThan = (
  validationSchema: ValidationSchema,
  input: DynamicFormFieldConfig
) => {
  const date = input.validation.filter(
    (rule) => rule.type === "earlier_than"
  )[0].date;

  const rule = {
    fieldName: input.name,
    date: date && date.toLocaleDateString("en-GB"),
  };

  return validationSchema.max(
    date,
    error_messages[validation_rule_types.earlierThan](rule)
  );
};

const validateLaterThan = (
  validationSchema: ValidationSchema,
  input: DynamicFormFieldConfig
) => {
  const date = input.validation.filter((rule) => rule.type === "later_than")[0]
    .date;

  const rule = {
    fieldName: input.name,
    date: date && date.toLocaleDateString("en-GB"),
  };

  return validationSchema.min(
    date,
    error_messages[validation_rule_types.laterThan](rule)
  );
};

const validationRules = {
  [validation_rule_types.required]: validateRequired,
  [validation_rule_types.minimum]: validateMinimum,
  [validation_rule_types.isInteger]: validateInteger,
  [validation_rule_types.pattern]: validatePattern,
  [validation_rule_types.atLeastOneRequired]: validateAtLeastOneRequired,
  [validation_rule_types.maximum]: validateMaximum,
  [validation_rule_types.earlierThan]: validateEarlierThan,
  [validation_rule_types.laterThan]: validateLaterThan,
};

// creating a schema
export const parseValidation = (input: DynamicFormFieldConfig) => {
  // if field of unknown or handled type
  if (!input_validation_types[input.fieldType]) {
    throw Error(`Unknown input type of type ${input.fieldType}`);
  }

  return input.validation.reduce((validationSchema, rule) => {
    // if field has unknown or handled error
    if (!validationRules[rule.type]) {
      return `Unknown validation rule of ${rule.type}`;
    }

    return validationRules[rule.type](validationSchema, input);
  }, input_validation_types[input.fieldType]);
};
