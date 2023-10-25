import { FC, useState, FormEvent } from "react";
// import AddPatientForm from "../features/AddPatientForm/AddPatientForm";
import { CheckboxValueType } from "antd/es/checkbox/Group";

import DynamicForm from "../patterns/DynamicForm/DynamicForm";
import { DynamicFormConfiguration } from "../patterns/DynamicForm/DynamicForm.types";

const AddPatientPage: FC = () => {
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
  const formConfig: DynamicFormConfiguration = {
    heading: "Add new patient dynamically",
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
      {
        fieldType: "rate",
        name: "rate",
        id: "rate",
        label: "Rate service",
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
