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
    defaultChecked,
  } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <Switch
        disabled={isDisabled}
        checkedChildren={t(checkedChildren)}
        unCheckedChildren={t(unCheckedChildren)}
        defaultChecked={defaultChecked}
        onChange={(checked: boolean) => {
          onChange(checked);
        }}
      />
    </>
  );
};

export default SwitchField;
