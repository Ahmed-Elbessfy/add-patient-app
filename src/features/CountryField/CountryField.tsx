import { FC } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { FieldCountryComponentProps } from "./CountryField.type";
import { CountriesDetails } from "./CountryField.constants";
import { StyledCountryField } from "./CountryField.styled";

const CountryField: FC<FieldCountryComponentProps> = (props) => {
  const { label, placeholder, onChange, status, isDisabled, value, variant } =
    props;

  const { t } = useTranslation("translation");
  return (
    <>
      {label && <label>{t(label)}</label>}

      <StyledCountryField
        placeholder={placeholder && t(placeholder)}
        status={status}
        disabled={isDisabled}
        onChange={(value: string) => onChange(value)}
        value={value as string}
      >
        {Object.values(CountriesDetails).map((country) => {
          return (
            <Select.Option key={country.code} value={country.code}>
              {variant && variant === "flag-only"
                ? `${country.emoji}`
                : `${country.emoji} ${country.name}`}
            </Select.Option>
          );
        })}
      </StyledCountryField>
    </>
  );
};

export default CountryField;
