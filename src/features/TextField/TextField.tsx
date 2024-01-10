import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { FieldTextComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const TextField: FC<FieldTextComponentProps> = (props) => {
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
    defaultValue,
    modifyFieldsValues,
    setValue,
    getValues,
    clearErrors,
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
        defaultValue={defaultValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (modifyFieldsValues) {
            modifyFieldsValues.forEach((config) => {
              if (config.action === "empty") setValue(config.fieldName, "");

              if (config.action === "useValue" && config.value)
                setValue(config.fieldName, config.value);

              if (config.action === "updatePhoneKey") {
                const currentValue = getValues(config.fieldName)
                
              }

              if (config.action === "updatePhoneNumber") {
              }

              // clearing error if needed
              if (config.clearError && clearErrors)
                clearErrors(config.fieldName);
            });
          }
          onChange(e.target.value);
        }}
      />
    </>
  );
};

export default TextField;
