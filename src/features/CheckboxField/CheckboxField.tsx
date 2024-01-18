import { FC } from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useTranslation } from "react-i18next";
import { FieldCheckboxComponentProps } from "./CheckboxField.type";

const CheckboxField: FC<FieldCheckboxComponentProps> = (props) => {
  const { label, onChange, defaultChecked } = props;

  const { t } = useTranslation("translation");

  return (
    <Checkbox
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
