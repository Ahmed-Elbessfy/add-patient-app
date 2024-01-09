import { FC } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { FieldSelectComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const SelectField: FC<FieldSelectComponentProps> = (props) => {
  const {
    label,
    id,
    placeholder,
    testId,
    onChange,
    status,
    isDisabled,
    defaultValue,
    options,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <Select
        placeholder={placeholder && t(placeholder)}
        data-testid={testId}
        id={id}
        status={status}
        disabled={isDisabled}
        onChange={(value: string) => onChange(value)}
        defaultValue={defaultValue}
        style={{ width: "100%" }}
      >
        {options &&
          options.map((option, ind) => {
            return (
              <Select.Option key={ind} value={option.value}>
                {t(option.label)}
              </Select.Option>
            );
          })}
      </Select>
    </>
  );
};
export default SelectField;
