import * as yup from "yup";
import dayjs from "dayjs";
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
  TIME_EARLIER_THAN: "time_earlier_than",
  TIME_LATER_THAN: "time_later_than",
};

export const ERROR_MESSAGES = {
  [VALIDATION_RULE_TYPES.REQUIRED]: ({ fieldName }: ValidationRule) =>
    `${fieldName} field is required`,
  [VALIDATION_RULE_TYPES.EARLIER_THAN]: ({ fieldName, date }: ValidationRule) =>
    `${fieldName} must be earlier than ${date}`,
  [VALIDATION_RULE_TYPES.LATER_THAN]: ({ fieldName, date }: ValidationRule) =>
    `${fieldName} must be after ${date}`,
  [VALIDATION_RULE_TYPES.TIME_EARLIER_THAN]: ({
    fieldName,
    time,
  }: ValidationRule) => `${fieldName} must be before ${time}`,
  [VALIDATION_RULE_TYPES.TIME_LATER_THAN]: ({
    fieldName,
    time,
  }: ValidationRule) => `${fieldName} must be after ${time}`,
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

/**********************************************************************
 **********************************************************************
                    CUSTOM METHODS CONFIGURATION
***********************************************************************
***********************************************************************/

// Extend StringSchema type to accept new methods
declare module "yup" {
  interface StringSchema {
    isTimeEarlierThan(message: string, targetTime: string): this;
    isTimeLaterThan(message: string, targetTime: string): this;
  }
}

// is Time Earlier Than:
// used for checking of time picker input is earlier than a target time
yup.addMethod(
  yup.string,
  "isTimeEarlierThan",
  function ({ errorMsg, targetTime }) {
    return this.test({
      name: "isTimeEarlierThan",
      message: errorMsg || "Invalid time",
      exclusive: true,
      test: function (value) {
        // Use dayjs to parse the input time
        const parsedTime = dayjs(value, "HH:mm", true);
        // Parse the target time
        const parsedTargetTime = dayjs(targetTime, "HH:mm", true);

        // Check if parsing was successful and both input & target time is a valid time
        if (!parsedTime.isValid() || !parsedTargetTime.isValid()) {
          return false;
        }

        // Compare the input time to the target time
        return parsedTime.isBefore(parsedTargetTime, "minute");
      },
    });
  }
);

// is Time Later Than:
// used for checking of time picker input is later than a target time
yup.addMethod(
  yup.string,
  "isTimeLaterThan",
  function ({ errorMsg, targetTime }) {
    return this.test({
      name: "isTimeLaterThan",
      message: errorMsg || "Invalid time",
      exclusive: true,
      test: function (value) {
        // Use dayjs to parse the input time
        const parsedTime = dayjs(value, "HH:mm", true);
        // Parse the target time
        const parsedTargetTime = dayjs(targetTime, "HH:mm", true);

        // Check if parsing was successful and both input & target time is a valid time
        if (!parsedTime.isValid() || !parsedTargetTime.isValid()) {
          return false;
        }

        // Compare the input time to the target time
        return parsedTime.isAfter(parsedTargetTime, "minute");
      },
    });
  }
);
