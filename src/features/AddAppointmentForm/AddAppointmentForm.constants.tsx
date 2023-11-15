import * as yup from "yup";
import { ValidationRule } from "./AddAppointmentForm.types";

export const INPUT_TYPES = {
  INPUT_TEXT: "text",
  INPUT_TEXTAREA: "textarea",
  INPUT_NUMBER: "number",
  INPUT_SELECT: "select",
  INPUT_RADIO: "radio",
  INPUT_DATEPICKER: "datePicker",
  INPUT_TIMEPICKER: "timePicker",
  INPUT_SWITCH: "switch",
};

export const VALIDATION_RULE_TYPES = {
  REQUIRED: "required",
  EARLIER_THAN: "earlier_than",
  LATER_THAN: "later_than",
};

export const ERROR_MESSAGES = {
  [VALIDATION_RULE_TYPES.REQUIRED]: ({ fieldName }: ValidationRule) =>
    `${fieldName} field is required`,
  [VALIDATION_RULE_TYPES.EARLIER_THAN]: ({ fieldName, date }: ValidationRule) =>
    `${fieldName} must be earlier than ${date}`,
  [VALIDATION_RULE_TYPES.LATER_THAN]: ({ fieldName, date }: ValidationRule) =>
    `${fieldName} must be after ${date}`,
};

export const INPUT_VALIDATION_TYPES = {
  [INPUT_TYPES.INPUT_TEXT]: yup.string(),
  [INPUT_TYPES.INPUT_TEXTAREA]: yup.string(),
  [INPUT_TYPES.INPUT_NUMBER]: yup.number(),
  [INPUT_TYPES.INPUT_SELECT]: yup.string(),
  [INPUT_TYPES.INPUT_RADIO]: yup.string(),
  [INPUT_TYPES.INPUT_DATEPICKER]: yup.date(),
  [INPUT_TYPES.INPUT_TIMEPICKER]: yup.string(),
  [INPUT_TYPES.INPUT_SWITCH]: yup.boolean(),
};
