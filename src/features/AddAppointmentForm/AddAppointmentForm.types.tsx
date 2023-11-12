import { Item } from "../AddAppointmentFields.ts/AddAppointmentInputs.type";


export interface AddAppointmentFormProps {
  fieldsConfig: Item[];
  onSubmit: (data) => void;
}
