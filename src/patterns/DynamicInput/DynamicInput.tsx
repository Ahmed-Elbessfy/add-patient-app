import { FC, ChangeEvent } from "react";
import { DatePicker, RadioChangeEvent, Select } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { CheckboxValueType } from "antd/es/checkbox/Group";
// import { IStyledComponent } from "styled-components";
import { schema } from "../DynamicForm/DynamicForm.constants";
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
  StyledDynamicSwitchInput,
  StyledDynamicSliderInput,
  StyledDynamicRateInput,
} from "./DynamicInput.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("errors: ", errors);
  return (
    <>
      {label && fieldType !== "checkbox" && fieldType !== "radio" && (
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      )}
      {/* {renderInput()} */}
      {/* Text & Number input  */}
      {fieldType === "text" && (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <StyledDynamicTextInput
              {...field}
              type={fieldType}
              placeholder={placeholder}
              id={id}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.name, e.target.value)
              }
            />
          )}
        />
      )}
      {/* Number input  */}
      {fieldType === "number" && (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
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
          placeholder={placeholder}
          onChange={(
            value: DatePickerProps["value"] | RangePickerProps["value"],
            dateString: [string, string] | string
          ) => onChange(name, dateString)}
        />
      )}
      {/* Range Picker  */}
      {fieldType === "rangePicker" && (
        <RangePicker
          format={props.format}
          showTime={props.showTime}
          placeholder={placeholder}
          onChange={(
            value: DatePickerProps["value"] | RangePickerProps["value"],
            dateString: [string, string] | string
          ) => onChange(name, dateString)}
        />
      )}
      {/* Switch Input  */}
      {fieldType === "switch" && (
        <StyledDynamicSwitchInput
          onChange={(checked: boolean) => onChange(name, checked)}
        />
      )}
      {/* Switch Input  */}
      {fieldType === "slider" && (
        <StyledDynamicSliderInput
          onChange={(value: number) => onChange(name, value)}
        />
      )}
      {/* Rate Input  */}
      {fieldType === "rate" && (
        <StyledDynamicRateInput
          allowHalf={props.allowHalfRate}
          onChange={(value: number) => onChange(name, value)}
        />
      )}
      {/* Error message  */}
      <StyledErrorMsg>
        {errors["name"] && errors["name"].message}
      </StyledErrorMsg>
    </>
  );
};

export default DynamicInput;
