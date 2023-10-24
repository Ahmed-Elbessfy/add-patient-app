import { CheckboxValueType } from "antd/es/checkbox/Group";

type Option = {
  label: string;
  value: string;
};

type OnChange = (
  name: string,
  value: string | number | CheckboxValueType[]
) => void;

interface DynamicInputConfigBase {
  fieldType: "text" | "number" | "select" | "textarea" | "radio" | "checkbox";
  name: string;
  placeholder?: string;
  label?: string;
  id?: string;
  testId?: string;
  onChange: OnChange;
}

interface DynamicInputConfigText extends DynamicInputConfigBase {
  fieldType: "text";
}

interface DynamicInputConfigNumber extends DynamicInputConfigBase {
  fieldType: "number";
}

interface DynamicInputConfigTextArea extends DynamicInputConfigBase {
  fieldType: "textarea";
}

interface DynamicInputConfigSelect extends DynamicInputConfigBase {
  fieldType: "select";
  options: Option[];
}
interface DynamicInputConfigRadio extends DynamicInputConfigBase {
  fieldType: "radio";
  options: Option[];
}

interface DynamicInputConfigCheckbox extends DynamicInputConfigBase {
  fieldType: "checkbox";
  options: Option[];
}

export type DynamicInputConfig =
  | DynamicInputConfigText
  | DynamicInputConfigTextArea
  | DynamicInputConfigNumber
  | DynamicInputConfigSelect
  | DynamicInputConfigRadio
  | DynamicInputConfigCheckbox;

// Types Approach
// type DynamicTextInputConfig = {
//   fieldType: "text" | "number" | "select" | "textarea" | "radio" | "checkbox";
//   name: string;
//   placeholder: string;
//   label?: string;
//   id?: string;
//   testId?: string;
//   onChange: OnChange;
// };

// type DynamicNumberInputConfig = {
//   fieldType: "number";
//   name: string;
//   placeholder: string;
//   label?: string;
//   id?: string;
//   testId?: string;
//   onChange: OnChange;
// };

// type DynamicSelectInputConfig = {
//   fieldType: "select";
//   name: string;
//   placeholder: string;
//   label?: string;
//   id?: string;
//   testId?: string;
//   options: Option[];
//   onChange: OnChange;
// };
// export type DynamicInputConfigType =
//   | DynamicTextInputConfig
//   | DynamicNumberInputConfig
//   | DynamicSelectInputConfig;
