import dayjs, { ManipulateType } from "dayjs";
import * as yup from "yup";
import {
  Item,
  ItemLayout,
  FormFieldConfig,
  ItemForm,
} from "../features/AddAppointmentFields/AddAppointmentInputs.type";
import { DefaultValueObjectFormat } from "../features/AddAppointmentForm/AddAppointmentForm.types";
import { parseValidation } from "./addAppointValidation";

// Schema Config
const shape: yup.ObjectShape = {};
// default values config
const defaultValuesObject: DefaultValueObjectFormat =
  {} as DefaultValueObjectFormat;

// build schema & default values
export const configValidation = (itemsData: Item[]) => {
  itemsData.forEach((item: Item) => {
    if (item.category === "field") {
      const currentItem = item as FormFieldConfig;

      // config schema
      // use currentItem since its type is FormFieldConfig same as accepted by parseValidation parameter type
      if (!currentItem.schemaName.match(/\./g)) {
        shape[currentItem.schemaName] = parseValidation(currentItem);
      } else {
        const formPath = currentItem.schemaName.split(".");

        // approach 1
        shape[formPath[0]].fields = {
          ...shape[formPath[0]].fields,
          [formPath[1]]: parseValidation(currentItem),
        };

        // approach 4
        // shape[formPath[0]] = yup.object().shape({
        //   ...shape[formPath[0]].fields,
        //   [formPath[1]]: parseValidation(currentItem),
        // });

        // approach 2
        // shape = {
        //   ...shape,
        //   [formPath[0]]: {
        //     ...[formPath[0]],
        //     fields: {
        //       ...[formPath[0]].fields,
        //       [formPath[1]]: parseValidation(currentItem),
        //     },
        //   },
        // };

        // approach 3
        // shape[formPath[0]].fields[formPath[1]] = parseValidation(currentItem);
      }
    }

    if (item.category === "layout") {
      const currentItem = item as ItemLayout;
      configValidation(currentItem.children);
    }

    if (item.category === "form") {
      const currentItem = item as ItemForm;

      if (!shape[currentItem.name]) {
        // If form, create new item of schema with name of form name property
        shape[currentItem.name] = yup.object().when(
          currentItem.visibility?.map((rule) => rule.field),
          {
            is: (...fields) => {
              // if visible
              return currentItem.visibility?.every(
                (rule, ind) => rule.value === fields[ind]
              );
            },
            then: (schema) => {
              // return schema item
              return schema.shape(configValidation(currentItem.children));
            },
          }
        );
      }
    }
  });

  return shape;
};

// build schema & default values
export const setDefaultValues = (itemsData: Item[]) => {
  itemsData.forEach((item: Item) => {
    if (item.category === "field") {
      const currentItem = item as FormFieldConfig;
      /********************
        config default values FOR FORM STATE which gets validated
        default value for each field input is for the displayed value for user
         ********************/

      if ("defaultValue" in currentItem || "defaultChecked" in currentItem) {
        // placeholder to set default value instead of setting its value each time
        let currentDefaultValue: string | number | boolean | dayjs.Dayjs =
          "defaultValue" in currentItem
            ? currentItem.defaultValue
            : currentItem.defaultChecked;

        //     }
        // custom case for date picker default value
        if (currentItem.fieldType === "datePicker") {
          currentDefaultValue =
            currentItem.defaultValue &&
            formatDateTime(currentItem.defaultValue);
        }

        // custom case for time picker default value
        if (currentItem.fieldType === "timePicker") {
          currentDefaultValue =
            currentItem.defaultValue &&
            formatDateTime(currentItem.defaultValue).format("hh:mm a");
        }

        // configuration for nested default values object
        if (!currentItem.name.match(/\./)) {
          // if no nested forms
          defaultValuesObject[currentItem.schemaName] = currentDefaultValue;
        } else {
          // if there are nested form
          const path = currentItem.name.split(".");
          // if there is already a nested object with path[0] name, add properties to current nest object
          if (defaultValuesObject[path[0]]) {
            defaultValuesObject[path[0]] = {
              ...defaultValuesObject[path[0]],
              [path[1]]: currentDefaultValue,
            };
          } else {
            // if there is no a nested object with path[0] name, create new nested object and add path[1] property and value
            defaultValuesObject[path[0]] = {
              [path[1]]: currentDefaultValue,
            };
          }
        }
      }
    }

    if (item.category === "layout") {
      const currentItem = item as ItemLayout;
      setDefaultValues(currentItem.children);
    }

    if (item.category === "form") {
      const currentItem = item as ItemForm;
      setDefaultValues(currentItem.children);
    }
  });

  return defaultValuesObject;
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
