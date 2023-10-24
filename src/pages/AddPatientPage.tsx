import { FC, useState, FormEvent } from "react";
// import AddPatientForm from "../features/AddPatientForm/AddPatientForm";
import DynamicForm from "../patterns/DynamicForm/DynamicForm";

const AddPatientPage: FC = () => {
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
  const formConfig = [
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
      selectOptions: [
        { value: "male", valText: "Male" },
        { value: "female", valText: "Female" },
      ],
      onChangeEvent: handleChange,
    },
  ];

  console.log(handleSubmit, formConfig);
  return (
    <>
      {/* <AddPatientForm /> */}
      <DynamicForm />
    </>
  );
};

export default AddPatientPage;
