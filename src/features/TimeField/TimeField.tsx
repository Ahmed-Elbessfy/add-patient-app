import { FC } from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { FieldTimeComponentProps } from "./TimeField.type";
import { formatDateTime } from "../../utils/addAppointUtils";

const TimeField: FC<FieldTimeComponentProps> = (props) => {
  const {
    label,
    placeholder,
    onChange,
    status,
    isDisabled,
    format,
    use12Hours,
    value,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      <>
        {label && <label>{t(label)}</label>}

        <TimePicker
          format={format}
          placeholder={placeholder && t(placeholder)}
          status={status}
          style={{ width: "100%" }}
          disabled={isDisabled}
          use12Hours={use12Hours}
          value={formatDateTime(value as string)}
          onChange={(time: Dayjs | null) => {
            // submit input value to form state
            onChange(dayjs(time));
            // clear validation error
          }}
        />
      </>
    </>
  );
};

export default TimeField;
