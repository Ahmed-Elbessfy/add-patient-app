import { FC } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { useTranslation } from "react-i18next";
import { FieldRadioComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const RadioField: FC<FieldRadioComponentProps> = (props) => {
  const { label, name, testId, onChange, isDisabled } = props;

  const { t } = useTranslation("translation");

  return (
    <>
      {label && <label>{t(label)}</label>}

      <Radio.Group
        name={name}
        data-testid={testId}
        disabled={isDisabled}
        onChange={({ target: { value } }: RadioChangeEvent) => onChange(value)}
      >
        {props.options &&
          props.options.map((option, ind) => (
            <Radio key={ind} value={option.value}>
              {t(option.label)}
            </Radio>
          ))}
      </Radio.Group>
    </>
  );
};

export default RadioField;
