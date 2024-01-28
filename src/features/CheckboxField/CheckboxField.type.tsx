import {
  CustomFieldConfig,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldCheckboxT = Customize<
  ItemField,
  {
    fieldType: "checkbox";
  }
>;

/**
 * Represents the configuration for a checkbox field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to checkbox fields.
 *
 * @interface FieldCheckbox
 * @extends {ItemField}
 */
export interface FieldCheckbox extends ItemField {
  fieldType: "checkbox"; // Type of the field (checkbox)
  defaultChecked: boolean; // Default value for the switch field. Used to set form default values object.
}

/**
 * Represents the custom field configuration for a checkbox field that is used to determine FieldCheckbox component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to checkbox fields.
 *
 * @interface FieldCheckboxComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldCheckboxComponentProps = CustomFieldConfig;
