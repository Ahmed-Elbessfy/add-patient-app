import {
  ItemField,
  Customize,
  CustomFieldConfig,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldTextT = Customize<
  ItemField,
  {
    fieldType: "text";
    defaultValue?: string;
  }
>;

// used for form field configuration object
export interface FieldText extends ItemField {
  fieldType: "text";
  defaultValue?: string;
}

// used for Custom Field Configuration and in case input requires custom props
export type FieldTextComponentProps = CustomFieldConfig;
