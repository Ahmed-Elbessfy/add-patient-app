import { FC } from "react";
import { Flex, Row } from "antd";
import {
  Item,
  ItemLayout,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

type Props = ItemLayout & {
  renderItems: (fieldConfig: Item[]) => JSX.Element;
};

const AddAppointmentSection: FC<Props> = (props: Props) => {
  const { type, gap, children, renderItems } = props;

  // create style depending on type of layout
  const produceStyle = (type: string) => {
    if (type === "box") {
      return {
        // gridGap: `${gap}rem`,
        // padding: props.padding ? `${props.padding}rem` : "inherit",
        width: "100%",
      };
    } else {
      return {
        width: "100%",
      };
    }
  };

  return (
    <section style={produceStyle(type)}>
      <Row gutter={16} align="middle">
        {/* <Flex justify="space-around" align="center" > */}
        {renderItems(children)}
        {/* </Flex> */}
      </Row>
    </section>
  );
};

export default AddAppointmentSection;
