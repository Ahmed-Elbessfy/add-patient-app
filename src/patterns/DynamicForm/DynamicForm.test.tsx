import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";
import DynamicForm from "./DynamicForm";
import { ADD_PATIENT } from "./DynamicForm.gql";

test("Dynamic form renders perfectly", () => {
  const newPatientData = {
    id: 7,
    key: 7,
    name: "Ahmed Taha",
    email: "ahmed@gmail.com",
    age: 34,
    gender: "male",
    phone: "01113334445",
    country: "Russia",
    description: "Previous Minister of Interior",
    gamer: "gamer",
    preferredMeals: ["apple"],
    datePicker: "01/01/1999,11:40",
    rangePicker: ["01/01/1999,11:40", "01/01/1999,11:40"],
    available: true,
    how_much: 1000000000,
    rate: 4,
  };

  const mocks = [
    {
      request: {
        query: ADD_PATIENT,
        variables: { data: newPatientData },
      },
      result: { data: newPatientData },
    },
  ];

  const mockSubmit = jest.fn();
  const formConfig = {
    heading: "Add New Patient",
    inputsConfig: [
      {
        fieldType: "text",
        name: "name",
        schemaName: "name",
        testId: "name",
        id: "name",
        placeholder: `Name`,
        label: `Name`,
        onChange: () => {},
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "text",
        name: "email",
        schemaName: "email",
        testId: "email",
        id: "email",
        placeholder: `Email`,
        label: `Email`,
        onChange: () => {},
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
        placeholder: `Age`,
        label: `Age`,
        onChange: () => {},
        // validationRules: [{ required: true, min: 1, max: 200 }],
      },
      {
        fieldType: "select",
        name: "gender",
        schemaName: "gender",
        testId: "gender",
        id: "gender",
        placeholder: `Select a Gender`,
        label: `Select a Gender`,
        options: [
          {
            value: "male",
            label: `Male`,
          },
          {
            value: "female",
            label: `Female`,
          },
        ],
        onChange: () => {},
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "text",
        name: "phone",
        schemaName: "phone",
        testId: "phone",
        id: "phone",
        placeholder: `Phone`,
        label: `Phone`,
        onChange: () => {},
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
        placeholder: `Country`,
        label: `Country`,
        onChange: () => {},
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "textarea",
        name: "description",
        schemaName: "description",
        testId: "description",
        id: "description",
        placeholder: `Description about the patient`,
        label: `Description`,
        onChange: () => {},
        // validationRules: [{ required: false }],
      },
      {
        fieldType: "radio",
        name: "gamer",
        schemaName: "gamer",
        testId: "gamer",
        id: "gamer",
        placeholder: `Gamer Status`,
        label: `Gamer Status`,
        options: [
          {
            value: "gamer",
            label: `Gamer`,
          },
          {
            value: "not_gamer",
            label: `Not Gamer")}`,
          },
        ],
        onChange: () => {},
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "checkbox",
        name: "preferredMeals",
        schemaName: "preferredMeals",
        testId: "preferredMeals",
        id: "preferredMeals",
        label: `What would you like to eat?`,
        options: [
          {
            label: `Apple`,
            value: "apple",
          },
          {
            label: `Pear`,
            value: "pear",
          },
          {
            label: `Orange`,
            value: "orange",
          },
        ],
        onChange: () => {},
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
        placeholder: `Pick a date`,
        label: `Pick a date`,
        showTime: true,
        format: "DD/MM/YYYY,hh:mm",
        onChange: () => {},
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "rangePicker",
        name: "rangePicker",
        schemaName: "rangePicker",
        testId: "rangePicker",
        id: "rangePicker",
        placeholder: [`Pick a start date`, `Pick an end date`],
        label: "Set Session period",
        showTime: true,
        format: "DD/MM/YYYY,hh:mm",
        onChange: () => {},
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
        label: `Availability`,
        onChange: () => {},
        // validationRules: [{ required: true }],
      },
      {
        fieldType: "slider",
        name: "how_much",
        schemaName: "how_much",
        testId: "how_much",
        id: "slider",
        label: "how much?",
        onChange: () => {},
        // validationRules: [{ required: true, min: 1 }],
      },
      {
        fieldType: "rate",
        name: "rate",
        schemaName: "rate",
        testId: "rate",
        id: "rate",
        label: `Rate our service`,
        allowHalfRate: true,
        onChange: () => {},
        // validationRules: [{ required: true, min: 0.5 }],
      },
    ],
    onSubmit: mockSubmit,
  };

  render(
    <MockedProvider mocks={mocks}>
      <DynamicForm {...formConfig} />
    </MockedProvider>
  );
});
