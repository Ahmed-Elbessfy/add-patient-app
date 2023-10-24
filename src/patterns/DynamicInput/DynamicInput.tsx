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
  const { fieldType, name, placeholder, label, id, onChange } = props;

  return (
    <>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      {/* Text & Number input  */}
      {!["select", "radio", "checkbox"].includes(fieldType) && (
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
      {props.options && fieldType === "select" && (
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
      {/* Error message  */}
      <StyledErrorMsg></StyledErrorMsg>
    </>
  );
};

export default DynamicInput;
