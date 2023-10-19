import { Suspense } from "react";
import loadable from "@loadable/component";
import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import SwitchLangBtn from "./patterns/SwitchLangBtn";
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
          <SwitchLangBtn />
          <AddPatientForm />
        </Suspense>
      </ConfigProvider>
    </>
  );
}

export default App;
