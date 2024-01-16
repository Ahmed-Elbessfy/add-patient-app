import {
  FieldComponentProps,
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

export interface FieldSelect extends ItemField {
  fieldType: "select";
  options: Option[];
  defaultValue?: string;
}

export type FieldSelectComponentProps = FieldSelect & FieldComponentProps;
