import { FC } from "react";
import AddAppointmentForm from "../AddAppointmentForm/AddAppointmentForm";
import { addAppointmentFieldsConfig } from "./newAppointConfig";

const AddAppointmentContainer: FC = () => {
  const onSubmit = (data) => console.log(data);
  const formConfig = { fieldsConfig: addAppointmentFieldsConfig, onSubmit };
  return (
    <div>
      <AddAppointmentForm {...formConfig} />
    </div>
  );
};

export default AddAppointmentContainer;
