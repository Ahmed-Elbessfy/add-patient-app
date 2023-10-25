import { FC, ChangeEvent } from "react";
import { DatePicker, RadioChangeEvent, Select } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { CheckboxValueType } from "antd/es/checkbox/Group";
// import { IStyledComponent } from "styled-components";

import { DynamicInputConfig } from "./DynamicInput.types";
import {
  StyledErrorMsg,
  StyledDynamicTextInput,
  StyledDynamicNumberInput,
  StyledDynamicTextArea,
  StyledDynamicSelectInput,
  StyledLabel,
  StyledDynamicCheckboxInput,
  StyledDynamicRadioInput,
} from "./DynamicInput.styled";

const { RangePicker } = DatePicker;

// type InputComponents = {
//   [key: string]: IStyledComponent<"web">;
// };

// const inputComponents: InputComponents = {
//   text: StyledDynamicTextInput,
//   number: StyledDynamicNumberInput,
//   textarea: StyledDynamicTextArea,
//   select: StyledDynamicSelectInput,
//   radio: StyledDynamicRadioInput,
//   checkbox: StyledDynamicCheckboxInput,
// };

const DynamicInput: FC<DynamicInputConfig> = (props) => {
  const { fieldType, label, id, name, placeholder, onChange } = props;
  // const renderInput = () => {
  //   console.log("rendercomp ");
  //   console.log(props.fieldType);
  //   if (!props.fieldType || !inputComponents[props.fieldType]) return null;
  //   const Component = inputComponents[props.fieldType];
  //   console.log(<Component {...props} />);
  //   return <Component {...props} />;
  // };
  return (
    <>
      {label && fieldType !== "checkbox" && fieldType !== "radio" && (
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      )}
      {/* {renderInput()} */}
      {/* Text & Number input  */}
      {fieldType === "text" && (
        <StyledDynamicTextInput
          type={fieldType}
          name={name}
          placeholder={placeholder}
          id={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.name, e.target.value)
          }
        />
      )}
      {/* Number input  */}
      {fieldType === "number" && (
        <StyledDynamicNumberInput
          type={fieldType}
          name={name}
          placeholder={placeholder}
          id={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.name, e.target.value)
          }
        />
      )}
      {/* Textarea input  */}
      {fieldType === "textarea" && (
        <StyledDynamicTextArea
          name={name}
          placeholder={placeholder}
          id={id}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
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
      {fieldType === "radio" && (
        <fieldset>
          <legend>{label}</legend>
          <StyledDynamicRadioInput
            name={name}
            options={props.options}
            onChange={({ target: { value } }: RadioChangeEvent) =>
              onChange(name, value)
            }
          ></StyledDynamicRadioInput>
        </fieldset>
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
      {/* Date Picker  */}
      {fieldType === "datePicker" && (
        <DatePicker
          format={props.format}
          showTime={props.showTime}
          onChange={(
            value: DatePickerProps["value"] | RangePickerProps["value"],
            dateString: [string, string] | string
          ) => onChange(name, dateString)}
        />
      )}
      {fieldType === "rangePicker" && (
        <RangePicker
          format={props.format}
          showTime={props.showTime}
          onChange={(
            value: DatePickerProps["value"] | RangePickerProps["value"],
            dateString: [string, string] | string
          ) => onChange(name, dateString)}
        />
      )}
      {/* Error message  */}
      <StyledErrorMsg></StyledErrorMsg>
    </>
  );
};

export default DynamicInput;
