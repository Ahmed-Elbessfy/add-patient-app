import { ChangeEvent, FC } from "react";
import { DInputConfigurationInterface } from "../DFormComp/DForm.constants";
import { StyledErrorMsg, StyledLabel } from "../DFormComp/DForm.styled";
import { StyledDTextArea } from "./DTextAreaInput.styled";

const DynamicFormInput: FC<DInputConfigurationInterface> = ({
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
      <StyledDTextArea
        name={name}
        placeholder={placeholder}
        id={fieldId}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onChangeEvent(e.target.name, e.target.value)
        }
      />
      {/* Error message  */}
      <StyledErrorMsg></StyledErrorMsg>
    </>
  );
};

export default DynamicFormInput;
