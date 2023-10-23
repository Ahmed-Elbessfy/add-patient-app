import { ChangeEvent, FC } from "react";
import { DInputConfigurationInterface } from "../DFormComp/DForm.constants";
import { StyledErrorMsg, StyledLabel } from "../DFormComp/DForm.styled";
import { StyledDynamicFormInput } from "./DTextInput.styled";

const DynamicFormInput: FC<DInputConfigurationInterface> = ({
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
      {/* Text & Number input  */}
      {(fieldType === "text" || fieldType === "number") && (
        <StyledDynamicFormInput
          type={fieldType}
          name={name}
          placeholder={placeholder}
          id={fieldId}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeEvent(e.target.name, e.target.value)
          }
        />
      )}
      {/* Error message  */}
      <StyledErrorMsg></StyledErrorMsg>
    </>
  );
};

export default DynamicFormInput;
