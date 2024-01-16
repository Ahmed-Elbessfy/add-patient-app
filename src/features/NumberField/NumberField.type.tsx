import {
  FieldComponentProps,
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

export interface FieldNumber extends ItemField {
  fieldType: "number";
  defaultValue?: number;
}

export type FieldNumberComponentProps = FieldNumber & FieldComponentProps;
