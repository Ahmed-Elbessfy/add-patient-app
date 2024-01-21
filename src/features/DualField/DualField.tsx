import { FC, useState } from "react";
import { Col, Switch } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { FieldDualComponentProps } from "./DualField.type";
import AddAppointmentFields from "../AddAppointmentFields/AddAppointmentFields";

const DualField: FC<FieldDualComponentProps> = (props) => {
  const { testId, fieldsConfig, control } = props;

  // Toggle fields show
  const firstField = fieldsConfig[0].name,
    secondField = fieldsConfig[1].name;
  const [shownField, setShownField] = useState<string>(firstField);
  // const [firstValue, setFirstValue] = useState(null);
  // const [secondValue, setSecondValue] = useState(null);

  return (
    <Col md={8}>
      <div style={{ position: "relative" }}>
        <Switch
          data-testid={testId}
          onChange={() => {
            if (shownField === firstField) setShownField(secondField);
            else setShownField(firstField);
          }}
          checkedChildren={<CalendarOutlined />}
          unCheckedChildren={<CalendarOutlined />}
          size="small"
          style={{ position: "absolute", right: "4px", top: "4px", zIndex: 2 }}
        />

        {/* Rendered Fields  */}
        {fieldsConfig.map((field, ind) => {
          const childProps = { ...field, control, isDisabled: false };
          return (
            shownField === field.name && (
              <Col style={{ margin: "0 -8px", width: "100%" }} key={ind}>
                <AddAppointmentFields {...childProps} />
              </Col>
            )
          );
        })}
      </div>
    </Col>
  );
};

export default DualField;
