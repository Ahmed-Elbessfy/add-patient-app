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

  // update combine field value
  const updateCombineFieldValue = (
    currentValue: string,
    ind: number,
    value: string
  ) => {
    const originalValue = currentValue.split("-");
    originalValue.splice(ind, 1, value);

    return originalValue.join("-");
  };

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

          // set value variable to hold the new value will be registered at form state
          // value can be used for both combine and non combine fields based on following configuration
          let value = e.target.value;

          // configuration for combine field (( 2 fields register in one form state value ))
          if (onChangeCustomConfig && setValue && getValues) {
            const { fieldName, action } = onChangeCustomConfig;

            // get current value pf combine field
            const currentValue = getValues(fieldName);

            // update first part only if needed
            if (action === "updateFirstPart")
              value = updateCombineFieldValue(
                currentValue as string,
                0,
                e.target.value
              );

            // update second part only if needed
            if (action === "updateSecondPart")
              value = updateCombineFieldValue(
                currentValue as string,
                1,
                e.target.value
              );

            // update form state value
            setValue(fieldName, value);
          } else {
            // register non combine field values
            onChange(value);
          }
        }}
      />
    </>
  );
};

export default TextField;
