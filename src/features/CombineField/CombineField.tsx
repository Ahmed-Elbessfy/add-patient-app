import { FC } from "react";
import { Col } from "antd";
import { t } from "i18next";
import { Controller } from "react-hook-form";
import ErrorMsg from "../../patterns/ErrorMsg/ErrorMsg";
import { CombineFieldComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const CombineField: FC<CombineFieldComponentProps> = (props) => {
  const { name, id, testId, fieldsConfig, label, renderFieldItems, control } =
    props;

  return (
    <Col style={{ textAlign: "start" }} md={8} id={id} data-testid={testId}>
      <Controller
        name={name}
        control={control}
        render={({ fieldState: { error } }) => {
          return (
            <div style={{ position: "relative" }}>
              <label>{label && t(label)}</label>
              <div style={{ display: "flex", width: "100%" }}>
                <span style={{ flex: "20px", margin: " 0-8px" }}>
                  {renderFieldItems(fieldsConfig[0])}
                </span>
                <span style={{ flex: 5, margin: " 0-8px" }}>
                  {renderFieldItems(fieldsConfig[1])}
                </span>
              </div>
              <div style={{ position: "absolute", top: "60px" }}>
                <ErrorMsg error={error} />
              </div>
            </div>
          );
        }}
      />
    </Col>
  );
};

export default CombineField;
