import {
  FieldComponentProps,
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

export interface FieldTextArea extends ItemField {
  fieldType: "textarea";
  defaultValue?: string;
  maxLength?: number;
  showCount: boolean;
}

export type FieldTextAreaComponentProps = FieldTextArea & FieldComponentProps;
