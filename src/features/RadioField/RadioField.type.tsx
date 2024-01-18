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

// used for form field configuration object
export interface FieldRadio extends ItemField {
  fieldType: "radio";
  options: Option[];
  defaultValue?: string;
}

// used for Custom Field Configuration and in case input requires custom props
export type FieldRadioComponentProps = {
  options: Option[];
} & CustomFieldConfig;
