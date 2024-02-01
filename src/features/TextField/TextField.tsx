import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { FieldTextComponentProps } from "./TextField.type";

const TextField: FC<FieldTextComponentProps> = (props) => {
  const {
    fieldType,
    id,
    testId,
    label,
    placeholder,
    onChange,
    status,
    isDisabled,
    value,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      <label>{label && t(label)}</label>
      <Input
        id={id}
        data-testid={testId}
        type={fieldType}
        placeholder={placeholder && t(placeholder)}
        status={status}
        disabled={isDisabled}
        value={value as string}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
      />
    </>
  );
};

export default TextField;
