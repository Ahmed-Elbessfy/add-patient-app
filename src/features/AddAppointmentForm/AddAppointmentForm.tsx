import { FC } from "react";
import { AddAppointmentFormProps } from "./AddAppointmentForm.types";

const AddAppointmentForm: FC<AddAppointmentFormProps> = ({
  fieldsConfig,
  onSubmit,
}) => {
  console.log(fieldsConfig, onSubmit);
  return <div>AddAppointmentForm</div>;
};

export default AddAppointmentForm;
