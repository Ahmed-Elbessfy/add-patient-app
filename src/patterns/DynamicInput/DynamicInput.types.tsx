import { CheckboxValueType } from "antd/es/checkbox/Group";

type Option = {
  label: string;
  value: string;
};

type OnChange = (
  value: string | number | CheckboxValueType[] | boolean
) => void;

export type schemaTypes =
  | "datePicker"
  | "rangePicker"
  | "rate"
  | "name"
  | "email"
  | "age"
  | "gender"
  | "country"
  | "phone"
  | "description"
  | "gamer"
  | "preferredMeals"
  | "available"
  | "how_much"
  | `rangePicker.${number}`
  | `preferredMeals.${number}`;

type validationRuleFormat = {
  required: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  acceptMultiples?: boolean;
  valueFormat?: string | string[];
};

interface DynamicInputConfigBase {
  fieldType:
    | "text"
    | "number"
    | "select"
    | "textarea"
    | "radio"
    | "checkbox"
    | "datePicker"
    | "rangePicker"
    | "switch"
    | "slider"
    | "rate";
  name: string;
  schemaName: schemaTypes;
  placeholder?: string | [string, string];
  label?: string;
  id?: string;
  testId?: string;
  // validationRules: validationRuleFormat[];
  onChange: OnChange;
}

export interface DynamicInputConfigText extends DynamicInputConfigBase {
  fieldType: "text";
}

export interface DynamicInputConfigNumber extends DynamicInputConfigBase {
  fieldType: "number";
}

export interface DynamicInputConfigTextArea extends DynamicInputConfigBase {
  fieldType: "textarea";
}

export interface DynamicInputConfigSelect extends DynamicInputConfigBase {
  fieldType: "select";
  options: Option[];
}
export interface DynamicInputConfigRadio extends DynamicInputConfigBase {
  fieldType: "radio";
  options: Option[];
}

export interface DynamicInputConfigCheckbox extends DynamicInputConfigBase {
  fieldType: "checkbox";
  options: Option[];
}

interface DynamicInputConfigDateInputs extends DynamicInputConfigBase {
  showTime: boolean;
  format: string;
}
export interface DynamicInputConfigDatePicker
  extends DynamicInputConfigDateInputs {
  fieldType: "datePicker";
}

export interface DynamicInputConfigRangePicker
  extends DynamicInputConfigDateInputs {
  fieldType: "rangePicker";
}

export interface DynamicInputConfigSwitch extends DynamicInputConfigBase {
  fieldType: "switch";
}

export interface DynamicInputConfigSlider extends DynamicInputConfigBase {
  fieldType: "slider";
}

export interface DynamicInputConfigRate extends DynamicInputConfigBase {
  fieldType: "rate";
  allowHalfRate: boolean;
}

export type DynamicInputConfig =
  | DynamicInputConfigText
  | DynamicInputConfigTextArea
  | DynamicInputConfigNumber
  | DynamicInputConfigSelect
  | DynamicInputConfigRadio
  | DynamicInputConfigCheckbox
  | DynamicInputConfigDatePicker
  | DynamicInputConfigRangePicker
  | DynamicInputConfigSwitch
  | DynamicInputConfigSlider
  | DynamicInputConfigRate;
