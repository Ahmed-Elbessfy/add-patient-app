import { FieldElement } from "react-hook-form";

type itemCategory = "field" | "layout" | "UI";
/*
**********************************************************
                    Category: Field
**********************************************************
*/
type Option = {
  label: string;
  value: string;
};

export type schemaTypes =
  | "name"
  | "age"
  | "email"
  | "phone"
  | "gender"
  | "country"
  | "maritalStatus"
  | "wifeName"
  | "preferredMeals"
  | "pastDate"
  | "futureDate";

type fieldValidationForm = {
  type: string;
  minNumber?: number;
  maxNumber?: number;
  isInteger?: boolean;
  pattern?: RegExp;
  date?: Date;
};

interface DynamicFieldConfigBase {
  category: itemCategory;
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
  validation: fieldValidationForm[];
  visibility: boolean;
}

export interface DynamicFieldConfigText extends DynamicFieldConfigBase {
  fieldType: "text";
  placeholder?: string;
}

export interface DynamicFieldConfigNumber extends DynamicFieldConfigBase {
  fieldType: "number";
  placeholder?: string;
}

export interface DynamicFieldConfigTextArea extends DynamicFieldConfigBase {
  fieldType: "textarea";
  placeholder?: string;
}

export interface DynamicFieldConfigSelect extends DynamicFieldConfigBase {
  fieldType: "select";
  options: Option[];
  placeholder?: string;
}
export interface DynamicFieldConfigRadio extends DynamicFieldConfigBase {
  fieldType: "radio";
  options: Option[];
  placeholder?: string;
}

export interface DynamicFieldConfigCheckbox extends DynamicFieldConfigBase {
  fieldType: "checkbox";
  options: Option[];
  placeholder?: string | [string, string];
}

interface DynamicFieldConfigDateInputs extends DynamicFieldConfigBase {
  showTime: boolean;
  format: string;
  placeholder?: string | [string, string];
}
export interface DynamicFieldConfigDatePicker
  extends DynamicFieldConfigDateInputs {
  fieldType: "datePicker";
  placeholder?: string;
}

export interface DynamicFieldConfigRangePicker
  extends DynamicFieldConfigDateInputs {
  fieldType: "rangePicker";
  placeholder?: [string, string];
}

export interface DynamicFieldConfigSwitch extends DynamicFieldConfigBase {
  fieldType: "switch";
  placeholder?: string;
}

export interface DynamicFieldConfigSlider extends DynamicFieldConfigBase {
  fieldType: "slider";
  placeholder?: string;
}

export interface DynamicFieldConfigRate extends DynamicFieldConfigBase {
  fieldType: "rate";
  allowHalfRate: boolean;
  placeholder?: string;
}

// creates types without onChange method, used for inputConfig array
export type DynamicFormFieldConfig =
  | DynamicFieldConfigText
  | DynamicFieldConfigTextArea
  | DynamicFieldConfigNumber
  | DynamicFieldConfigSelect
  | DynamicFieldConfigRadio
  | DynamicFieldConfigCheckbox
  | DynamicFieldConfigDatePicker
  | DynamicFieldConfigRangePicker
  | DynamicFieldConfigSwitch
  | DynamicFieldConfigSlider
  | DynamicFieldConfigRate;

// adding onChange Method, used as Props form at Dynamic input
type DynamicFieldOnChange = {
  onChange: (value: FieldElement["value"]) => void;
};

// type DynamicFormValues = {
//   values: {
//     [x: string]: unknown;
//     [x: number]: unknown;
//   };
// };

export type DynamicFieldConfig = DynamicFormFieldConfig & DynamicFieldOnChange;

/*
**********************************************************
                    Category: Layout
**********************************************************
*/

type LayoutType = "hStack" | "box";

export type LayoutBase = {
  category: itemCategory;
  type: LayoutType;
  children: DynamicFormFieldConfig[];
  gap: number;
};

export interface LayoutHStack extends LayoutBase {
  type: LayoutType;
}

export interface LayoutBox extends LayoutBase {
  type: LayoutType;
  padding: number;
}

export type ItemLayout = LayoutHStack | LayoutBox;

/*
**********************************************************
                      Category: UI
**********************************************************
*/

type UIType = "title" | "text" | "link" | "alert";

export type UIBase = {
  category: itemCategory;
  type: UIType;
};

export type UITitle = {
  type: UIType;
  title: string;
  level: number;
};

export type UIText = {
  type: UIType;
  text: string;
  style?: {
    type?: "secondary" | "success" | "warning" | "danger";
    disabled?: boolean;
    mark?: boolean;
    strong?: boolean;
  };
};

export type UILink = {
  type: UIType;
  text: string;
  url: string;
};

export type UIAlert = {
  type: UIType;
  title: string;
  message: string;
};

export type ItemUI = UITitle | UIText | UILink | UIAlert;
