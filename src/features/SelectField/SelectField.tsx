import { FC } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { FieldConfig } from "../AddAppointmentFields/AddAppointmentInputs.type";

const SelectField: FC<FieldConfig> = (props) => {
  const {
    fieldType,
    label,
    id,
    placeholder,
    testId,
    onChange,
    status,
    isDisabled,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {fieldType === "select" && (
        <>
          {label && <label>{t(label)}</label>}

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
        </>
      )}
    </>
  );
};
export default SelectField;
