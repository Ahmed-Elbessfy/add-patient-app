import { FC } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

const SwitchLangBtn: FC = () => {
  const { i18n } = useTranslation("lang");

  return (
    <Select
      defaultValue="en"
      style={{ width: 100, marginBottom: "1rem" }}
      placeholder="Select Language"
      options={[
        { value: "en", label: "English" },
        { value: "ar", label: "العربية" },
      ]}
      onChange={(lang) => i18n.changeLanguage(lang)}
    />
  );
};

export default SwitchLangBtn;
