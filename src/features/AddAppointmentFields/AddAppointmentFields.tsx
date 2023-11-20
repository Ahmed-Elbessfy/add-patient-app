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
  const { fieldType, label, name, id, placeholder, testId, onChange, status } =
    props;

  // set disabled date for Date Picker Input
  const disabledDate = (current: Dayjs, status: string, limit: string) => {
    if (limit !== "today") {
      return status === "before"
        ? current.isBefore(dayjs(limit), "day")
        : current.isAfter(dayjs(limit), "day");
    } else {
      return status === "before"
        ? current.isBefore(dayjs(), "day")
        : current.isAfter(dayjs(), "day");
    }
  };

  // Time Picker
  // this format matches New Appointment requirements but MAY NOT BE APPLICABLE in others cases. I will work on when I get full requirements
  // currently, it produces next hour as start time & next Hour + 30 minutes as End time
  const formatTime = (time: string = "now") => {
    const currentHour = new Date().getHours();
    if (time === "now") {
      return dayjs()
        .hour(currentHour + 1)
        .minute(0);
    }

    if (time === "next") {
      return dayjs()
        .hour(currentHour + 1)
        .minute(30);
    }
  };

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
          status={status}
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
          status={status}
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
          status={status}
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
          status={status}
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
          status={status}
          disabledDate={(current) =>
            props.dateLimit
              ? disabledDate(
                  current,
                  props.dateLimit.status,
                  props.dateLimit.date
                )
              : false
          }
          defaultValue={
            props.defaultValue
              ? props.defaultValue === "today"
                ? dayjs()
                : dayjs(props.defaultValue)
              : undefined
          }
          onChange={(value: DatePickerProps["value"]) => {
            // accepted format "YYYY/MM/DD"
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
          status={status}
          use12Hours={props.use12Hours}
          defaultValue={formatTime(props.defaultValue)}
          onChange={(time: Dayjs | null) => {
            onChange(dayjs(time).format(props.format));
          }}
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
