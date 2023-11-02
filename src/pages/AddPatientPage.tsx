import { FC } from "react";
// import AddPatientForm from "../features/AddPatientForm/AddPatientForm";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { ADD_PATIENT } from "../patterns/DynamicForm/DynamicForm.gql";
import DynamicForm from "../patterns/DynamicForm/DynamicForm";
import {
  DynamicFormConfiguration,
  DynamicFormOutput,
} from "../patterns/DynamicForm/DynamicForm.types";

const AddPatientPage: FC = () => {
  // dynamic form translation configurations
  const { t } = useTranslation("lang");

  // send data to server
  const [createPatient] = useMutation(ADD_PATIENT, { variables: { data: {} } });
  const onSubmit = (data: DynamicFormOutput) => {
    console.log(data);
    createPatient({
      variables: { key: Math.floor(Math.random() * 10000), ...data },
    });
  };

  const formConfig: DynamicFormConfiguration = {
    heading: `${t("formHeader")}`,
    inputsConfig: [
      {
        fieldType: "text",
        name: "name",
        schemaName: "name",
        testId: "name",
        id: "name",
        placeholder: `${t("formInputs.nameInput.text")}`,
        label: `${t("formInputs.nameInput.text")}`,
        // validationRules: [{ required: true }],
        validation: [
          {
            type: "required",
          },
        ],
      },
      {
        fieldType: "number",
        name: "age",
        schemaName: "age",
        testId: "age",
        id: "age",
        placeholder: `${t("formInputs.ageInput.text")}`,
        label: `${t("formInputs.ageInput.text")}`,
        validation: [
          {
            type: "required",
          },
          {
            type: "minimum",
            minNumber: 1,
          },
        ],
      },
    ],
    onSubmit,
  };

  return (
    <>
      {/* <AddPatientForm /> */}
      <DynamicForm {...formConfig} />
    </>
  );
};

export default AddPatientPage;
