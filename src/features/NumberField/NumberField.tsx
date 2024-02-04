import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FieldNumberComponentProps } from "./NumberField.type";
import { StyledNumberField } from "./NumberField.styled";

const NumberField: FC<FieldNumberComponentProps> = (props) => {
  const {
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
      <label>{label && t(label)}</label>

      <StyledNumberField
        placeholder={placeholder && t(placeholder)}
        status={status}
        disabled={isDisabled}
        value={value as number}
        addonAfter={suffix}
        addonBefore={prefix}
        min={min}
        max={max}
        // null is required by InputNumber onChange method
        onChange={(value: number | null) => {
          // only submit if field is not empty - value not null
          if (value) onChange(value);
        }}
      />
    </>
  );
};

export default NumberField;
