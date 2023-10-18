import { ConfigProvider, Select } from "antd";
import { useTranslation } from "react-i18next";
import AddPatientForm from "./features/AddPatientForm/AddPatientForm";
import "./App.css";

function App() {
  // configure i18n
  const { i18n } = useTranslation("lang");
  return (
    <>
      <ConfigProvider direction={i18n.language == "ar" ? "rtl" : "ltr"}>
        {/* Switch language  */}
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
        <AddPatientForm />
      </ConfigProvider>
    </>
  );
}

export default App;
