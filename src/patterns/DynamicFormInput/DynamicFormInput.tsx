import { ChangeEvent, FC } from "react";
import { DynamicFormInputConfigurationInterface } from "./DynamicFormInput.constants";
import {
  StyledDynamicFormInput,
  StyledErrorMsg,
  StyledLabel,
} from "./DynamicFormInput.styled";

const DynamicFormInput: FC<DynamicFormInputConfigurationInterface> = ({
  fieldType,
  name,
  placeholder,
  label,
  fieldId,
  onChangeEvent,
}) => {
  return (
    <>
      {label && <StyledLabel htmlFor={fieldId}>{label}</StyledLabel>}
      <StyledDynamicFormInput
        type={fieldType}
        name={name}
        placeholder={placeholder}
        id={fieldId}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChangeEvent(e.target.name, e.target.value)
        }
      />
      <StyledErrorMsg></StyledErrorMsg>
    </>
  );
};

export default DynamicFormInput;
