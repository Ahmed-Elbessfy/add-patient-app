import { FC } from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useTranslation } from "react-i18next";
import { FieldCheckboxComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const CheckboxField: FC<FieldCheckboxComponentProps> = (props) => {
  const { label, id, testId, onChange, defaultChecked } = props;

  const { t } = useTranslation("translation");

  return (
    <Checkbox
      data-testid={testId}
      id={id}
      defaultChecked={defaultChecked}
      onChange={(e: CheckboxChangeEvent) => {
        onChange(e.target.checked);
      }}
    >
      {label && t(label)}
    </Checkbox>
  );
};

export default CheckboxField;
