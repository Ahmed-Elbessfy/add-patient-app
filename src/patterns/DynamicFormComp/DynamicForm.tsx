import { FC, FormEvent, useState } from "react";
import { Button } from "antd";
import { DynamicFormConfigurationInterface } from "./DynamicForm.constants";
import DynamicFormInput from "../DynamicFormInput/DynamicFormInput";

const DynamicForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 1,
  });

  const handleChange = (inputName: string, inputValue: string | number) => {
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  const dynamicFormConfig: DynamicFormConfigurationInterface = {
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
    ],
    onSubmit: handleSubmit,
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new patient dynamically</h1>
      {dynamicFormConfig.inputsConfig.map((inputConfig) => {
        return (
          <DynamicFormInput
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
