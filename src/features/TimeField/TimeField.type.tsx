import {
  FieldComponentProps,
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

export interface FieldTime extends ItemField {
  fieldType: "timePicker";
  use12Hours: boolean;
  format: string;
  defaultValue?: string;
}

export type FieldTimeComponentProps = FieldTime & FieldComponentProps;
