import {
  CustomFieldConfig,
  ItemField,
  Option,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldSelectT = Customize<
  ItemField,
  {
    fieldType: "select";
    defaultValue?: string;
    options: Option[];
  }
>;

/**
 * Represents the configuration for a select field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to select fields.
 *
 * @interface FieldSelect
 * @extends {ItemField}
 */
export interface FieldSelect extends ItemField {
  fieldType: "select"; // Type of the field (select)
  options: Option[]; // available options of select field
  defaultValue?: string; // Default value for the switch field. Used to set form default values object.
}

/**
 * Represents the custom field configuration for a select field that is used to determine FieldSelect component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to select fields.
 *
 * @interface FieldSelectComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldSelectComponentProps = {
  options: Option[]; // available options of select field
} & CustomFieldConfig;
