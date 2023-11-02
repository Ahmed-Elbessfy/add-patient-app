import { FieldElement } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

export type schemaTypes = "name" | "age";
// | "datePicker"
// | "rangePicker"
// | "rate"
// | "email"
// | "gender"
// | "country"
// | "phone"
// | "description"
// | "gamer"
// | "preferredMeals"
// | "available"
// | "how_much"
// | `rangePicker.${number}`
// | `preferredMeals.${number}`;

// type validationRuleFormat = {
//   required: boolean;
//   min?: number;
//   max?: number;
//   pattern?: RegExp;
//   acceptMultiples?: boolean;
//   valueFormat?: string | string[];
// };
type validationFormat = {
  type: string;
  minNumber?: number;
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
  validation: validationFormat[];
  // validationRules: validationRuleFormat[];
  // onChange: (value: FieldElement["value"]) => void;
}

export interface DynamicInputConfigText extends DynamicInputConfigBase {
  fieldType: "text";
  placeholder?: string;
}

export interface DynamicInputConfigNumber extends DynamicInputConfigBase {
  fieldType: "number";
  placeholder?: string;
}

export interface DynamicInputConfigTextArea extends DynamicInputConfigBase {
  fieldType: "textarea";
  placeholder?: string;
}

export interface DynamicInputConfigSelect extends DynamicInputConfigBase {
  fieldType: "select";
  options: Option[];
  placeholder?: string;
}
export interface DynamicInputConfigRadio extends DynamicInputConfigBase {
  fieldType: "radio";
  options: Option[];
  placeholder?: string;
}

export interface DynamicInputConfigCheckbox extends DynamicInputConfigBase {
  fieldType: "checkbox";
  options: Option[];
  placeholder?: string | [string, string];
}

interface DynamicInputConfigDateInputs extends DynamicInputConfigBase {
  showTime: boolean;
  format: string;
  placeholder?: string | [string, string];
}
export interface DynamicInputConfigDatePicker
  extends DynamicInputConfigDateInputs {
  fieldType: "datePicker";
  placeholder?: string;
}

export interface DynamicInputConfigRangePicker
  extends DynamicInputConfigDateInputs {
  fieldType: "rangePicker";
  placeholder?: [string, string];
}

export interface DynamicInputConfigSwitch extends DynamicInputConfigBase {
  fieldType: "switch";
  placeholder?: string;
}

export interface DynamicInputConfigSlider extends DynamicInputConfigBase {
  fieldType: "slider";
  placeholder?: string;
}

export interface DynamicInputConfigRate extends DynamicInputConfigBase {
  fieldType: "rate";
  allowHalfRate: boolean;
  placeholder?: string;
}

// creates types without onChange method, used for inputConfig array
export type DynamicFormInputConfig =
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

// adding onChange Method, used as Props form at Dynamic input
type DynamicInputOnChange = {
  onChange: (value: FieldElement["value"]) => void;
};

export type DynamicInputConfig = DynamicFormInputConfig & DynamicInputOnChange;
