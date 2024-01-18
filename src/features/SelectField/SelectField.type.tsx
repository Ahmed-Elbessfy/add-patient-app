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

// used for form field configuration object
export interface FieldSelect extends ItemField {
  fieldType: "select";
  options: Option[];
  defaultValue?: string;
}

// used for Custom Field Configuration and in case input requires custom props
export type FieldSelectComponentProps = {
  options: Option[];
} & CustomFieldConfig;
