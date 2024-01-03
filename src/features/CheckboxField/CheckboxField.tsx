import { FC } from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useTranslation } from "react-i18next";
import { FieldConfig } from "../AddAppointmentFields/AddAppointmentInputs.type";

const CheckboxField: FC<FieldConfig> = (props) => {
  const { fieldType, label, id, testId, onChange } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {fieldType === "checkbox" && (
        <Checkbox
          data-testid={testId}
          id={id}
          defaultChecked={props.defaultChecked}
          onChange={(e: CheckboxChangeEvent) => onChange(e.target.checked)}
        >
          {label && t(label)}
        </Checkbox>
      )}
    </>
  );
};

export default CheckboxField;
