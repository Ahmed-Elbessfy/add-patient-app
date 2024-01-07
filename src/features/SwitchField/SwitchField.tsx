import { FC } from "react";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";
import { FieldSwitchComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const SwitchField: FC<FieldSwitchComponentProps> = (props) => {
  const { label, id, testId, onChange, isDisabled, resetField } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <Switch
        data-testid={testId}
        id={id}
        disabled={isDisabled}
        checkedChildren={t(props.checkedChildren)}
        unCheckedChildren={t(props.unCheckedChildren)}
        defaultChecked={props.defaultChecked}
        onChange={(checked: boolean) => {
          onChange(checked);

          // reset field accepts only one field
          // reset method did not work properly
          // keep error to false to remove errors in case of changing visibility
          if (resetField && props.emptyFields) {
            for (const field of props.emptyFields) {
              resetField(field, { keepError: false });
            }
          }
        }}
      />
    </>
  );
};

export default SwitchField;
