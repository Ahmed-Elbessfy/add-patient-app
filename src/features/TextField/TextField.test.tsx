import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextField from "./TextField";
import { FieldTextComponentProps } from "./TextField.type";

const testProps: FieldTextComponentProps = {
  fieldType: "text",
  label: "Text Label",
  placeholder: "Text Placeholder",
  isDisabled: false,
  value: "patient name",
  id: "id",
  testId: "testId",
  onChange: () => {},
};

describe("TextField component", () => {
  test("renders without errors", () => {
    render(<TextField {...testProps} />);
    expect(screen.getByText("Text Label")).toBeInTheDocument();
    expect(screen.getByTestId("testId")).toBeInTheDocument();
    expect(screen.getByTestId("testId")).toHaveAttribute("placeholder");
  });

  test("handles onChange event", () => {
    const handleChange = jest.fn();
    render(<TextField {...testProps} onChange={handleChange} />);

    const inputElement = screen.getByTestId("testId");
    fireEvent.change(inputElement, { target: { value: "John" } });

    expect(handleChange).toHaveBeenCalledWith("John");
  });
});
