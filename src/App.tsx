import { Suspense } from "react";
import loadable from "@loadable/component";
import { ConfigProvider, Select } from "antd";
import { useTranslation } from "react-i18next";
import "./App.css";

const AddPatientForm = loadable(
  () => import("./features/AddPatientForm/AddPatientForm")
);
function App() {
  // configure i18n
  const { i18n } = useTranslation("lang");
  return (
    <>
      <ConfigProvider direction={i18n.language == "ar" ? "rtl" : "ltr"}>
        <Suspense fallback={<div>Loading ....</div>}>
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
        </Suspense>
      </ConfigProvider>
    </>
  );
}

export default App;
