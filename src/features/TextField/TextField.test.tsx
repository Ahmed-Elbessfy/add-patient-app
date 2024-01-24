import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextField from "./TextField";
import { FieldTextComponentProps } from "./TextField.type";

const testProps: FieldTextComponentProps = {
  fieldType: "text",
  label: "apInputs.patient_name.label",
  placeholder: "apInputs.patient_name.placeholder",
  isDisabled: false,
  value: "patient name",
  id: "id",
  testId: "testId",
  onChange: () => {},
};
describe("TextField component", () => {
  test("renders without errors", () => {
    render(<TextField {...testProps} />);
    expect(screen.getByTestId("testId")).toBeInTheDocument();
  });

  test("handles onChange event", () => {
    const handleChange = jest.fn();
    render(<TextField {...testProps} onChange={handleChange} />);

    const inputElement = screen.getByTestId("testId");
    fireEvent.change(inputElement, { target: { value: "John" } });

    expect(handleChange).toHaveBeenCalledWith("John");
  });
});
