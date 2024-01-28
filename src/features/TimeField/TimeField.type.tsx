import {
  CustomFieldConfig,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldTimeT = Customize<
  ItemField,
  {
    fieldType: "timePicker";
    use12Hours: boolean;
    format: string;
    defaultValue?: string;
  }
>;

/**
 * Represents the configuration for a time field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to time fields.
 *
 * @interface FieldTime
 * @extends {ItemField}
 */
export interface FieldTime extends ItemField {
  fieldType: "timePicker"; // Type of the field (timePicker)
  use12Hours: boolean; // Whether to use a 12-hour format for the time field
  format: string; // Format of the time to be displayed
  defaultValue?: string; // Default value for the time field. Used to set form default values object.
}

/**
 * Represents the custom field configuration for a time field that is used to determine FieldTime component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to time fields.
 *
 * @interface FieldTimeComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldTimeComponentProps = {
  use12Hours: boolean; // Whether to use a 12-hour format for the time field
  format: string; // Format of the time to be displayed
} & CustomFieldConfig;
