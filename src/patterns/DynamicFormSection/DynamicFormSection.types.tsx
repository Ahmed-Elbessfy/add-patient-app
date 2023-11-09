import { InputConfigOptions } from "../DynamicForm/DynamicForm.types";
import { ItemLayout } from "../DynamicInput/DynamicInput.types";

export type DynamicFormSectionProps = ItemLayout & {
  renderItems: (inputsConfig: InputConfigOptions[]) => JSX.Element
}
