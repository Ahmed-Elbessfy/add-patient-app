import { FC } from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { formatDateTime } from "../../utils/addAppointUtils";
import { FieldTimeComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const TimeField: FC<FieldTimeComponentProps> = (props) => {
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
    format,
    use12Hours,
    defaultValue,
  } = props;

  const { t } = useTranslation("translation");
  // console.log("time : ", defaultValue, formatDateTime(defaultValue));

  return (
    <>
      {fieldType === "timePicker" && (
        <>
          {label && <label>{t(label)}</label>}

          <TimePicker
            name={name}
            format={format}
            placeholder={placeholder && t(placeholder)}
            data-testid={testId}
            id={id}
            status={status}
            style={{ width: "100%" }}
            disabled={isDisabled}
            use12Hours={use12Hours}
            defaultValue={
              defaultValue ? formatDateTime(defaultValue) : undefined
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
        </>
      )}
    </>
  );
};

export default TimeField;
