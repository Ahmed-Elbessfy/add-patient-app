import { FC } from "react";
import AddPatientForm from "../features/AddPatientForm/AddPatientForm";
import DynamicForm from "../patterns/DynamicFormComp/DynamicForm";

const AddPatientPage: FC = () => {
  return (
    <>
      <AddPatientForm />
      <DynamicForm />
    </>
  );
};

export default AddPatientPage;
