import { FC, useEffect, useState } from "react";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { COUNTRY_CODE } from "../CountryField/CountryField.type";
import CountryField from "../CountryField/CountryField";
import { FieldPhoneComponentProps } from "./PhoneField.type";

import { getCountryCallingCode, CountryCode } from "libphonenumber-js";

const PhoneField: FC<FieldPhoneComponentProps> = (props) => {
  const { label, id, testId, onChange, status } = props;

  const { t } = useTranslation("translation");

  const [number, setNumber] = useState<string>("");
  const [code, setCode] = useState<COUNTRY_CODE>("EG");

  useEffect(() => {
    // Registering value of 2 inputs to one form state value
    // OnChange values gets validated, so field value gets validated on load
    // to prevent validation on load, only validate if "number" has value which means user is entering value
    if (number)
      onChange(`+${getCountryCallingCode(code as CountryCode)}${number}`);
    else onChange(undefined); // if number is empty, reset value to clear error
  }, [code, number, onChange]);

  return (
    <div id={id} data-testid={testId}>
      <label>{label && t(label)}</label>
      <Space.Compact style={{ width: "100%" }}>
        <div style={{ width: "85px" }}>
          <CountryField
            fieldType="country"
            onChange={setCode}
            value={code}
            isDisabled={false}
            variant="flag-only"
          />
        </div>
        <div style={{ width: "100%" }}>
          <Input
            type="tel"
            placeholder="01xxxxxxxxx"
            status={status}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </Space.Compact>
    </div>
  );
};

export default PhoneField;
