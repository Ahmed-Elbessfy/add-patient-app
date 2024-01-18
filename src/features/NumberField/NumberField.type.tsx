import {
  CustomFieldConfig,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldNumberT = Customize<
  ItemField,
  {
    fieldType: "number";
    defaultValue?: number;
  }
>;

// used for form field configuration object
export interface FieldNumber extends ItemField {
  fieldType: "number";
  defaultValue?: number;
}

// used for Custom Field Configuration and in case input requires custom props
export type FieldNumberComponentProps = {
  fieldType: "number";
} & CustomFieldConfig;
