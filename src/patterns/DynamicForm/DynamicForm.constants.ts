import * as yup from "yup";
import { RuleValidation } from "./DynamicForm.types";
// const telRegex: RegExp =
//   /^(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/;
// const emailRegexp: RegExp =
//   /^[A-Za-z0-9,-_.]{3,}@[A-Za-z0-9]{3,}\.[A-Za-z0-9]{3,}$/;

// Yup schema to validate inputs values
export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  // email: yup
  //   .string()
  //   .required("Email is required")
  //   .matches(emailRegexp, "Please add a valid email"),
  // age: yup
  //   .number()
  //   .positive()
  //   .integer("Age need to be an Integer")
  //   .required("Age is required")
  //   .min(1, "Age need to be more than 1"),
  // gender: yup.string().required("Gender is required"),
  // country: yup.string().required("Country is required"),
  // phone: yup
  //   .string()
  //   .required("Phone is required")
  //   .matches(telRegex, "Please add a valid egyptian number"),
  // description: yup.string(),
  // gamer: yup.string().required("Game status is required"),
  // preferredMeals: yup
  //   .array()
  //   .of(yup.string().required())
  //   .required("Select at least one meal"),
  // datePicker: yup.string().required("date is required"),
  // rangePicker: yup
  //   .array()
  //   .of(yup.string().required())
  //   .required("Session period is required"),
  // available: yup.boolean().required("Please set your Availability"),
  // how_much: yup.number().required("Please set How much"),
  // rate: yup.number().required("Please give a rate"),
});

export const input_types = {
  input_text: "text",
  input_number: "number",
  input_select: "select",
  input_radio: "radio",
  input_checkbox: "checkbox",
};

export const validation_rule_types = {
  required: "required",
  minimum: "minimum",
  isInteger: "isInteger",
  pattern: "pattern",
  atLeastOneRequired: "at_least_one_required",
};

export const error_messages = {
  [validation_rule_types.required]: ({ fieldName }: RuleValidation) =>
    `${fieldName} field is required`,
  [validation_rule_types.minimum]: ({ fieldName, minNumber }: RuleValidation) =>
    `${fieldName} need to be more than ${minNumber}`,
  [validation_rule_types.isInteger]: ({ fieldName }: RuleValidation) =>
    `${fieldName} must be a valid integer`,
  [validation_rule_types.pattern]: ({ fieldName }: RuleValidation) =>
    `${fieldName} is not valid`,
  [validation_rule_types.atLeastOneRequired]: ({ fieldName }: RuleValidation) =>
    `must check at lease one of ${fieldName}`,
};

export const input_validation_types = {
  [input_types.input_text]: yup.string(),
  [input_types.input_number]: yup.number(),
  [input_types.input_select]: yup.string(),
  [input_types.input_radio]: yup.string(),
  [input_types.input_checkbox]: yup.array().of(yup.string()),
};
