import {
  CustomFieldConfig,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

type DateLimitRule = {
  status: string;
  date: string;
};

export type FieldDateT = Customize<
  ItemField,
  {
    fieldType: "datePicker";
    format: string;
    defaultValue?: string;
    dateLimit?: DateLimitRule;
  }
>;

/**
 * Represents the configuration for a date field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to date fields.
 *
 * @interface FieldDate
 * @extends {ItemField}
 */

export interface FieldDate extends ItemField {
  fieldType: "datePicker"; // Type of the field (datePicker)
  format: string; // Format of the date to be displayed
  defaultValue?: string; // Default value for the date field. Used to set form default values object.
  dateLimit?: DateLimitRule; // Set date limit to limit allowed dates to select
}

/**
 * Represents the custom field configuration for a date field that is used to determine FieldDate component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to date fields.
 *
 * @interface FieldDateComponentProps
 * @extends {CustomFieldConfig}
 */

export type FieldDateComponentProps = {
  format: string; // Format of the date to be displayed
  dateLimit?: DateLimitRule; // Set date limit to limit allowed dates to select
} & CustomFieldConfig;
