import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { FieldNumberComponentProps } from "./NumberField.type";

const NumberField: FC<FieldNumberComponentProps> = (props) => {
  const {
    fieldType,
    label,
    placeholder,
    onChange,
    status,
    isDisabled,
    value,
    prefix,
    suffix,
    min,
    max,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <Input
        type={fieldType}
        placeholder={placeholder && t(placeholder)}
        status={status}
        disabled={isDisabled}
        value={value as number}
        addonAfter={suffix}
        addonBefore={prefix}
        min={min}
        max={max}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </>
  );
};

export default NumberField;
