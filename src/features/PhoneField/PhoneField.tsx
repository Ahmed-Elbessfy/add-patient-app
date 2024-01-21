import { FC, useEffect, useState } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { COUNTRY_CODE } from "../CountryField/CountryField.type";
import CountryField from "../CountryField/CountryField";
import { FieldPhoneComponentProps } from "./PhoneField.type";

import * as lib from "libphonenumber-js";
const phoneUtil = lib;

const PhoneField: FC<FieldPhoneComponentProps> = (props) => {
  const { label, id, testId, onChange, status, value } = props;

  const { t } = useTranslation("translation");

  const [number, setNumber] = useState<string>("");
  const [code, setCode] = useState<COUNTRY_CODE>("EG");

  useEffect(() => {
    console.log("current Value: ", value);
    console.log("code : ", phoneUtil.getCountryCallingCode(code));
    console.log("Number : ", number);
    console.log("is valid: ", phoneUtil.isValidPhoneNumber(number, code));

    console.log(
      phoneUtil.parse(`+${phoneUtil.getCountryCallingCode(code)}${number}`)
    );

    onChange(`+${phoneUtil.getCountryCallingCode(code)}${number || ""}`);
  }, [code, number, onChange]);

  return (
    <div id={id} data-testid={testId}>
      {label && <label>{t(label)}</label>}

      <CountryField
        fieldType="country"
        onChange={setCode}
        value={code}
        isDisabled={false}
      />
      <Input
        type="text"
        placeholder="01xxxxxxxxx"
        status={status}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
};

export default PhoneField;
