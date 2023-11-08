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
        category: "field",
        fieldType: "text",
        name: "name",
        schemaName: "name",
        testId: "name",
        id: "name",
        placeholder: "formInputs.nameInput.text",
        label: "formInputs.nameInput.text",
        validation: [
          {
            type: "required",
          },
        ],
        visibility: true,
      },
      {
        category: "field",
        fieldType: "number",
        name: "age",
        schemaName: "age",
        testId: "age",
        id: "age",
        placeholder: "formInputs.ageInput.text",
        label: "formInputs.ageInput.text",
        validation: [
          {
            type: "required",
          },
          {
            type: "minimum",
            minNumber: 1,
          },
          {
            type: "maximum",
            maxNumber: 200,
          },
          {
            type: "isInteger",
            isInteger: true,
          },
        ],
        visibility: true,
      },
      {
        category: "field",
        fieldType: "text",
        name: "email",
        schemaName: "email",
        testId: "email",
        id: "email",
        placeholder: "formInputs.emailInput.text",
        label: "formInputs.emailInput.text",
        validation: [
          { type: "required" },
          {
            type: "pattern",
            pattern: /^[A-Za-z0-9,-_.]{3,}@[A-Za-z0-9]{3,}\.[A-Za-z0-9]{3,}$/,
          },
        ],
        visibility: true,
      },
      {
        category: "field",
        fieldType: "text",
        name: "country",
        schemaName: "country",
        testId: "country",
        id: "country",
        placeholder: "formInputs.countryInput.text",
        label: "formInputs.countryInput.text",
        validation: [{ type: "required" }],
        visibility: true,
      },
      {
        category: "field",
        fieldType: "select",
        name: "gender",
        schemaName: "gender",
        testId: "gender",
        id: "gender",
        placeholder: "formInputs.genderInput.text",
        label: "formInputs.genderInput.text",
        options: [
          {
            value: "male",
            label: `formInputs.genderInput.options.male`,
          },
          {
            value: "female",
            label: `formInputs.genderInput.options.female`,
          },
        ],
        validation: [{ type: "required" }],
        visibility: true,
      },
      {
        category: "field",
        fieldType: "radio",
        name: "maritalStatus",
        schemaName: "maritalStatus",
        testId: "maritalStatus",
        id: "maritalStatus",
        placeholder: "formInputs.MarriageRadioInput.text",
        label: "formInputs.MarriageRadioInput.text",
        options: [
          {
            value: "married",
            label: "formInputs.MarriageRadioInput.options.married",
          },
          {
            value: "unmarried",
            label: "formInputs.MarriageRadioInput.options.unmarried",
          },
        ],
        validation: [{ type: "required" }],
        visibility: true,
      },
      {
        category: "layout",
        type: "hStack",
        gap: 1,
        children: [
          {
            category: "field",
            fieldType: "text",
            name: "wifeName",
            schemaName: "wifeName",
            testId: "wifeName",
            id: "wifeName",
            placeholder: "formInputs.wifeNameInput.text",
            label: "formInputs.wifeNameInput.text",
            validation: [{ type: "required" }],
            visibility: false,
          },
        ],
      },
      {
        category: "field",
        fieldType: "checkbox",
        name: "preferredMeals",
        schemaName: "preferredMeals",
        testId: "preferredMeals",
        id: "preferredMeals",
        label: "formInputs.prefMealCheckboxInput.text",
        options: [
          {
            label: "formInputs.prefMealCheckboxInput.options.apple",
            value: "apple",
          },
          {
            label: "formInputs.prefMealCheckboxInput.options.pear",
            value: "pear",
          },
          {
            label: "formInputs.prefMealCheckboxInput.options.orange",
            value: "orange",
          },
        ],
        validation: [
          {
            type: "at_least_one_required",
          },
        ],
        visibility: true,
      },
      {
        category: "field",
        fieldType: "datePicker",
        name: "pastDate",
        schemaName: "pastDate",
        testId: "pastDate",
        id: "pastDate",
        placeholder: "formInputs.datePickerInput.text",
        label: "formInputs.datePickerInput.text",
        showTime: false,
        format: "YYYY-MM-DD",
        validation: [
          { type: "required" },
          {
            type: "earlier_than",
            date: new Date(),
          },
        ],
        visibility: true,
      },
      {
        category: "field",
        fieldType: "datePicker",
        name: "futureDate",
        schemaName: "futureDate",
        testId: "futureDate",
        id: "futureDate",
        placeholder: "formInputs.datePickerInput.text",
        label: "formInputs.datePickerInput.text",
        showTime: false,
        format: "YYYY-MM-DD",
        validation: [
          { type: "required" },
          {
            type: "later_than",
            date: new Date(),
          },
        ],
        visibility: true,
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
