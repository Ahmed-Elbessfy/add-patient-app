import { FC } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { useTranslation } from "react-i18next";
import { FieldRadioComponentProps } from "./RadioField.type";

const RadioField: FC<FieldRadioComponentProps> = (props) => {
  const { label, onChange, isDisabled, options } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      <label>{label && t(label)}</label>

      <Radio.Group
        disabled={isDisabled}
        onChange={({ target: { value } }: RadioChangeEvent) => onChange(value)}
      >
        {options &&
          options.map((option, ind) => (
            <Radio key={ind} value={option.value}>
              {t(option.label)}
            </Radio>
          ))}
      </Radio.Group>
    </>
  );
};

export default RadioField;
