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

// Schema Config
// build schema & default values
export const configValidation = (itemsData: Item[], shape: yup.ObjectShape) => {
  itemsData.forEach((item: Item) => {
    if (item.category === "field") {
      const currentItem = item as FormFieldConfig;
      if (currentItem.fieldType !== "dualField") {
        // if not nested
        if (!currentItem.name.includes(".")) {
          shape[currentItem.name] = parseValidation(currentItem);
        } else {
          // if nested
          const path = currentItem.name.split(".").reverse();
          shape[path[0]] = parseValidation(currentItem);
        }
      } else {
        // Dual field has children fields so it can be treated as layout or form children fields
        configValidation(currentItem.fieldsConfig, shape);
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
        fieldName = currentItem.name.split(".").slice(-1)[0];
      }

      // get last name of field name to get its value for conditional applying of nested forms validation
      // full name can't be used since it contains the full path including inheritance from parent form path
      // In nested form scope, full path as prop names does not exist but the only last prop name so it can be accessed and read
      const conditionalFields =
        currentItem.visibility &&
        currentItem.visibility.map((rule) => rule.field.split(".").at(-1));

      // add new form schema to current shape
      shape[fieldName] = yup.object().when(conditionalFields, {
        is: (...fields: CustomRuleFields[]) => {
          return currentItem.visibility?.every(
            (rule, ind) => rule.value === fields[ind]
          );
        },
        then: (schema) => {
          return schema.shape(
            configValidation(currentItem.children, newFormShape)
          );
        },
      });
    }
  });

  return shape;
};

// build default values Object
export const setDefaultValues = (
  items: Item[],
  defaultValues: DefaultValueObjectFormat = {}
) => {
  items.forEach((item) => {
    if (item.category === "field") {
      const currentItem = item as FormFieldConfig;

      /********************
        - config default values FOR FORM STATE which gets validated
        - default value for each field input is for the displayed value for user
         ********************/

      if (currentItem.fieldType === "dualField") {
        // Dual field has children fields so it can be treated as layout or form children fields
        setDefaultValues(currentItem.fieldsConfig, defaultValues);
      } else {
        // setting default value field name
        // if nested, get last name
        // if not nested, get item name
        const fieldName: string = currentItem.name.includes(".")
          ? currentItem.name.split(".").slice(-1)[0]
          : currentItem.name;

        // setting default value field value
        // double check for typescript
        if (
          "defaultValue" in currentItem &&
          currentItem.defaultValue !== undefined
        ) {
          // default state is when default value for any field not time or date,
          let currentDefaultValue: string | number | dayjs.Dayjs =
            currentItem.defaultValue;

          // custom case for date picker default value
          if (currentItem.fieldType === "datePicker") {
            currentDefaultValue =
              currentItem.defaultValue &&
              formatDateTime(currentItem.defaultValue);
          }

          // custom case for time picker default value
          if (currentItem.fieldType === "timePicker") {
            currentDefaultValue = formatDateTime(currentItem.defaultValue);
          }
          // store current field default value
          defaultValues[fieldName] = currentDefaultValue;
        }
        // setting default value for switch & checkbox fields
        if ("defaultChecked" in currentItem) {
          defaultValues[fieldName] = currentItem.defaultChecked;
        }
      }
    }

    if (item.category === "layout") {
      const currentItem = item as ItemLayout;
      setDefaultValues(currentItem.children, defaultValues);
    }

    if (item.category === "form") {
      const currentItem = item as ItemForm;
      const currentFormDefaultObject = {};

      // set embedded form name
      // if nested, get last name
      // if not nested, get item name
      const objName: string = currentItem.name.includes(".")
        ? currentItem.name.split(".").slice(-1)[0]
        : currentItem.name;

      defaultValues = {
        ...defaultValues,
        [objName]: setDefaultValues(
          currentItem.children,
          currentFormDefaultObject
        ),
      };
    }
  });

  return defaultValues;
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
