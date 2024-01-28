import {
  CustomFieldConfig,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldTextAreaT = Customize<
  ItemField,
  {
    fieldType: "textarea";
    defaultValue?: string;
    maxLength?: number;
    showCount: boolean;
  }
>;

/**
 * Represents the configuration for a textarea field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to textarea fields.
 *
 * @interface FieldTextArea
 * @extends {ItemField}
 */
export interface FieldTextArea extends ItemField {
  fieldType: "textarea"; // Type of the field (textarea)
  defaultValue?: string; // Default value for the textarea field. Used to set form default values object.
  maxLength?: number; // Maximum length of the textarea content letters
  showCount: boolean; // Indicates whether to show character count
}

/**
 * Represents the custom field configuration for a textarea field that is used to determine FieldTextArea component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to textarea fields.
 *
 * @interface FieldTextAreaComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldTextAreaComponentProps = {
  maxLength?: number; // Maximum length of the textarea content letters
  showCount: boolean; // Indicates whether to show character count
} & CustomFieldConfig;
