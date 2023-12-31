import { FC } from "react";
import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { formatDateTime } from "../../utils/addAppointUtils";
import { FieldDateComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const DateField: FC<FieldDateComponentProps> = (props) => {
  const { label, name, id, placeholder, testId, onChange, status, isDisabled } =
    props;

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
      {label && <label>{t(label)}</label>}

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
    </>
  );
};

export default DateField;
