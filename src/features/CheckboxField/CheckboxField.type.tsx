import {
  FieldComponentProps,
  ItemField,
  Customize,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldCheckboxT = Customize<
  ItemField,
  {
    fieldType: "checkbox";
  }
>;

export interface FieldCheckbox extends ItemField {
  fieldType: "checkbox";
  defaultChecked: boolean;
}

export type FieldCheckboxComponentProps = FieldCheckbox & FieldComponentProps;
