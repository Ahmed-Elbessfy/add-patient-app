import {
  CustomFieldConfig,
  ItemField,
  Option,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldRadioT = Customize<
  ItemField,
  {
    fieldType: "radio";
    defaultValue?: string;
    options: Option[];
  }
>;

/**
 * Represents the configuration for a radio field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to radio fields.
 *
 * @interface FieldRadio
 * @extends {ItemField}
 */
export interface FieldRadio extends ItemField {
  fieldType: "radio"; // Type of the field (radio)
  options: Option[]; // available options of radio field
  defaultValue?: string; // Default value for the Radio field. Used to set form default values object.
}

/**
 * Represents the custom field configuration for a radio field that is used to determine FieldRadio component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to radio fields.
 *
 * @interface FieldRadioComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldRadioComponentProps = {
  options: Option[]; // available options of radio field
} & CustomFieldConfig;
