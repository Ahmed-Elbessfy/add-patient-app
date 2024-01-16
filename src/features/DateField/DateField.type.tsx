import {
  FieldComponentProps,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

type DateLimitRule = {
  status: string;
  date: string;
};

export type FieldDateT = Customize<
  ItemField,
  {
    fieldType: "datePicker";
    format: string;
    defaultValue?: string;
    dateLimit?: DateLimitRule;
  }
>;

export interface FieldDate extends ItemField {
  fieldType: "datePicker";
  format: string;
  defaultValue?: string;
  dateLimit?: DateLimitRule;
}

export type FieldDateComponentProps = FieldDate & FieldComponentProps;
