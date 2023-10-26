import { FC, useState } from "react";
// import AddPatientForm from "../features/AddPatientForm/AddPatientForm";
import { CheckboxValueType } from "antd/es/checkbox/Group";

import DynamicForm from "../patterns/DynamicForm/DynamicForm";
import {
  DynamicFormConfiguration,
  DynamicFormOutput,
} from "../patterns/DynamicForm/DynamicForm.types";
import { useTranslation } from "react-i18next";

const AddPatientPage: FC = () => {
  const [formData, setFormData] = useState<DynamicFormOutput>({
    name: "",
    email: "",
    age: 1,
    country: "",
    phone: "",
    gender: "",
    description: "",
    gamer: "",
    preferredMeals: [],
    datePicker: "",
    rangePicker: [],
    available: false,
    how_much: 0,
    rate: 0,
  });

  // dynamic form translation configurations
  const { t } = useTranslation("lang");

  // Dynamic Form Configuration
  const onChange = (
    name: string,
    value: string | number | CheckboxValueType[] | boolean
  ) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = () => {
    console.log("on submit");
    console.log(formData);
  };

  const formConfig: DynamicFormConfiguration = {
    heading: `${t("formHeader")}`,
    inputsConfig: [
      {
        fieldType: "text",
        name: "name",
        id: "name",
        placeholder: `${t("formInputs.nameInput.text")}`,
        label: `${t("formInputs.nameInput.text")}`,
        onChange,
      },
      {
        fieldType: "text",
        name: "email",
        id: "email",
        placeholder: `${t("formInputs.emailInput.text")}`,
        label: `${t("formInputs.emailInput.text")}`,
        onChange,
      },
      {
        fieldType: "number",
        name: "age",
        id: "age",
        placeholder: `${t("formInputs.ageInput.text")}`,
        label: `${t("formInputs.ageInput.text")}`,
        onChange,
      },
      {
        fieldType: "select",
        name: "gender",
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
      },
      {
        fieldType: "text",
        name: "phone",
        id: "phone",
        placeholder: `${t("formInputs.phoneInput.text")}`,
        label: `${t("formInputs.phoneInput.text")}`,
        onChange,
      },
      {
        fieldType: "text",
        name: "country",
        id: "country",
        placeholder: `${t("formInputs.countryInput.text")}`,
        label: `${t("formInputs.countryInput.text")}`,
        onChange,
      },
      {
        fieldType: "textarea",
        name: "description",
        id: "description",
        placeholder: `${t("formInputs.descriptionInput.text")}`,
        label: `${t("formInputs.descriptionInput.text")}`,
        onChange,
      },
      {
        fieldType: "radio",
        name: "gamer",
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
      },
      {
        fieldType: "checkbox",
        name: "preferredMeals",
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
      },
      {
        fieldType: "datePicker",
        name: "datePicker",
        id: "datePicker",
        placeholder: `${t("formInputs.datePickerInput.text")}`,
        label: `${t("formInputs.datePickerInput.text")}`,
        showTime: true,
        format: "DD/MM/YYYY,hh:mm",
        onChange,
      },
      {
        fieldType: "rangePicker",
        name: "rangePicker",
        id: "rangePicker",
        placeholder: [
          `${t("formInputs.rangePickerInput.startText")}`,
          `${t("formInputs.rangePickerInput.endText")}`,
        ],
        label: `${t("formInputs.rangePickerInput.text")}`,
        showTime: true,
        format: "DD/MM/YYYY,hh:mm",
        onChange,
      },
      {
        fieldType: "switch",
        name: "available",
        id: "available",
        label: `${t("formInputs.switchInput.text")}`,
        onChange,
      },
      {
        fieldType: "slider",
        name: "how_much",
        id: "slider",
        label: `${t("formInputs.sliderInput.text")}`,
        onChange,
      },
      {
        fieldType: "rate",
        name: "rate",
        id: "rate",
        label: `${t("formInputs.rateInput.text")}`,
        allowHalfRate: true,
        onChange,
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
