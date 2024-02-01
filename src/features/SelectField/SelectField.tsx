import { FC } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { FieldSelectComponentProps } from "./SelectField.type";

const SelectField: FC<FieldSelectComponentProps> = (props) => {
  const { label, placeholder, onChange, status, isDisabled, value, options } =
    props;

  const { t } = useTranslation("translation");

  return (
    <>
      <label>{label && t(label)}</label>

      <Select
        placeholder={placeholder && t(placeholder)}
        status={status}
        disabled={isDisabled}
        onChange={(value: string) => onChange(value)}
        value={value as string}
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
