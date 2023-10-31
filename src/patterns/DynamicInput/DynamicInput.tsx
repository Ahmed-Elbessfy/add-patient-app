import { FC, ChangeEvent } from "react";
import { DatePicker, RadioChangeEvent, Select } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { CheckboxValueType } from "antd/es/checkbox/Group";
// import { IStyledComponent } from "styled-components";
import { DynamicInputConfig } from "./DynamicInput.types";
import {
  StyledDynamicTextInput,
  StyledDynamicNumberInput,
  StyledDynamicTextArea,
  StyledDynamicSelectInput,
  StyledLabel,
  StyledDynamicCheckboxInput,
  StyledDynamicRadioInput,
  StyledDynamicSwitchInput,
  StyledDynamicSliderInput,
  StyledDynamicRateInput,
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
  const { fieldType, label, id, name, placeholder, testId, onChange } = props;
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
          data-testId={testId}
          id={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      )}

      {/* Number input  */}
      {fieldType === "number" && (
        <StyledDynamicNumberInput
          type={fieldType}
          name={name}
          placeholder={placeholder}
          data-testId={testId}
          id={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      )}

      {/* Textarea input  */}
      {fieldType === "textarea" && (
        <StyledDynamicTextArea
          name={name}
          placeholder={placeholder}
          data-testId={testId}
          id={id}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            onChange(e.target.value)
          }
        />
      )}
      {/* Select input  */}
      {fieldType === "select" && (
        <StyledDynamicSelectInput
          placeholder={placeholder}
          data-testId={testId}
          id={id}
          onChange={(value: string) => onChange(value)}
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
            data-testId={testId}
            onChange={({ target: { value } }: RadioChangeEvent) =>
              onChange(value)
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
            data-testId={testId}
            onChange={(checkedValues: CheckboxValueType[]) =>
              onChange(checkedValues)
            }
          ></StyledDynamicCheckboxInput>
        </fieldset>
      )}
      {/* Date Picker  */}
      {fieldType === "datePicker" && (
        <DatePicker
          format={props.format}
          showTime={props.showTime}
          placeholder={placeholder}
          data-testId={testId}
          onChange={(
            value: DatePickerProps["value"] | RangePickerProps["value"],
            dateString: [string, string] | string
          ) => onChange(dateString)}
        />
      )}
      {/* Range Picker  */}
      {fieldType === "rangePicker" && (
        <RangePicker
          format={props.format}
          showTime={props.showTime}
          placeholder={placeholder}
          data-testId={testId}
          onChange={(
            value: DatePickerProps["value"] | RangePickerProps["value"],
            dateString: [string, string] | string
          ) => onChange(dateString)}
        />
      )}
      {/* Switch Input  */}
      {fieldType === "switch" && (
        <StyledDynamicSwitchInput
          data-testId={testId}
          onChange={(checked: boolean) => onChange(checked)}
        />
      )}
      {/* Switch Input  */}
      {fieldType === "slider" && (
        <StyledDynamicSliderInput
          data-testId={testId}
          onChange={(value: number) => onChange(value)}
        />
      )}
      {/* Rate Input  */}
      {fieldType === "rate" && (
        <StyledDynamicRateInput
          data-testId={testId}
          allowHalf={props.allowHalfRate}
          onChange={(value: number) => onChange(value)}
        />
      )}
    </>
  );
};

export default DynamicInput;
