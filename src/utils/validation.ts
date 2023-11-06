import { DynamicFormInputConfig } from "./../patterns/DynamicInput/DynamicInput.types";
import {
  error_messages,
  input_validation_types,
  validation_rule_types,
} from "../patterns/DynamicForm/DynamicForm.constants";

const validationRules = {
  [validation_rule_types.required]: (
    validationSchema,
    input: DynamicFormInputConfig
  ) => {
    const rule = {
      fieldName: input.name,
    };

    return validationSchema.required(
      error_messages[validation_rule_types.required](rule)
    );
  },
  [validation_rule_types.minimum]: (
    validationSchema,
    input: DynamicFormInputConfig
  ) => {
    const minValue = input.validation.filter(
      (rule) => rule.type === "minimum"
    )[0].minNumber;

    const rule = {
      fieldName: input.name,
      minNumber: minValue,
    };
    return validationSchema.min(
      minValue,
      error_messages[validation_rule_types.minimum](rule)
    );
  },
  [validation_rule_types.isInteger]: (
    validationSchema,
    input: DynamicFormInputConfig
  ) => {
    const rule = {
      fieldName: input.name,
    };

    return validationSchema.integer(
      error_messages[validation_rule_types.isInteger](rule)
    );
  },
  [validation_rule_types.pattern]: (
    validationSchema,
    input: DynamicFormInputConfig
  ) => {
    const rule = { fieldName: input.name };
    const pattern = input.validation.filter(
      (rule) => rule.type === "pattern"
    )[0].pattern;

    return validationSchema.matches(
      pattern,
      error_messages[validation_rule_types.pattern](rule)
    );
  },
  [validation_rule_types.atLeastOneRequired]: (
    validationSchema,
    input: DynamicFormInputConfig
  ) => {
    const rule = {
      fieldName: input.name,
    };
    return validationSchema.required(
      error_messages[validation_rule_types.atLeastOneRequired](rule)
    );
  },
  [validation_rule_types.maximum]: (
    validationSchema,
    input: DynamicFormInputConfig
  ) => {
    const maxValue = input.validation.filter(
      (rule) => rule.type === "maximum"
    )[0].maxNumber;

    const rule = {
      fieldName: input.name,
      maxNumber: maxValue,
    };
    return validationSchema.max(
      maxValue,
      error_messages[validation_rule_types.maximum](rule)
    );
  },
  [validation_rule_types.earlierThan]: (
    validationSchema,
    input: DynamicFormInputConfig
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
  },
};

// creating a schema
export const parseValidation = (input: DynamicFormInputConfig) => {
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
