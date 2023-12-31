import { FC } from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useTranslation } from "react-i18next";
import { FieldCheckboxComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const CheckboxField: FC<FieldCheckboxComponentProps> = (props) => {
  const { label, id, testId, onChange, resetField } = props;

  const { t } = useTranslation("translation");

  return (
    <Checkbox
      data-testid={testId}
      id={id}
      defaultChecked={props.defaultChecked}
      onChange={(e: CheckboxChangeEvent) => {
        onChange(e.target.checked);

        // reset field accepts only one field
        // reset method did not work properly
        // keep error to false to remove errors in case of changing visibility
        if (resetField && props.emptyFields) {
          for (const field of props.emptyFields) {
            resetField(field, { keepError: false });
          }
        }
      }}
    >
      {label && t(label)}
    </Checkbox>
  );
};

export default CheckboxField;
