import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { FieldTextAreaComponentProps } from "./TextAreaField.type";

const { TextArea } = Input;

const TextAreaField: FC<FieldTextAreaComponentProps> = (props) => {
  const {
    label,
    placeholder,
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
      <label>{label && t(label)}</label>

      <TextArea
        placeholder={placeholder && t(placeholder)}
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
