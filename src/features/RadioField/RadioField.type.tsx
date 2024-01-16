import {
  FieldComponentProps,
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

export interface FieldRadio extends ItemField {
  fieldType: "radio";
  options: Option[];
  defaultValue?: string;
}

export type FieldRadioComponentProps = FieldRadio & FieldComponentProps;
