import {
  CustomFieldConfig,
  ItemField,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

/**
 * Represents the configuration for a phone field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to phone fields.
 *
 * @interface FieldPhone
 * @extends {ItemField}
 */
export interface FieldPhone extends ItemField {
  fieldType: "phone"; // Type of the field (phone)
  defaultValue?: string; // Default value for the text field. Used to set form default values object.
}

/**
 * Represents the custom field configuration for a phone field that is used to determine FieldPhone component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to phone fields.
 *
 * @interface FieldPhoneComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldPhoneComponentProps = CustomFieldConfig;
