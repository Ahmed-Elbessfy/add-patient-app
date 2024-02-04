import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FieldSwitchComponentProps } from "./SwitchField.type";
import { StyledSwitchField } from "./SwitchField.styled";

const SwitchField: FC<FieldSwitchComponentProps> = (props) => {
  const { onChange, isDisabled, checkedChildren, unCheckedChildren, value } =
    props;

  const { t } = useTranslation("translation");

  return (
    <>
      <StyledSwitchField
        disabled={isDisabled}
        checkedChildren={t(checkedChildren)}
        unCheckedChildren={t(unCheckedChildren)}
        defaultChecked={value as boolean}
        onChange={(checked: boolean) => {
          onChange(checked);
        }}
      />
    </>
  );
};

export default SwitchField;
