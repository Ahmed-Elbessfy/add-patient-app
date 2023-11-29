import * as yup from "yup";
import dayjs from "dayjs";
// import { ValidationRule } from "./AddAppointmentForm.types";

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
  HAS_PATTERN: "hasPattern",
  MINIMUM: "minimum",
  MAXIMUM: "maximum",
};

// if error messages continue to be kind of systematic for any type of validation rule, we can consider removing this object and return the error Translation Key directly
// will need to check with Anas first
export const ERROR_MESSAGES = {
  [VALIDATION_RULE_TYPES.REQUIRED]: (errorMsgKey: string) => errorMsgKey,
  [VALIDATION_RULE_TYPES.EARLIER_THAN]: (errorTransKey: string) =>
    errorTransKey,
  [VALIDATION_RULE_TYPES.LATER_THAN]: (errorTransKey: string) => errorTransKey,
  [VALIDATION_RULE_TYPES.TIME_EARLIER_THAN]: (errorTransKey: string) =>
    errorTransKey,
  [VALIDATION_RULE_TYPES.TIME_LATER_THAN]: (errorTransKey: string) =>
    errorTransKey,
  [VALIDATION_RULE_TYPES.HAS_PATTERN]: (errorTransKey: string) => errorTransKey,
  [VALIDATION_RULE_TYPES.MINIMUM]: (errorTransKey: string) => errorTransKey,
  [VALIDATION_RULE_TYPES.MAXIMUM]: (errorTransKey: string) => errorTransKey,
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
    isTimeEarlierThan(message: string, targetField: string): this;
    isTimeLaterThan(message: string, targetField: string): this;
  }
}

// is Time Earlier Than:
// used for checking of time picker input is earlier than a target time
yup.addMethod(
  yup.string,
  "isTimeEarlierThan",
  function ({ targetField, errorMsg }) {
    return this.test({
      name: "isTimeEarlierThan",
      message: errorMsg || "Invalid time",
      exclusive: true,
      test: function (value, context) {
        // get form state values or current fields values from context.parent
        const targetTime = context.parent[targetField];
        // Use dayjs to parse the input time
        const parsedTime = dayjs(value, "hh:mm a", true);
        // Parse the target time
        const parsedTargetTime = dayjs(targetTime, "hh:mm a", true);

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
  function ({ errorMsg, targetField }) {
    return this.test({
      name: "isTimeLaterThan",
      message: errorMsg || "Invalid time",
      exclusive: true,
      test: function (value, context) {
        // get form state values or current fields values from context.parent
        const targetTime = context.parent[targetField];
        // Use dayjs to parse the input time
        const parsedTime = dayjs(value, "hh:mm a", true);
        // Parse the target time
        const parsedTargetTime = dayjs(targetTime, "hh:mm a", true);

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
