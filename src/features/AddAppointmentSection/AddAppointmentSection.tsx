import { FC } from "react";
import { Col } from "antd";
import { StyledRowSection } from "./AddAppointmentSection.styled";
import {
  Item,
  ItemForm,
  ItemLayout,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

type Props = (ItemLayout | ItemForm) & {
  renderItems: (fieldConfig: Item[]) => JSX.Element;
};

const AddAppointmentSection: FC<Props> = (props: Props) => {
  const { type, xs, md, justify, children, renderItems } = props;

  return type === "fieldGroup" ? (
    // Field Group layout
    <Col xs={xs} md={md}>
      <StyledRowSection gutter={0} align="middle" justify={justify}>
        {renderItems(children)}
      </StyledRowSection>
    </Col>
  ) : (
    // hStack & Box layout
    <StyledRowSection gutter={16} align="middle" justify={justify}>
      {renderItems(children)}
    </StyledRowSection>
  );
};

export default AddAppointmentSection;
