import {
  FieldComponentProps,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldTextT = Customize<
  ItemField,
  {
    fieldType: "text";
    defaultValue?: string;
  }
>;

export interface FieldText extends ItemField {
  fieldType: "text";
  defaultValue?: string;
}

export type FieldTextComponentProps = FieldText & FieldComponentProps;
