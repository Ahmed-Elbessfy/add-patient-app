import { Item } from "../AddAppointmentFields/AddAppointmentInputs.type";

export interface AddAppointmentFormProps {
  fieldsConfig: Item[];
  onSubmit: (data) => void;
}
