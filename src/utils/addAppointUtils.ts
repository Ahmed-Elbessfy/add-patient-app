import dayjs, { ManipulateType } from "dayjs";
import { ObjectShape } from "yup";
import {
  Item,
  ItemLayout,
  FormFieldConfig,
} from "../features/AddAppointmentFields/AddAppointmentInputs.type";
import { DefaultValueObjectFormat } from "../features/AddAppointmentForm/AddAppointmentForm.types";
import { parseValidation } from "./addAppointValidation";

// Schema Config
const shape: ObjectShape = {};
// default values config
const defaultValuesObject: DefaultValueObjectFormat =
  {} as DefaultValueObjectFormat;

// build schema & default values
export const configValidation = (itemsData: Item[]) => {
  itemsData.forEach((item: Item) => {
    if (item.category === "field") {
      const currentItem = item as FormFieldConfig;
      /********************
        config default values FOR FORM STATE which gets validated
        default value for each field input is for the displayed value for user
         ********************/

      if ("defaultChecked" in item) {
        defaultValuesObject[item.schemaName] = item.defaultChecked;
      }

      if ("defaultValue" in item)
        defaultValuesObject[item.schemaName] = item.defaultValue;

      // custom case for date picker default value
      if ("defaultValue" in item && item.fieldType === "datePicker") {
        defaultValuesObject[item.schemaName] =
          item.defaultValue && formatDateTime(item.defaultValue);
      }

      // custom case for time picker default value
      if ("defaultValue" in item && item.fieldType === "timePicker") {
        defaultValuesObject[item.schemaName] =
          item.defaultValue &&
          formatDateTime(item.defaultValue).format("hh:mm a");
      }

      // config schema
      // use currentItem since its type is FormFieldConfig same as accepted by parseValidation parameter type
      shape[currentItem.schemaName] = parseValidation(currentItem);
    }

    if (item.category === "layout" || item.category === "form") {
      const currentItem = item as ItemLayout;
      configValidation(currentItem.children);
    }
  });

  return { shape, defaultValuesObject };
};

// Formatting date and time
export const formatDateTime = (time: string) => {
  const regex =
      /(?<dir>add|subtract) (?<count>\d+) (?<unit>d|w|M|Q|y|h|m|s|ms)/,
    match = regex.exec(time);

  if (match !== null) {
    const { groups } = match;
    const { dir, count, unit } = groups as {
      dir: "add" | "subtract";
      count: string;
      unit: ManipulateType;
    };

    // this configure assumes that TIME is always will need to be ceiled up to next hour
    const value = ["h", "m", "ms", "s"].includes(unit)
      ? dayjs().add(1, "hour").startOf("hour")[dir](parseInt(count), unit)
      : dayjs()[dir](parseInt(count), unit);

    return value;
  } else {
    return dayjs(time);
  }
};
