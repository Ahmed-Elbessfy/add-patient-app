import { FC, useState } from "react";
import { Switch } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { DualFieldComponentProps } from "../AddAppointmentFields/AddAppointmentInputs.type";

const DualField: FC<DualFieldComponentProps> = (props) => {
  const { testId, fieldsConfig, renderFieldItems } = props;

  // Toggle fields show
  const firstField = fieldsConfig[0].name,
    secondField = fieldsConfig[1].name;
  const [shownField, setShownField] = useState<string>(firstField);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Switch
        data-testid={testId}
        onChange={() => {
          if (shownField === firstField) setShownField(secondField);
          else setShownField(firstField);
        }}
        checkedChildren={<CalendarOutlined />}
        unCheckedChildren={<CalendarOutlined />}
        size="small"
        style={{ position: "absolute", right: "11px", top: "4px", zIndex: 2 }}
      />

      {/* Rendered Fields  */}
      {fieldsConfig.map((field) => {
        return shownField === field.name && renderFieldItems(field);
      })}
    </div>
  );
};

export default DualField;
