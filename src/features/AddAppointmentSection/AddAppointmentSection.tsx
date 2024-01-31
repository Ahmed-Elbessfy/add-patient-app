import { FC } from "react";
import { Col, Row } from "antd";
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
      <Row
        gutter={0}
        align="middle"
        justify={justify}
        style={{ width: "100%" }}
      >
        {renderItems(children)}
      </Row>
    </Col>
  ) : (
    // hStack & Box layout
    <Row gutter={16} align="middle" justify={justify} style={{ width: "100%" }}>
      {renderItems(children)}
    </Row>
  );
};

export default AddAppointmentSection;
