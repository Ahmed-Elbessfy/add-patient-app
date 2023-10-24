import { FC, ChangeEvent } from "react";
import { StyledDynamicTextInput } from "./DynamicTextInput.styled";
import { DynamicInputConfig } from "./DynamicTextInput.types";

const DynamicTextInput: FC<DynamicInputConfig> = (props) => {
  const { onChange } = props;
  // const hasOptions = ["select", "radio", "checkbox"].includes(fieldType);
  return (
    <>
      <StyledDynamicTextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.name, e.target.value)
        }
      />
      {/* Error message  */}
      {/* <StyledErrorMsg></StyledErrorMsg> */}
    </>
  );
};

export default DynamicTextInput;
