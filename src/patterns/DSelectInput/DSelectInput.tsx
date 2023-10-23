import { FC } from "react";
import { Select } from "antd";
import { DInputConfigurationInterface } from "../DFormComp/DForm.constants";
import { StyledErrorMsg, StyledLabel } from "../DFormComp/DForm.styled";
import { StyledDynamicSelectInput } from "./DSelectInput.styled";

const DynamicSelectInput: FC<DInputConfigurationInterface> = ({
  name,
  placeholder,
  label,
  fieldId,
  multiOptions,
  onChangeEvent,
}) => {
  return (
    <>
      {label && <StyledLabel htmlFor={fieldId}>{label}</StyledLabel>}
      {/* Select input  */}
      <StyledDynamicSelectInput
        placeholder={placeholder}
        id={fieldId}
        onChange={(value: string) => onChangeEvent(name, value)}
      >
        {multiOptions &&
          multiOptions.map((option, ind) => {
            return (
              <Select.Option key={ind} value={option.value}>
                {option.valText}
              </Select.Option>
            );
          })}
      </StyledDynamicSelectInput>
      {/* Error message  */}
      <StyledErrorMsg></StyledErrorMsg>
    </>
  );
};

export default DynamicSelectInput;
