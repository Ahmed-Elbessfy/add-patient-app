import { FC } from "react";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";
import { FieldSwitchComponentProps } from "./SwitchField.type";

const SwitchField: FC<FieldSwitchComponentProps> = (props) => {
  const {
    label,
    onChange,
    isDisabled,
    checkedChildren,
    unCheckedChildren,
    value,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <Switch
        disabled={isDisabled}
        checkedChildren={t(checkedChildren)}
        unCheckedChildren={t(unCheckedChildren)}
        defaultChecked={value as boolean}
        onChange={(checked: boolean) => {
          onChange(checked);
        }}
        style={{ marginBottom: "9px" }} // center switch field vertically
      />
    </>
  );
};

export default SwitchField;
