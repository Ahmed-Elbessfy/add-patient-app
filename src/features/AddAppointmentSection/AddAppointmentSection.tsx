import { FC } from "react";
import { Flex } from "antd";
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
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: `${gap}rem`,
        padding: props.padding ? `${props.padding}rem` : "inherit",
      };
    } else {
      return {
        display: "flex",
        gridGap: `${gap}rem`,
      };
    }
  };

  return (
    <section style={produceStyle(type)}>
      <Flex justify="space-around" align="center">
        {renderItems(children)}
      </Flex>
    </section>
  );
};

export default AddAppointmentSection;
