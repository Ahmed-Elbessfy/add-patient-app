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
  Checkbox,
} from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { formatDateTime } from "../../utils/addAppointUtils";
import { FieldConfig } from "./AddAppointmentInputs.type";

const { TextArea } = Input;

const AddAppointmentFields: FC<FieldConfig> = (props) => {
  const {
    fieldType,
    label,
    name,
    id,
    placeholder,
    testId,
    onChange,
    status,
    clearErrors,
    validation,
    isDisabled,
  } = props;

  // set disabled date for Date Picker Input
  const disabledDate = (current: Dayjs, status: string, limit: string) => {
    const lim = formatDateTime(limit);
    if (status === "before") {
      return current.isBefore(dayjs(lim), "day");
    } else {
      return current.isAfter(dayjs(lim), "day");
    }
  };

  const { t } = useTranslation("translation");

  return (
    <>
      {/* checkbox has customization for label to be used as text  */}
      {label && fieldType !== "checkbox" && <label>{t(label)}</label>}
      {/* Text Input  */}
      {fieldType === "text" && (
        <Input
          type={fieldType}
          name={name}
          placeholder={placeholder && t(placeholder)}
          data-id={id}
          id={id}
          status={status}
          disabled={isDisabled}
          defaultValue={props.defaultValue}
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
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
          id={id}
          status={status}
          disabled={isDisabled}
          defaultValue={props.defaultValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      )}

      {/* Textarea Input  */}
      {fieldType === "textarea" && (
        <TextArea
          name={name}
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
          id={id}
          status={status}
          disabled={isDisabled}
          maxLength={props.maxLength}
          showCount={props.showCount}
          style={{ width: "100%" }}
          defaultValue={props.defaultValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            onChange(e.target.value)
          }
        />
      )}

      {/* Select Input  */}
      {fieldType === "select" && (
        <Select
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
          id={id}
          status={status}
          disabled={isDisabled}
          onChange={(value: string) => onChange(value)}
          defaultValue={props.defaultValue}
          style={{ width: "100%" }}
        >
          {props.options &&
            props.options.map((option, ind) => {
              return (
                <Select.Option key={ind} value={option.value}>
                  {t(option.label)}
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
          disabled={isDisabled}
          onChange={({ target: { value } }: RadioChangeEvent) =>
            onChange(value)
          }
        >
          {props.options &&
            props.options.map((option, ind) => (
              <Radio key={ind} value={option.value}>
                {t(option.label)}
              </Radio>
            ))}
        </Radio.Group>
      )}

      {/* Date Picker Input  */}
      {fieldType === "datePicker" && (
        <DatePicker
          name={name}
          format={props.format}
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
          id={id}
          status={status}
          style={{ width: "100%" }}
          disabled={isDisabled}
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
            props.defaultValue ? formatDateTime(props.defaultValue) : undefined
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
          placeholder={placeholder && t(placeholder)}
          data-testid={testId}
          id={id}
          status={status}
          style={{ width: "100%" }}
          disabled={isDisabled}
          use12Hours={props.use12Hours}
          defaultValue={
            props.defaultValue ? formatDateTime(props.defaultValue) : undefined
          }
          onChange={(time: Dayjs | null) => {
            // submit input value to form state
            onChange(dayjs(time).format(props.format));
            // clear validation error
            // Get fields that needs clearing error
            const fields = validation.reduce<string[]>((acc, current) => {
              if (current.fields) {
                acc.push(...current.fields.map((field) => field.field));
              }
              return acc;
            }, []);

            clearErrors?.(fields);
          }}
        />
      )}

      {/* Switch Input  */}
      {fieldType === "switch" && (
        <Switch
          data-testid={testId}
          id={id}
          disabled={isDisabled}
          checkedChildren={t(props.checkedChildren)}
          unCheckedChildren={t(props.unCheckedChildren)}
          defaultChecked={props.defaultChecked}
          onChange={(checked: boolean) => onChange(checked)}
        />
      )}

      {fieldType === "checkbox" && (
        <Checkbox
          data-testid={testId}
          id={id}
          onChange={(e: CheckboxChangeEvent) => onChange(e.target.value)}
        >
          {label}
        </Checkbox>
      )}
    </>
  );
};

export default AddAppointmentFields;
