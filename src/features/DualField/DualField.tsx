import { FC, useState } from "react";
import { Col, Switch } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { DualFieldComponentProps } from "./DualField.type";

const DualField: FC<DualFieldComponentProps> = (props) => {
  const { testId, fieldsConfig, renderFieldItems } = props;

  // Toggle fields show
  const firstField = fieldsConfig[0].name,
    secondField = fieldsConfig[1].name;
  const [shownField, setShownField] = useState<string>(firstField);

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
        {fieldsConfig.map((field) => {
          return (
            shownField === field.name && (
              <div style={{ margin: "0 -8px" }}>{renderFieldItems(field)}</div>
            )
          );
        })}
      </div>
    </Col>
  );
};

export default DualField;
