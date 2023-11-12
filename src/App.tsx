import { Suspense } from "react";
import loadable from "@loadable/component";
import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddAppointmentPage from "./pages/AddAppointmentPage";

const AddPatientPage = loadable(() => import("./pages/AddPatientPage"));
const SwitchLangBtn = loadable(
  () => import("./patterns/SwitchLangBtn/SwitchLangBtn")
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
          <Router>
            <Routes>
              <Route path="/" element={<AddAppointmentPage />} />
              <Route path="/add_patient" element={<AddPatientPage />} />
            </Routes>
          </Router>
        </Suspense>
      </ConfigProvider>
    </>
  );
}

export default App;
