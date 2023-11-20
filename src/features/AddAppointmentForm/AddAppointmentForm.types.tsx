import { Item } from "../AddAppointmentFields/AddAppointmentInputs.type";

export interface AddAppointmentFormProps {
  fieldsConfig: Item[];
  onSubmit: (data) => void;
}

export type ValidationRule = {
  fieldName: string;
  date?: string;
  targetField?: string;
};
