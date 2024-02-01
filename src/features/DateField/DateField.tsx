import { FC } from "react";
import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { formatDateTime } from "../../utils/addAppointUtils";
import { FieldDateComponentProps } from "./DateField.type";

const DateField: FC<FieldDateComponentProps> = (props) => {
  const {
    label,
    placeholder,
    onChange,
    status,
    isDisabled,
    format,
    dateLimit,
    value,
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
      <label>{label && t(label)}</label>

      <DatePicker
        format={format}
        placeholder={placeholder && t(placeholder)}
        status={status}
        style={{ width: "100%" }}
        disabled={isDisabled}
        disabledDate={(current) =>
          dateLimit
            ? disabledDate(current, dateLimit.status, dateLimit.date)
            : false
        }
        value={value ? formatDateTime(value as string) : undefined}
        onChange={(value: DatePickerProps["value"]) => {
          // accepted format "YYYY/MM/DD"
          onChange(value);
        }}
      />
    </>
  );
};

export default DateField;
