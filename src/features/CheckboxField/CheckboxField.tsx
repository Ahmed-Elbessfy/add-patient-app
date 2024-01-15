import { FC } from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useTranslation } from "react-i18next";
import { FieldCheckboxComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const CheckboxField: FC<FieldCheckboxComponentProps> = (props) => {
  const {
    label,
    id,
    testId,
    onChange,
    defaultChecked,
    modifyFieldsValues,
    setValue,
    clearErrors,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <Checkbox
      data-testid={testId}
      id={id}
      defaultChecked={defaultChecked}
      onChange={(e: CheckboxChangeEvent) => {
        onChange(e.target.checked);

        // Apply side effect
        // this functionality is used when we need a side effect of changing a checkbox field
        // and need a change another field value on checkbox change
        if (modifyFieldsValues && setValue) {
          modifyFieldsValues.forEach((config) => {
            if (config.action === "empty") setValue(config.fieldName, "");

            if (config.action === "useValue" && config.value)
              setValue(config.fieldName, config.value);

            // clearing error if needed
            if (config.clearError && clearErrors) clearErrors(config.fieldName);
          });
        }
      }}
    >
      {label && t(label)}
    </Checkbox>
  );
};

export default CheckboxField;
