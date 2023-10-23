import { FC, FormEvent, useState } from "react";
import { Button } from "antd";
import DTextInput from "../DTextInput/DTextInput";
import DNumberInput from "../DNumberInput/DNumberInput";
import DynamicSelectInput from "../DSelectInput/DSelectInput";
import { DFormConfigurationInterface } from "./DForm.constants";

const DynamicForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 1,
    country: "",
    phone: "",
  });

  const handleChange = (inputName: string, inputValue: string | number) => {
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  const dynamicFormConfig: DFormConfigurationInterface = {
    inputsConfig: [
      {
        fieldType: "text",
        name: "name",
        fieldId: "name",
        placeholder: "Name",
        label: "Name",
        onChangeEvent: handleChange,
      },
      {
        fieldType: "text",
        name: "email",
        fieldId: "email",
        placeholder: "Email",
        label: "Email",
        onChangeEvent: handleChange,
      },
      {
        fieldType: "number",
        name: "age",
        fieldId: "age",
        placeholder: "Age",
        label: "Age",
        onChangeEvent: handleChange,
      },
      {
        fieldType: "text",
        name: "phone",
        fieldId: "phone",
        placeholder: "Phone",
        label: "Phone",
        onChangeEvent: handleChange,
      },
      {
        fieldType: "text",
        name: "country",
        fieldId: "country",
        placeholder: "Country",
        label: "Country",
        onChangeEvent: handleChange,
      },
      {
        fieldType: "select",
        name: "gender",
        fieldId: "gender",
        placeholder: "Gender",
        label: "Gender",
        multiOptions: [
          { value: "male", valText: "Male" },
          { value: "female", valText: "Female" },
        ],
        onChangeEvent: handleChange,
      },
    ],
    onSubmit: handleSubmit,
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new patient dynamically</h1>
      {dynamicFormConfig.inputsConfig.map((inputConfig) => {
        if (inputConfig.fieldType === "select") {
          return (
            <DynamicSelectInput
              key={inputConfig.fieldId}
              name={inputConfig.name}
              placeholder={inputConfig.placeholder}
              fieldId={inputConfig.fieldId}
              label={inputConfig.label}
              multiOptions={inputConfig.multiOptions}
              onChangeEvent={inputConfig.onChangeEvent}
            />
          );
        }
        if (inputConfig.fieldType === "number") {
          return (
            <DNumberInput
              key={inputConfig.fieldId}
              fieldType={inputConfig.fieldType}
              name={inputConfig.name}
              placeholder={inputConfig.placeholder}
              fieldId={inputConfig.fieldId}
              label={inputConfig.label}
              onChangeEvent={inputConfig.onChangeEvent}
            />
          );
        }
        return (
          <DTextInput
            key={inputConfig.fieldId}
            fieldType={inputConfig.fieldType}
            name={inputConfig.name}
            placeholder={inputConfig.placeholder}
            fieldId={inputConfig.fieldId}
            label={inputConfig.label}
            onChangeEvent={inputConfig.onChangeEvent}
          />
        );
      })}
      <Button type="primary" htmlType="submit">
        Add Patient
      </Button>
    </form>
  );
};

export default DynamicForm;
