import { FC } from "react";
import { Row } from "antd";
import {
  Item,
  ItemForm,
  ItemLayout,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

type Props = (ItemLayout | ItemForm) & {
  renderItems: (fieldConfig: Item[]) => JSX.Element;
};

const AddAppointmentSection: FC<Props> = (props: Props) => {
  const { children, renderItems } = props;

  return (
    <Row
      gutter={16}
      align="middle"
      justify={props.justify}
      style={{ width: "100%" }}
    >
      {renderItems(children)}
    </Row>
  );
};

export default AddAppointmentSection;
