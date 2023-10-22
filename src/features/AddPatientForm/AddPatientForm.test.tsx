import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";
import { ADD_PATIENT } from "./AddPatientForm.gql";
import AddPatientForm from "./AddPatientForm";

test("From & its content rendered properly", () => {
  const newPatientData = {
    id: 7,
    key: 7,
    name: "Ahmed Taha",
    email: "ahmed@gmail.com",
    age: 34,
    gender: "male",
    phone: "01113334445",
    country: "Russia",
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
  render(
    <MockedProvider mocks={mocks}>
      <AddPatientForm />
    </MockedProvider>
  );

  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByTitle("name")).toBeInTheDocument();
  expect(screen.getByTitle("email")).toBeInTheDocument();
  expect(screen.getByTitle("age")).toBeInTheDocument();
  expect(screen.getByTitle("gender")).toBeInTheDocument();
  expect(screen.getByTitle("phone")).toBeInTheDocument();
  expect(screen.getByTitle("country")).toBeInTheDocument();
  expect(screen.getByTestId("submitBtn")).toBeInTheDocument();
});
