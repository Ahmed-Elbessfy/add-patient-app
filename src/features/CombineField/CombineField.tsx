import { FC } from "react";
import { CombineFieldComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";
import { Col } from "antd";
import { t } from "i18next";

const CombineField: FC<CombineFieldComponentProps> = (props) => {
  const { id, testId, fieldsConfig, label, renderFieldItems } = props;

  return (
    <Col style={{ textAlign: "start" }} md={8} id={id} data-testid={testId}>
      <label>{label && t(label)}</label>
      <div style={{ display: "flex", width: "100%" }}>
        <span style={{ flex: "20px", margin: " 0-8px" }}>
          {renderFieldItems(fieldsConfig[0])}
        </span>
        <span style={{ flex: 5, margin: " 0-8px" }}>
          {renderFieldItems(fieldsConfig[1])}
        </span>
      </div>
    </Col>
  );
};

export default CombineField;
