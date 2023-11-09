import { FC } from "react";
import { DynamicFormSectionProps } from "./DynamicFormSection.types";

const DynamicFormSection: FC<DynamicFormSectionProps> = (props) => {
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

  return <section style={produceStyle(type)}>{renderItems(children)}</section>;
};

export default DynamicFormSection;
