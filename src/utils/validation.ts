import {
  error_messages,
  input_validation_types,
  validation_rule_types,
} from "../patterns/DynamicForm/DynamicForm.constants";

const validationRules = {
  [validation_rule_types.required]: ({ validationSchema, inputData }) => {
    console.log(inputData);
    return validationSchema.required(
      error_messages[validation_rule_types.required]
    );
  },
};

// creating a schema
export const parseValidation = (input) => {
  // if field of unknown or handled type
  if (!input_validation_types[input.fieldType]) {
    return `Unknown input type of type ${input.fieldType}`;
  }

  return input.validation.reduce(({ validationSchema, rule }) => {
    // if field has unknown or handled error
    if (!validationRules[rule.type]) {
      return `Unknown validation rule of ${rule.type}`;
    }

    return validationRules[rule.type]({ validationSchema, input });
  }, input_validation_types[input.fieldType]);
};
