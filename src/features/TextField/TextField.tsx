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
    onChangeCustomConfig,
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
          if (modifyFieldsValues && setValue) {
            modifyFieldsValues.forEach((config) => {
              if (config.action === "empty") setValue(config.fieldName, "");

              if (config.action === "useValue" && config.value)
                setValue(config.fieldName, config.value);

              // clearing error if needed
              if (config.clearError && clearErrors)
                clearErrors(config.fieldName);
            });
          }

          let value = e.target.value;
          if (onChangeCustomConfig && getValues) {
            const { fieldName, action } = onChangeCustomConfig;
            console.log(fieldName, getValues("new_patient.phone"), getValues());
            if (action === "updateKey")
              value = getValues(fieldName)
                .split("-")
                .splice(0, 1, e.target.value);

            if (action === "updateNumber")
              value = getValues(fieldName)
                .split("-")
                .splice(1, 1, e.target.value);
          }
          onChange(value);
        }}
      />
    </>
  );
};

export default TextField;
