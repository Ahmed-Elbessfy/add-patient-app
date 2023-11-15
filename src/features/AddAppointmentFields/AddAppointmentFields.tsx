import { ChangeEvent, FC } from "react";
import {
  Input,
  Radio,
  Select,
  RadioChangeEvent,
  DatePicker,
  DatePickerProps,
  TimePicker,
  Switch,
} from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { FieldConfig } from "./AddAppointmentInputs.type";

const AddAppointmentFields: FC<FieldConfig> = (props) => {
  // console.log(props);
  const { fieldType, label, name, id, placeholder, testId, onChange } = props;
  return (
    <>
      {label && <label>{label}</label>}
      {/* Text Input  */}
      {fieldType === "text" && (
        <Input
          type={fieldType}
          name={name}
          placeholder={placeholder}
          data-testid={testId}
          id={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      )}

      {/* Number Input  */}
      {fieldType === "number" && (
        <Input
          type={fieldType}
          name={name}
          placeholder={placeholder}
          data-testid={testId}
          id={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      )}

      {/* Textarea Input  */}
      {fieldType === "textarea" && (
        <Input
          type={fieldType}
          name={name}
          placeholder={placeholder}
          data-testid={testId}
          id={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      )}

      {/* Select Input  */}
      {fieldType === "select" && (
        <Select
          placeholder={placeholder}
          data-testid={testId}
          id={id}
          onChange={(value: string) => onChange(value)}
          defaultValue={props.defaultValue}
        >
          {props.options &&
            props.options.map((option, ind) => {
              return (
                <Select.Option key={ind} value={option.value}>
                  {option.label}
                </Select.Option>
              );
            })}
        </Select>
      )}

      {/* Checkbox Input  */}
      {fieldType === "radio" && (
        <Radio.Group
          name={name}
          data-testid={testId}
          onChange={({ target: { value } }: RadioChangeEvent) =>
            onChange(value)
          }
        >
          {props.options &&
            props.options.map((option, ind) => (
              <Radio key={ind} value={option.value}>
                {option.label}
              </Radio>
            ))}
        </Radio.Group>
      )}

      {/* Date Picker Input  */}
      {fieldType === "datePicker" && (
        <DatePicker
          name={name}
          format={props.format}
          placeholder={placeholder}
          data-testid={testId}
          id={id}
          defaultValue={
            props.defaultValue
              ? props.defaultValue === "today"
                ? dayjs()
                : dayjs(props.defaultValue)
              : undefined
          }
          onChange={(value: DatePickerProps["value"], dateString: string) => {
            onChange(value);
          }}
        />
      )}

      {/* Time Picker Input  */}
      {fieldType === "timePicker" && (
        <TimePicker
          name={name}
          format={props.format}
          placeholder={placeholder}
          data-testid={testId}
          id={id}
          use12Hours={props.use12Hours}
          defaultValue={dayjs(props.defaultValue, props.format)}
          onChange={(time: Dayjs | null) => onChange(time)}
        />
      )}

      {/* Switch Input  */}
      {fieldType === "switch" && (
        <Switch
          data-testid={testId}
          id={id}
          checkedChildren={props.checkedChildren}
          unCheckedChildren={props.unCheckedChildren}
          defaultChecked={props.defaultChecked}
          onChange={(checked: boolean) => onChange(checked)}
        />
      )}
    </>
  );
};

export default AddAppointmentFields;
