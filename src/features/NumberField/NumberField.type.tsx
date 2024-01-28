import {
  CustomFieldConfig,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldNumberT = Customize<
  ItemField,
  {
    fieldType: "number";
    defaultValue?: number;
    min?: number;
    max?: number;
  }
>;

/**
 * Represents the configuration for a number field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to number fields.
 *
 * @interface FieldNumber
 * @extends {ItemField}
 */
export interface FieldNumber extends ItemField {
  fieldType: "number"; // Type of the field (text)
  defaultValue?: number; // Default value for the number field. Used to set form default values object.
  min?: number; // Minimum allowed value for the number field
  max?: number; // Maximum allowed value for the number field
}

/**
 * Represents the custom field configuration for a text field that is used to determine FieldNumber component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to text fields.
 *
 * @interface FieldNumberComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldNumberComponentProps = {
  min?: number; // Minimum allowed value for the number field
  max?: number; // Maximum allowed value for the number field
} & CustomFieldConfig;
