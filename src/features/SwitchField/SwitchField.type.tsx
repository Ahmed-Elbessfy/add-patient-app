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

export interface FieldSwitch extends ItemField {
  fieldType: "switch";
  checkedChildren: string;
  unCheckedChildren: string;
  defaultChecked: boolean;
}

export type FieldSwitchComponentProps = {
  checkedChildren: string;
  unCheckedChildren: string;
  defaultChecked: boolean;
} & CustomFieldConfig;
