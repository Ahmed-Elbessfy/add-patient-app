import * as yup from "yup";
import dayjs from "dayjs";
import i18next from "i18next";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const INPUT_TYPES = {
  INPUT_TEXT: "text",
  INPUT_TEXTAREA: "textarea",
  INPUT_NUMBER: "number",
  INPUT_SELECT: "select",
  INPUT_COUNTRY: "country",
  INPUT_RADIO: "radio",
  INPUT_DATEPICKER: "datePicker",
  INPUT_TIMEPICKER: "timePicker",
  INPUT_SWITCH: "switch",
  INPUT_CHECKBOX: "checkbox",
  INPUT_COMBINE: "combine",
};

export const VALIDATION_RULE_TYPES = {
  REQUIRED: "required",
  REQUIRED_IF: "requiredIf",
  EARLIER_THAN: "earlier_than",
  LATER_THAN: "later_than",
  TIME_EARLIER_THAN: "time_earlier_than",
  TIME_LATER_THAN: "time_later_than",
  HAS_PATTERN: "hasPattern",
  MINIMUM: "minimum",
  MAXIMUM: "maximum",
  IS_VALID_PHONE: "is_valid_phone",
};

export const ERROR_MESSAGES = {
  [VALIDATION_RULE_TYPES.REQUIRED]: (fieldName: string) => {
    // Translate field name
    const field = i18next.t(fieldName);

    return i18next.t("error_messages.required", { fieldName: field });
  },
  [VALIDATION_RULE_TYPES.REQUIRED_IF]: (fieldName: string) => {
    // Translate field name
    const field = i18next.t(fieldName);

    return i18next.t("error_messages.requiredIf", { fieldName: field });
  },
  [VALIDATION_RULE_TYPES.EARLIER_THAN]: (
    fieldName: string,
    limitDate: string
  ) => {
    // Translate field name
    const field = i18next.t(fieldName);

    return i18next.t("error_messages.earlier_than", {
      fieldName: field,
      limitDate,
    });
  },
  [VALIDATION_RULE_TYPES.LATER_THAN]: (
    fieldName: string,
    limitDate: string
  ) => {
    // Translate field name
    const field = i18next.t(fieldName);

    return i18next.t("error_messages.later_than", {
      fieldName: field,
      limitDate,
    });
  },
  [VALIDATION_RULE_TYPES.TIME_EARLIER_THAN]: (
    fieldName: string,
    targetFieldLabel: string
  ) => {
    // Translate field name & target field
    const field = i18next.t(fieldName),
      targetField = i18next.t(targetFieldLabel);

    return i18next.t("error_messages.time_earlier_than", {
      fieldName: field,
      targetField,
    });
  },
  [VALIDATION_RULE_TYPES.TIME_LATER_THAN]: (
    fieldName: string,
    targetFieldLabel: string
  ) => {
    // Translate field name & target field
    const field = i18next.t(fieldName),
      targetField = i18next.t(targetFieldLabel);

    return i18next.t("error_messages.time_later_than", {
      fieldName: field,
      targetField,
    });
  },
  [VALIDATION_RULE_TYPES.HAS_PATTERN]: (fieldName: string) => {
    // Translate field name & target field
    const field = i18next.t(fieldName);

    return i18next.t("error_messages.pattern", {
      fieldName: field,
    });
  },
  [VALIDATION_RULE_TYPES.MINIMUM]: (fieldName: string, minimum: number) => {
    // Translate field name & target field
    const field = i18next.t(fieldName);

    return i18next.t("error_messages.minimum", {
      fieldName: field,
      minimum,
    });
  },
  [VALIDATION_RULE_TYPES.MAXIMUM]: (fieldName: string, maximum: number) => {
    // Translate field name & target field
    const field = i18next.t(fieldName);

    return i18next.t("error_messages.maximum", {
      fieldName: field,
      maximum,
    });
  },
  [VALIDATION_RULE_TYPES.IS_VALID_PHONE]: (fieldName: string) => {
    // Translate field name & target field
    const field = i18next.t(fieldName);

    return i18next.t("error_messages.isValidPhone", {
      fieldName: field,
    });
  },
};

export const INPUT_VALIDATION_TYPES = {
  [INPUT_TYPES.INPUT_TEXT]: yup.string(),
  [INPUT_TYPES.INPUT_TEXTAREA]: yup.string(),
  [INPUT_TYPES.INPUT_NUMBER]: yup.number(),
  [INPUT_TYPES.INPUT_SELECT]: yup.string(),
  [INPUT_TYPES.INPUT_COUNTRY]: yup.string(),
  [INPUT_TYPES.INPUT_RADIO]: yup.string(),
  [INPUT_TYPES.INPUT_DATEPICKER]: yup.date(),
  [INPUT_TYPES.INPUT_TIMEPICKER]: yup.string(),
  [INPUT_TYPES.INPUT_SWITCH]: yup.boolean(),
  [INPUT_TYPES.INPUT_CHECKBOX]: yup.boolean(),
  [INPUT_TYPES.INPUT_COMBINE]: yup.string(),
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
    isValidPhoneNumber(message: string): this;
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

yup.addMethod(yup.string, "isValidPhoneNumber", function ({ errorMsg }) {
  return this.test({
    name: "isValidPhoneNumber",
    message: errorMsg || "Invalid Phone Number",
    exclusive: true,
    test: function (value) {
      if (value) {
        const parsedNumber = parsePhoneNumberFromString(value);

        // in some cases, parsedNumber.isValid() returns undefined and this breaks rule
        return parsedNumber && parsedNumber.isValid() ? true : false;
      }
      // in case no value
      return false;
    },
  });
});
