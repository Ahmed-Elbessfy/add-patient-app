import { FieldElement } from "react-hook-form";

type itemCategory = "field" | "layout" | "UI";
/*
**********************************************************
                    Category: Field
**********************************************************
*/

type fieldTypeValues =
  | "text"
  | "select"
  | "date"
  | "time"
  | "textarea"
  | "switch";
interface ItemField {
  category: itemCategory;
  id: string;
  testId: string;
  fieldType: fieldTypeValues;
  name: string;
  label?: string;
  placeholder?: string;
}

type Option = {
  label: string;
  value: string;
};

export interface FieldText extends ItemField {
  fieldType: "text";
}

export interface FieldSelect extends ItemField {
  fieldType: "select";
  options: Option[];
}

export interface FieldDate extends ItemField {
  fieldType: "date";
  format: string;
  defaultValue: string;
}

export interface FieldTime extends ItemField {
  fieldType: "time";
  use12Hours: boolean;
  format: string;
  defaultValue: string;
}

export interface FieldTextArea extends ItemField {
  fieldType: "textarea";
}

export interface FieldSwitch extends ItemField {
  fieldType: "switch";
}

export type FormFieldConfig =
  | FieldText
  | FieldSelect
  | FieldDate
  | FieldTime
  | FieldSwitch
  | FieldTextArea;

type FieldOnChange = {
  onChange: (value: FieldElement["value"]) => void;
};

export type FieldConfig = FormFieldConfig & FieldOnChange;

/*
**********************************************************
                    Category: Layout
**********************************************************
*/

type LayoutType = "hStack" | "box";

type ChildrenType = FormFieldConfig | ItemLayout | ItemUI;

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

export type Item = FieldConfig | ItemLayout | ItemUI;
