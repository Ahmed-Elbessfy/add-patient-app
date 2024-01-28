import {
  CustomFieldConfig,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldSwitchT = Customize<
  ItemField,
  {
    fieldType: "switch";
    checkedChildren: string;
    unCheckedChildren: string;
    defaultChecked: boolean;
  }
>;

/**
 * Represents the configuration for a switch field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to switch fields.
 *
 * @interface FieldSwitch
 * @extends {ItemField}
 */
export interface FieldSwitch extends ItemField {
  fieldType: "switch"; // Type of the field (switch)
  checkedChildren: string; // Label or content for the 'checked' state of the switch
  unCheckedChildren: string; // Label or content for the 'unchecked' state of the switch
  defaultChecked: boolean; // Default value for the switch field. Used to set form default values object.
}

/**
 * Represents the custom field configuration for a switch field that is used to determine FieldSwitch component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to switch fields.
 *
 * @interface FieldSwitchComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldSwitchComponentProps = {
  checkedChildren: string; // Label or content for the 'checked' state of the switch
  unCheckedChildren: string; // Label or content for the 'unchecked' state of the switch
} & CustomFieldConfig;
