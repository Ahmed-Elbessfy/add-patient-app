import { FC } from "react";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";
import { FieldSwitchComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const SwitchField: FC<FieldSwitchComponentProps> = (props) => {
  const {
    label,
    id,
    testId,
    onChange,
    isDisabled,
    setValue,
    clearErrors,
    checkedChildren,
    unCheckedChildren,
    defaultChecked,
    modifyFieldsValues,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <Switch
        data-testid={testId}
        id={id}
        disabled={isDisabled}
        checkedChildren={t(checkedChildren)}
        unCheckedChildren={t(unCheckedChildren)}
        defaultChecked={defaultChecked}
        onChange={(checked: boolean) => {
          onChange(checked);

          // Apply side effect
          // this functionality is used when we need a side effect of changing a switch field
          // and need a change another field value on checkbox change
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
        }}
      />
    </>
  );
};

export default SwitchField;
