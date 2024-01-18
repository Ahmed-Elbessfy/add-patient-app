import {
  CustomFieldConfig,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldTimeT = Customize<
  ItemField,
  {
    fieldType: "timePicker";
    use12Hours: boolean;
    format: string;
    defaultValue?: string;
  }
>;

// used for form field configuration object
export interface FieldTime extends ItemField {
  fieldType: "timePicker";
  use12Hours: boolean;
  format: string;
  defaultValue?: string;
}

// used for Custom Field Configuration and in case input requires custom props
export type FieldTimeComponentProps = {
  use12Hours: boolean;
  format: string;
} & CustomFieldConfig;
