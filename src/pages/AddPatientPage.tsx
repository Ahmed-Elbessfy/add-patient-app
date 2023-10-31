import { FC } from "react";
// import AddPatientForm from "../features/AddPatientForm/AddPatientForm";
import { CheckboxValueType } from "antd/es/checkbox/Group";
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

  // Dynamic Form Configuration
  const onChange = (
    value: string | number | CheckboxValueType[] | boolean
  ) => {};

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
        onChange,
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "text",
        name: "email",
        schemaName: "email",
        testId: "email",
        id: "email",
        placeholder: `${t("formInputs.emailInput.text")}`,
        label: `${t("formInputs.emailInput.text")}`,
        onChange,
        // validationRules: [
        //   {
        //     required: true,
        //     pattern: /^[A-Za-z0-9,-_.]{3,}@[A-Za-z0-9]{3,}.[A-Za-z]{2,}$/,
        //   },
        // ],
      },
      {
        fieldType: "number",
        name: "age",
        schemaName: "age",
        testId: "age",
        id: "age",
        placeholder: `${t("formInputs.ageInput.text")}`,
        label: `${t("formInputs.ageInput.text")}`,
        onChange,
        // validationRules: [{ required: true, min: 1, max: 200 }],
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
        onChange,
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "text",
        name: "phone",
        schemaName: "phone",
        testId: "phone",
        id: "phone",
        placeholder: `${t("formInputs.phoneInput.text")}`,
        label: `${t("formInputs.phoneInput.text")}`,
        onChange,
        // validationRules: [
        //   {
        //     required: true,
        //     pattern:
        //       /^(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/,
        //   },
        // ],
      },
      {
        fieldType: "text",
        name: "country",
        schemaName: "country",
        testId: "country",
        id: "country",
        placeholder: `${t("formInputs.countryInput.text")}`,
        label: `${t("formInputs.countryInput.text")}`,
        onChange,
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "textarea",
        name: "description",
        schemaName: "description",
        testId: "description",
        id: "description",
        placeholder: `${t("formInputs.descriptionInput.text")}`,
        label: `${t("formInputs.descriptionInput.text")}`,
        onChange,
        // validationRules: [{ required: false }],
      },
      {
        fieldType: "radio",
        name: "gamer",
        schemaName: "gamer",
        testId: "gamer",
        id: "gamer",
        placeholder: `${t("formInputs.gamerRadioInput.text")}`,
        label: `${t("formInputs.gamerRadioInput.text")}`,
        options: [
          {
            value: "gamer",
            label: `${t("formInputs.gamerRadioInput.options.gamer")}`,
          },
          {
            value: "not_gamer",
            label: `${t("formInputs.gamerRadioInput.options.not_gamer")}`,
          },
        ],
        onChange,
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "checkbox",
        name: "preferredMeals",
        schemaName: "preferredMeals",
        testId: "preferredMeals",
        id: "preferredMeals",
        label: `${t("formInputs.prefMealCheckboxInput.text")}`,
        options: [
          {
            label: `${t("formInputs.prefMealCheckboxInput.options.apple")}`,
            value: "apple",
          },
          {
            label: `${t("formInputs.prefMealCheckboxInput.options.pear")}`,
            value: "pear",
          },
          {
            label: `${t("formInputs.prefMealCheckboxInput.options.orange")}`,
            value: "orange",
          },
        ],
        onChange,
        // validationRules: [
        //   { required: true, acceptMultiples: true, valueFormat: [] },
        // ],
      },
      {
        fieldType: "datePicker",
        name: "datePicker",
        schemaName: "datePicker",
        testId: "datePicker",
        id: "datePicker",
        placeholder: `${t("formInputs.datePickerInput.text")}`,
        label: `${t("formInputs.datePickerInput.text")}`,
        showTime: true,
        format: "DD/MM/YYYY,hh:mm",
        onChange,
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "rangePicker",
        name: "rangePicker",
        schemaName: "rangePicker",
        testId: "rangePicker",
        id: "rangePicker",
        placeholder: [
          `${t("formInputs.rangePickerInput.startText")}`,
          `${t("formInputs.rangePickerInput.endText")}`,
        ],
        label: `${t("formInputs.rangePickerInput.text")}`,
        showTime: true,
        format: "DD/MM/YYYY,hh:mm",
        onChange,
        // validationRules: [
        //   { required: true, acceptMultiples: true, valueFormat: [] },
        // ],
      },
      {
        fieldType: "switch",
        name: "available",
        schemaName: "available",
        testId: "available",
        id: "available",
        label: `${t("formInputs.switchInput.text")}`,
        onChange,
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "slider",
        name: "how_much",
        schemaName: "how_much",
        testId: "how_much",
        id: "slider",
        label: `${t("formInputs.sliderInput.text")}`,
        onChange,
        // validationRules: [{ required: true, min: 1 }],
      },
      {
        fieldType: "rate",
        name: "rate",
        schemaName: "rate",
        testId: "rate",
        id: "rate",
        label: `${t("formInputs.rateInput.text")}`,
        allowHalfRate: true,
        onChange,
        // validationRules: [{ required: true, min: 0.5 }],
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
