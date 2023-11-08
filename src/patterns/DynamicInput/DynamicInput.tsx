import { FC, ChangeEvent } from "react";
import { Checkbox, DatePicker, Radio, RadioChangeEvent, Select } from "antd";
import { useTranslation } from "react-i18next";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { CheckboxValueType } from "antd/es/checkbox/Group";
// import { IStyledComponent } from "styled-components";
import { DynamicFieldConfig } from "./DynamicInput.types";
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

const DynamicInput: FC<DynamicFieldConfig> = (props) => {
  const { fieldType, label, id, name, placeholder, testId, onChange } = props;
  const { t } = useTranslation("lang");

  return (
    <>
      {label && fieldType !== "checkbox" && fieldType !== "radio" && (
        <StyledLabel htmlFor={id}>{t(label)}</StyledLabel>
      )}
      {/* {renderInput()} */}
      {/* Text input  */}
      {fieldType === "text" && (
        <StyledDynamicTextInput
          type={fieldType}
          name={name}
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
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
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
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
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
          id={id}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            onChange(e.target.value)
          }
        />
      )}
      {/* Select input  */}
      {fieldType === "select" && (
        <StyledDynamicSelectInput
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
          id={id}
          onChange={(value: string) => onChange(value)}
        >
          {props.options &&
            props.options.map((option, ind) => {
              return (
                <Select.Option key={ind} value={option.value}>
                  {t(option.label)}
                </Select.Option>
              );
            })}
        </StyledDynamicSelectInput>
      )}
      {/* Checkbox input  */}
      {fieldType === "radio" && (
        <fieldset>
          <legend>{label && t(label)}</legend>
          <StyledDynamicRadioInput
            name={name}
            data-testid={testId}
            onChange={({ target: { value } }: RadioChangeEvent) =>
              onChange(value)
            }
          >
            {props.options.map((option, ind) => (
              <Radio key={ind} value={option.value}>
                {t(option.label)}
              </Radio>
            ))}
          </StyledDynamicRadioInput>
        </fieldset>
      )}
      {/* Checkbox input  */}
      {fieldType === "checkbox" && (
        <fieldset>
          <legend>{label && t(label)}</legend>
          <StyledDynamicCheckboxInput
            data-testid={testId}
            onChange={(checkedValues: CheckboxValueType[]) =>
              onChange(checkedValues)
            }
          >
            {props.options.map((option, ind) => (
              <Checkbox key={ind} value={option.value}>
                {t(option.label)}
              </Checkbox>
            ))}
          </StyledDynamicCheckboxInput>
        </fieldset>
      )}
      {/* Date Picker  */}
      {fieldType === "datePicker" && (
        <DatePicker
          format={props.format}
          showTime={props.showTime}
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
          onChange={(
            value: DatePickerProps["value"] | RangePickerProps["value"],
            dateString: [string, string] | string
          ) => onChange(dateString)}
        />
      )}

      {/* Switch Input  */}
      {fieldType === "switch" && (
        <StyledDynamicSwitchInput
          data-testid={testId}
          onChange={(checked: boolean) => onChange(checked)}
        />
      )}
      {/* Switch Input  */}
      {fieldType === "slider" && (
        <StyledDynamicSliderInput
          data-testid={testId}
          onChange={(value: number) => onChange(value)}
        />
      )}
      {/* Rate Input  */}
      {fieldType === "rate" && (
        <StyledDynamicRateInput
          data-testid={testId}
          allowHalf={props.allowHalfRate}
          onChange={(value: number) => onChange(value)}
        />
      )}
    </>
  );
};

export default DynamicInput;
