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
  | "futureDate"
  | "childrenNumber"
  | "childrenNames"
  | "parentName"
  | "parentAge"
  | "child.childName"
  | "child.childAge";

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
  placeholder?: string;
  label?: string;
  id?: string;
  testId?: string;
  validation: fieldValidationForm[];
  visibility: boolean;
}

export interface DynamicFieldConfigText extends DynamicFieldConfigBase {
  fieldType: "text";
}

export interface DynamicFieldConfigNumber extends DynamicFieldConfigBase {
  fieldType: "number";
}

export interface DynamicFieldConfigTextArea extends DynamicFieldConfigBase {
  fieldType: "textarea";
}

export interface DynamicFieldConfigSelect extends DynamicFieldConfigBase {
  fieldType: "select";
  options: Option[];
}
export interface DynamicFieldConfigRadio extends DynamicFieldConfigBase {
  fieldType: "radio";
  options: Option[];
}

export interface DynamicFieldConfigCheckbox extends DynamicFieldConfigBase {
  fieldType: "checkbox";
  options: Option[];
}

export interface DynamicFieldConfigDatePicker extends DynamicFieldConfigBase {
  showTime: boolean;
  format: string;
  fieldType: "datePicker";
}

export interface DynamicFieldConfigSwitch extends DynamicFieldConfigBase {
  fieldType: "switch";
}

export interface DynamicFieldConfigSlider extends DynamicFieldConfigBase {
  fieldType: "slider";
}

export interface DynamicFieldConfigRate extends DynamicFieldConfigBase {
  fieldType: "rate";
  allowHalfRate: boolean;
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

type ChildrenType = DynamicFormFieldConfig | ItemLayout | ItemUI;

export type LayoutBase = {
  category: itemCategory;
  type: LayoutType;
  children: ChildrenType[];
  gap: number;
  padding?: number;
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

export interface UITitle extends UIBase {
  type: UIType;
  title: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface UIText extends UIBase {
  type: UIType;
  text: string;
  style?: {
    type?: "secondary" | "success" | "warning" | "danger";
    disabled?: boolean;
    mark?: boolean;
    strong?: boolean;
  };
}

export interface UILink extends UIBase {
  type: UIType;
  text: string;
  url: string;
}

export interface UIAlert extends UIBase {
  type: UIType;
  description: string;
  message: string;
  alertType: "error" | "success" | "info" | "warning";
  showIcon: boolean;
}

export type ItemUI = UITitle | UIText | UILink | UIAlert;
