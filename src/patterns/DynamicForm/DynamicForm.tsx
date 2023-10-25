import { FC, FormEvent, useState } from "react";
import { Button } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
// import DTextInput from "../DForm/DTextInput/DTextInput";
// import DNumberInput from "../DForm/DNumberInput/DNumberInput";
// import DynamicSelectInput from "../DForm/DSelectInput/DSelectInput";
// import DTextAreaInput from "../DTextAreaInput/DTextAreaInput";
// import DRadioInput from "../DRadioInput/DRadioInput";
import { DynamicFormConfiguration } from "./DynamicForm.types";
import DynamicInput from "../DynamicInput/DynamicInput";

const DynamicForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 1,
    country: "",
    phone: "",
  });

  const onChange = (
    name: string,
    value: string | number | CheckboxValueType[] | boolean
  ) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  const dynamicFormConfig: DynamicFormConfiguration = {
    inputsConfig: [
      {
        fieldType: "text",
        name: "name",
        id: "name",
        placeholder: "Name",
        label: "Name",
        onChange,
      },
      {
        fieldType: "text",
        name: "email",
        id: "email",
        placeholder: "Email",
        label: "Email",
        onChange,
      },
      {
        fieldType: "number",
        name: "age",
        id: "age",
        placeholder: "Age",
        label: "Age",
        onChange,
      },
      {
        fieldType: "text",
        name: "phone",
        id: "phone",
        placeholder: "Phone",
        label: "Phone",
        onChange,
      },
      {
        fieldType: "text",
        name: "country",
        id: "country",
        placeholder: "Country",
        label: "Country",
        onChange,
      },
      {
        fieldType: "select",
        name: "gender",
        id: "gender",
        placeholder: "Gender",
        label: "Gender",
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
        onChange,
      },
      {
        fieldType: "textarea",
        name: "description",
        id: "description",
        placeholder: "Description about patient",
        label: "Description",
        onChange,
      },
      {
        fieldType: "radio",
        name: "gamer",
        id: "gamer",
        placeholder: "A Gamer or not?",
        label: "Gamer Status",
        options: [
          { value: "gamer", label: "Gamer" },
          { value: "not_gamer", label: "Not a Gamer" },
        ],
        onChange,
      },
      {
        fieldType: "checkbox",
        name: "preferredMeals",
        id: "preferredMeals",
        label: "What would you like to eat?",
        options: [
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" },
        ],
        onChange,
      },
      {
        fieldType: "datePicker",
        name: "datePicker",
        id: "datePicker",
        label: "Pick date",
        showTime: true,
        format: "DD/MM/YYYY,hh:mm",
        onChange,
      },
      {
        fieldType: "rangePicker",
        name: "rangePicker",
        id: "rangePicker",
        label: "Set Session period:",
        showTime: true,
        format: "DD/MM/YYYY,hh:mm",
        onChange,
      },
      {
        fieldType: "switch",
        name: "available",
        id: "available",
        label: "Available",
        onChange,
      },
      {
        fieldType: "slider",
        name: "how_much",
        id: "slider",
        label: "How much",
        onChange,
      },
    ],
    onSubmit,
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Add new patient dynamically</h1>
      {dynamicFormConfig.inputsConfig.map((inputConfig) => {
        return (
          // Default Input is the Text input
          <DynamicInput key={inputConfig.id} {...inputConfig} />
        );
      })}
      <Button type="primary" htmlType="submit">
        Add Patient
      </Button>
    </form>
  );
};

export default DynamicForm;
