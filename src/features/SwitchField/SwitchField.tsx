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
    emptyFields,
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

          // reset field accepts only one field
          // reset method did not work properly
          // keep error to false to remove errors in case of changing visibility
          if (setValue && emptyFields) {
            for (const field of emptyFields) {
              console.log(field);
              setValue(field, "");
              clearErrors(field);
            }
          }
        }}
      />
    </>
  );
};

export default SwitchField;
