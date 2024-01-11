import { FC } from "react";
import { CombineFieldComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";
import { Col } from "antd";
import { t } from "i18next";

const CombineField: FC<CombineFieldComponentProps> = (props) => {
  const { category, id, testId, fieldsConfig, label, renderFieldItems } = props;
  console.log(category, id, testId, fieldsConfig);
  return (
    <>
      <label>{label && t(label)}</label>
      <Col>
        <div style={{ display: "flex", width: "100%" }}>
          <span style={{ flex: 1 }}>{renderFieldItems(fieldsConfig[0])}</span>
          <span style={{ flex: 4 }}>{renderFieldItems(fieldsConfig[1])}</span>
        </div>
      </Col>
    </>
  );
};

export default CombineField;
