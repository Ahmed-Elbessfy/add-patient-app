import dayjs, { ManipulateType } from "dayjs";
import * as yup from "yup";
import {
  Item,
  ItemLayout,
  FormFieldConfig,
  ItemForm,
  CustomRuleFields,
} from "../features/AddAppointmentFields/AddAppointmentInputs.type";
import { DefaultValueObjectFormat } from "../features/AddAppointmentForm/AddAppointmentForm.types";
import { parseValidation } from "./addAppointValidation";

// default values config
const defaultValuesObject: DefaultValueObjectFormat =
  {} as DefaultValueObjectFormat;

// Schema Config
// build schema & default values
export const configValidation = (itemsData: Item[], shape: yup.ObjectShape) => {
  itemsData.forEach((item: Item) => {
    if (item.category === "field") {
      const currentItem = item as FormFieldConfig;
      // if not nested
      if (!currentItem.name.includes(".")) {
        shape[currentItem.name] = parseValidation(currentItem);
      } else {
        // if nested
        const path = currentItem.name.split(".").reverse();
        shape[path[0]] = parseValidation(currentItem);
      }
    }

    if (item.category === "layout") {
      const currentItem = item as ItemLayout;
      configValidation(currentItem.children, shape);
    }

    if (item.category === "form") {
      const currentItem = item as ItemForm;

      // create new form shape
      const newFormShape: yup.ObjectShape = {};

      // get field name to add form schema. Default value is form name, the case if not nested
      let fieldName: string = currentItem.name;

      // if form is nested inside another form, get last since shape already is inside right scope
      if (currentItem.name.includes(".")) {
        fieldName = currentItem.name.split(".").at(-1);
      }

      // add new form schema to current shape
      // console.log("shape before condition : ", currentItem.name, shape);
      shape[fieldName] = yup.object().when(
        currentItem.visibility?.map((rule) => rule.field),
        {
          is: (...fields: CustomRuleFields[]) => {
            console.log(
              "is visible and passed : ",
              currentItem.name,
              currentItem.visibility.map((rule) => rule.field),
              currentItem.visibility?.every(
                (rule, ind) => rule.value === fields[ind]
              )
            );
            return currentItem.visibility?.every(
              (rule, ind) => rule.value === fields[ind]
            );
          },
          then: (schema) => {
            console.log(currentItem.name, " should be rendered");
            // console.log(
            //   schema.shape(configValidation(currentItem.children, newFormShape))
            // );
            return schema.shape(
              configValidation(currentItem.children, newFormShape)
            );
          },
        }
      );

      // console.log("shape after condition : ", currentItem.name, shape);
      // shape[fieldName] = yup
      //   .object()
      //   .shape(configValidation(currentItem.children, newFormShape));
    }
  });
  // console.log(shape);
  return shape;
};

// build default values
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
          defaultValuesObject[currentItem.name] = currentDefaultValue;
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
      : // date validation takes into consideration current time & shows wrong indication that current day is later than limit due to using time into consideration
        // also, could not use dayjs since comparison is done by "min" yup method
        dayjs()
          [dir](parseInt(count), unit)
          .hour(0)
          .minute(0)
          .second(0)
          .millisecond(0);

    return value;
  } else {
    return dayjs(time);
  }
};
