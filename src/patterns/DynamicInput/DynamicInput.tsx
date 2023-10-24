import { ChangeEvent, FC } from "react";
import { Select } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { DynamicInputConfig } from "./DynamicInput.types";
import {
  StyledErrorMsg,
  StyledDynamicFormInput,
  StyledDynamicSelectInput,
  StyledLabel,
  StyledDynamicCheckboxInput,
} from "./DynamicInput.styled";

const DynamicInput: FC<DynamicInputConfig> = (props) => {
  const { fieldType, name, placeholder, label, id, onChange } = props;
  const hasOptions = ["select", "radio", "checkbox"].includes(fieldType);
  return (
    <>
      {label && fieldType !== "checkbox" && (
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      )}
      {/* Text & Number input  */}
      {!hasOptions && (
        <StyledDynamicFormInput
          type={fieldType}
          name={name}
          placeholder={placeholder}
          id={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.name, e.target.value)
          }
        />
      )}
      {/* Select input  */}
      {fieldType === "select" && (
        <StyledDynamicSelectInput
          placeholder={placeholder}
          id={id}
          onChange={(value: string) => onChange(name, value)}
        >
          {props.options &&
            props.options.map((option, ind) => {
              return (
                <Select.Option key={ind} value={option.value}>
                  {option.label}
                </Select.Option>
              );
            })}
        </StyledDynamicSelectInput>
      )}
      {/* Checkbox input  */}
      {fieldType === "checkbox" && (
        <fieldset>
          <legend>{label}</legend>
          <StyledDynamicCheckboxInput
            options={props.options}
            onChange={(checkedValues: CheckboxValueType[]) =>
              onChange(name, checkedValues)
            }
          ></StyledDynamicCheckboxInput>
        </fieldset>
      )}
      {/* Error message  */}
      <StyledErrorMsg></StyledErrorMsg>
    </>
  );
};

export default DynamicInput;
