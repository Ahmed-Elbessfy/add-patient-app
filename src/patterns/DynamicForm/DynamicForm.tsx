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

  const handleChange = (
    name: string,
    value: string | number | CheckboxValueType[]
  ) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        onChange: handleChange,
      },
      {
        fieldType: "text",
        name: "email",
        id: "email",
        placeholder: "Email",
        label: "Email",
        onChange: handleChange,
      },
      {
        fieldType: "number",
        name: "age",
        id: "age",
        placeholder: "Age",
        label: "Age",
        onChange: handleChange,
      },
      {
        fieldType: "text",
        name: "phone",
        id: "phone",
        placeholder: "Phone",
        label: "Phone",
        onChange: handleChange,
      },
      {
        fieldType: "text",
        name: "country",
        id: "country",
        placeholder: "Country",
        label: "Country",
        onChange: handleChange,
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
        onChange: handleChange,
      },
      {
        fieldType: "textarea",
        name: "description",
        id: "description",
        placeholder: "Description about patient",
        label: "Description",
        onChange: handleChange,
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
        onChange: handleChange,
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
        onChange: handleChange,
      },
    ],
    onSubmit: handleSubmit,
  };

  return (
    <form onSubmit={handleSubmit}>
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
