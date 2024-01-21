import {
  FormFieldConfig,
  GeneralFieldConfig,
  ItemField,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export interface FieldDual extends ItemField {
  fieldType: "dualField";
  fieldsConfig: FormFieldConfig[];
}

export type FieldDualComponentProps = FieldDual & GeneralFieldConfig;
