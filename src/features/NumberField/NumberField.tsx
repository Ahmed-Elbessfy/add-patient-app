import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { FieldNumberComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const NumberField: FC<FieldNumberComponentProps> = (props) => {
  const {
    fieldType,
    label,
    name,
    id,
    placeholder,
    testId,
    onChange,
    status,
    isDisabled,
    value,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <Input
        type={fieldType}
        name={name}
        placeholder={placeholder && t(placeholder)}
        data-testid={testId}
        id={id}
        status={status}
        disabled={isDisabled}
        value={value}
        defaultValue={props.defaultValue}
        addonAfter={props.suffix}
        addonBefore={props.prefix}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </>
  );
};

export default NumberField;
