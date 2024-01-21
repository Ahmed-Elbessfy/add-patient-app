import { FC } from "react";
import { FieldCountryComponentProps } from "./CountryField.type";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { CountriesDetails } from "./CountryField.constants";

const CountryField: FC<FieldCountryComponentProps> = (props) => {
  const { label, placeholder, onChange, status, isDisabled, value } = props;

  const { t } = useTranslation("translation");
  return (
    <>
      {label && <label>{t(label)}</label>}

      <Select
        placeholder={placeholder && t(placeholder)}
        status={status}
        disabled={isDisabled}
        onChange={(value: string) => onChange(value)}
        value={value as string}
        style={{ width: "100%" }}
      >
        {Object.values(CountriesDetails).map((country) => {
          return (
            <Select.Option key={country.code} value={country.code}>
              {country.emoji} {country.name}
            </Select.Option>
          );
        })}
      </Select>
    </>
  );
};

export default CountryField;
