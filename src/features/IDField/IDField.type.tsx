import {
  ItemField,
  Customize,
  CustomFieldConfig,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldIDT = Customize<
  ItemField,
  {
    fieldType: "idField";
    defaultValue?: string;
  }
>;

/**
 * Represents the configuration for a id field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to id fields.
 *
 * @interface FieldID
 * @extends {ItemField}
 */
export interface FieldID extends ItemField {
  fieldType: "idField"; // Type of the field (idField)
  defaultValue?: string; // Default value for the id field. Used to set form default values object.
}

/**
 * Represents the custom field configuration for a id field that is used to determine FieldID component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to id fields.
 *
 * @interface FieldIDComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldIDComponentProps = CustomFieldConfig;
