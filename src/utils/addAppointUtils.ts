import dayjs, { ManipulateType } from "dayjs";
import * as yup from "yup";
import {
  Item,
  ItemLayout,
  FormFieldConfig,
  ItemForm,
  CustomRuleFields,
} from "../features/AddAppointmentFields/AddAppointmentInputs.type";
import {
  DataSource,
  Actions,
  DefaultValueObjectFormat,
} from "../features/AddAppointmentForm/AddAppointmentForm.types";
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
  defaultValues: DefaultValueObjectFormat = {},
  dataSourceObject: DataSource,
  actionsObject: Actions
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
        setDefaultValues(
          currentItem.fieldsConfig,
          defaultValues,
          dataSourceObject,
          actionsObject
        );
      } else {
        // setting default value field name

        // before applying default values configuration, check for data source or action source object that affects default value

        if ("dataSourceConfig" in currentItem) {
          // only apply config if the data source or actions source is affecting default value or default checked
          // determine source object
          const source =
            currentItem.dataSourceConfig?.source === "dataSource"
              ? dataSourceObject
              : actionsObject;
          // get field data source/action source config
          const config = source[currentItem.name];

          // if default value is not a boolean, like text, number, select ..etc
          // check for defaultValue exist in current item to prevent typescript error that it does not exist in some fields types
          if ("defaultValue" in config && "defaultValue" in currentItem) {
            const { defaultValue } = configDataSource(
              currentItem,
              dataSourceObject,
              actionsObject
            );

            currentItem.defaultValue = defaultValue;
          }

          // if default value is boolean, for switch & checkbox field types
          // check for defaultChecked exist in current item to prevent typescript error that it does not exist in some fields types
          if ("defaultChecked" in config) {
            const { defaultChecked } = configDataSource(
              currentItem,
              dataSourceObject,
              actionsObject
            );

            currentItem.defaultChecked = defaultChecked;
          }
        }

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
      setDefaultValues(
        currentItem.children,
        defaultValues,
        dataSourceObject,
        actionsObject
      );
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
          currentFormDefaultObject,
          dataSourceObject,
          actionsObject
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

// Helper function to apply data source configuration
const applyDataSourceConfig = (
  item: FormFieldConfig,
  configObject: DataSource | Actions
): FormFieldConfig => {
  // Extract the name of the field from the item
  const { name } = item;
  // Retrieve the specific configuration for the field from the provided config object
  const sourceConfig = configObject[name];

  // Check if the configuration exists for the field
  if (!sourceConfig) {
    // Throw an error if no configuration is found, indicating the source type and field name
    throw new Error(`No Data source configuration for ${name} field`);
  }

  // check if property exists in field configuration
  for (const propName in sourceConfig) {
    if (!(item as any)[propName])
      throw Error(
        `Property ${propName} does not exist in ${name} field configuration`
      );
  }

  // Merge the original item with the retrieved configuration and return the result
  return { ...item, ...sourceConfig };
};

// Helper function to apply actions source configuration
const applyActionsConfig = (
  item: FormFieldConfig,
  actionsObject: Actions
): FormFieldConfig => {
  // Extract the name of the field from the item
  const { name } = item;
  // Retrieve the specific actions configuration for the field from the actions source object
  const sourceConfig = actionsObject[name];

  // Check if the actions configuration exists for the field
  if (!sourceConfig) {
    // Throw an error if no actions configuration is found, indicating the field name
    throw new Error(`No Actions source configuration for ${name} field`);
  }

  // Iterate over the sourceConfig object to apply each event configuration
  // and store the results in a new object, actionsConfig
  const actionsConfig = Object.keys(sourceConfig).reduce(
    (configObj, propName) => {
      // check if property exists in field configuration
      if (!(item as any)[propName])
        throw Error(
          `Property ${propName} does not exist in ${name} field configuration`
        );

      // check if action requires parameters
      if (sourceConfig[propName].length !== 0) {
        configObj[propName] = sourceConfig[propName];
      } else {
        // If action does not requires parameters
        configObj[propName] = sourceConfig[propName]();
      }
      return configObj;
    },
    {} as Record<string, unknown>
  );

  // Merge the original item with the actionsConfig object and return the result
  return { ...item, ...actionsConfig };
};

export const configDataSource = (
  item: FormFieldConfig,
  dataSourceObject: DataSource,
  actionsObject: Actions
): FormFieldConfig => {
  // Extract the dataSourceConfig from the item
  const { dataSourceConfig } = item;

  // Determine which helper function to use based on the source type specified in dataSourceConfig
  if (dataSourceConfig?.source === "dataSource") {
    // Apply data source configuration
    return applyDataSourceConfig(item, dataSourceObject);
  } else {
    // Apply actions source configuration
    return applyActionsConfig(item, actionsObject);
  }
};
