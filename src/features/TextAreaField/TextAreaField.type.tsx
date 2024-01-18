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

// used for form field configuration object
export interface FieldTextArea extends ItemField {
  fieldType: "textarea";
  defaultValue?: string;
  maxLength?: number;
  showCount: boolean;
}

// used for Custom Field Configuration and in case input requires custom props
export type FieldTextAreaComponentProps = {
  maxLength?: number;
  showCount: boolean;
} & CustomFieldConfig;
