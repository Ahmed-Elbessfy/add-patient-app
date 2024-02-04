import { FC, useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import AddAppointmentFields from "../AddAppointmentFields/AddAppointmentFields";
import { FieldDualComponentProps } from "./DualField.type";
import {
  StyledDualFieldWrapper,
  StyledSwitchDualField,
} from "./DualField.styled";

const DualField: FC<FieldDualComponentProps> = (props) => {
  const { testId, fieldsConfig, control } = props;

  // Toggle fields show
  const firstField = fieldsConfig[0].name,
    secondField = fieldsConfig[1].name;
  const [shownField, setShownField] = useState<string>(firstField);

  return (
    <div style={{ position: "relative" }}>
      <StyledSwitchDualField
        data-testid={testId}
        onChange={() => {
          if (shownField === firstField) setShownField(secondField);
          else setShownField(firstField);
        }}
        checkedChildren={<CalendarOutlined />}
        unCheckedChildren={<CalendarOutlined />}
        size="small"
      />

      {/* Rendered Fields  */}
      {fieldsConfig.map((field, ind) => {
        // isDisabled & control is required for AddAppointmentField component
        // isDisabled is set by isMatched function but for now it is set to be "false" as per requirement does not require a value
        const childProps = { ...field, control, isDisabled: false };
        return (
          shownField === field.name && (
            <StyledDualFieldWrapper key={ind}>
              <AddAppointmentFields {...childProps} />
            </StyledDualFieldWrapper>
          )
        );
      })}
    </div>
  );
};

export default DualField;
