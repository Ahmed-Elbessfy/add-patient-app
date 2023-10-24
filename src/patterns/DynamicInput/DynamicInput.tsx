import { ChangeEvent, FC } from "react";
import { Select } from "antd";
import { DynamicInputConfig } from "./DynamicInput.types";
import {
  StyledErrorMsg,
  StyledDynamicFormInput,
  StyledDynamicSelectInput,
  StyledLabel,
} from "./DynamicInput.styled";

const DynamicInput: FC<DynamicInputConfig> = (props) => {
  const {
  fieldType,
  name,
  placeholder,
  label,
  id,
  onChange,
} = props
  const options = ["select", "radio", "checkbox"].includes(fieldType) ? props.options : [];

  return (
    <>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      {/* Text & Number input  */}
      {!options && (
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
      {options && fieldType === "select" && (
        <StyledDynamicSelectInput
          placeholder={placeholder}
          id={id}
          onChange={(value: string) => onChange(name, value)}
        >
          {options &&
            options.map((option, ind) => {
              return (
                <Select.Option key={ind} value={option.value}>
                  {option.label}
                </Select.Option>
              );
            })}
      {/* {!options && (
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
      {options && fieldType === "select" && (
        <StyledDynamicSelectInput
          placeholder={placeholder}
          id={id}
          onChange={(value: string) => onChange(name, value)}
        >
          {options &&
            options.map((option, ind) => {
              return (
                <Select.Option key={ind} value={option.value}>
                  {option.label}
                </Select.Option>
              );
            })} */}
        </StyledDynamicSelectInput>
      )}
      {/* Error message  */}
      <StyledErrorMsg></StyledErrorMsg>
    </>
  );
};

export default DynamicInput;
