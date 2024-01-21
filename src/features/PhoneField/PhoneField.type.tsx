import {
  CustomFieldConfig,
  ItemField,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export interface FieldPhone extends ItemField {
  fieldType: "phone";
  defaultValue?: string;
}

export type FieldPhoneComponentProps = FieldPhone & CustomFieldConfig;
