import dayjs from "dayjs";
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
      if (
        "defaultValue" in item &&
        item.fieldType === "datePicker" &&
        item.defaultValue === "today"
      ) {
        // accepted format "YYYY/MM/DD"
        defaultValuesObject[item.schemaName] = dayjs().format("YYYY/MM/DD");
      }

      // custom case for time picker default value
      if (
        "defaultValue" in item &&
        item.fieldType === "timePicker" &&
        item.defaultValue === "now"
      ) {
        // Target Format hh:mm a
        const currentHour = new Date().getHours();
        defaultValuesObject[item.schemaName] = dayjs()
          .hour(currentHour + 1)
          .minute(0)
          .format("hh:mm a");
      }
      if (
        "defaultValue" in item &&
        item.fieldType === "timePicker" &&
        item.defaultValue === "next"
      ) {
        // Target Format hh:mm a
        const currentHour = new Date().getHours();
        defaultValuesObject[item.schemaName] = dayjs()
          .hour(currentHour + 1)
          .minute(30)
          .format("hh:mm a");
      }

      // config schema
      // use currentItem since its type is FormFieldConfig same as accepted by parseValidation parameter type
      shape[currentItem.schemaName] = parseValidation(currentItem);
    }

    if (item.category === "layout") {
      const currentItem = item as ItemLayout;
      configValidation(currentItem.children);
    }
  });
  return { shape, defaultValuesObject };
};
