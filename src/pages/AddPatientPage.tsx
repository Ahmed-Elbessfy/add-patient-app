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
          {
            type: "isInteger",
            isInteger: true,
          },
        ],
      },
      {
        fieldType: "text",
        name: "email",
        schemaName: "email",
        testId: "email",
        id: "email",
        placeholder: `${t("formInputs.emailInput.text")}`,
        label: `${t("formInputs.emailInput.text")}`,
        validation: [
          { type: "required" },
          {
            type: "pattern",
            pattern: /^[A-Za-z0-9,-_.]{3,}@[A-Za-z0-9]{3,}\.[A-Za-z0-9]{3,}$/,
          },
        ],
      },
      {
        fieldType: "text",
        name: "country",
        schemaName: "country",
        testId: "country",
        id: "country",
        placeholder: `${t("formInputs.countryInput.text")}`,
        label: `${t("formInputs.countryInput.text")}`,
        validation: [{ type: "required" }],
      },
      {
        fieldType: "select",
        name: "gender",
        schemaName: "gender",
        testId: "gender",
        id: "gender",
        placeholder: `${t("formInputs.genderInput.text")}`,
        label: `${t("formInputs.genderInput.text")}`,
        options: [
          {
            value: "male",
            label: `${t("formInputs.genderInput.options.male")}`,
          },
          {
            value: "female",
            label: `${t("formInputs.genderInput.options.female")}`,
          },
        ],
        validation: [{ type: "required" }],
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
