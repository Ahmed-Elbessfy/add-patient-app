import {
  ItemField,
  Customize,
  CustomFieldConfig,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldTextT = Customize<
  ItemField,
  {
    fieldType: "text";
    defaultValue?: string;
  }
>;

/**
 * Represents the configuration for a text field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to text fields.
 *
 * @interface FieldText
 * @extends {ItemField}
 */
export interface FieldText extends ItemField {
  fieldType: "text"; // Type of the field (text)
  defaultValue?: string; // Default value for the text field. Used to set form default values object.
}

/**
 * Represents the custom field configuration for a text field that is used to determine FieldText component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to text fields.
 *
 * @interface FieldTextComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldTextComponentProps = CustomFieldConfig;
