import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { FieldTextAreaComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const { TextArea } = Input;

const TextAreaField: FC<FieldTextAreaComponentProps> = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    testId,
    onChange,
    status,
    isDisabled,
    maxLength,
    showCount,
    value,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <TextArea
        name={name}
        placeholder={placeholder && t(placeholder)}
        data-testid={testId}
        id={id}
        status={status}
        disabled={isDisabled}
        maxLength={maxLength}
        showCount={showCount}
        style={{ width: "100%" }}
        value={value as string}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
      />
    </>
  );
};

export default TextAreaField;
