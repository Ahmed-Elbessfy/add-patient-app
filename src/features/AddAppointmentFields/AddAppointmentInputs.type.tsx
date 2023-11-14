import { FieldElement } from "react-hook-form";

type itemCategory = "field" | "layout" | "UI";
/*
**********************************************************
                    Category: Field
**********************************************************
*/

type FieldValidation = {
  type: string;
  required: boolean;
};

type SchemaName =
  | "patient_name"
  | "switch_input_method"
  | "doctor"
  | "room"
  | "status"
  | "day"
  | "start_time"
  | "end_time"
  | "type"
  | "subtype"
  | "created"
  | "assistants"
  | "description"
  | "diagnostic_fees"
  | "collected_diagnostic_fees"
  | "collected_diagnostic_fees_options"
  | "collected_diagnostic_fees_subtype"
  | "reminder_before"
  | "reminder_before_interval";

type fieldTypeValues =
  | "text"
  | "number"
  | "select"
  | "datePicker"
  | "timePicker"
  | "textarea"
  | "radio"
  | "switch";
interface ItemField {
  category: itemCategory;
  id: string;
  testId: string;
  fieldType: fieldTypeValues;
  name: string;
  schemaName: SchemaName;
  label?: string;
  placeholder?: string;
  validation: FieldValidation[];
}

type Option = {
  label: string;
  value: string;
};

export interface FieldText extends ItemField {
  fieldType: "text";
}

export interface FieldNumber extends ItemField {
  fieldType: "number";
  defaultValue?: number;
}

export interface FieldSelect extends ItemField {
  fieldType: "select";
  options: Option[];
  defaultValue?: string;
}

export interface FieldRadio extends ItemField {
  fieldType: "radio";
  options: Option[];
  defaultValue?: string;
}

export interface FieldDate extends ItemField {
  fieldType: "datePicker";
  format: string;
  defaultValue?: string;
}

export interface FieldTime extends ItemField {
  fieldType: "timePicker";
  use12Hours: boolean;
  format: string;
  defaultValue?: string;
}

export interface FieldTextArea extends ItemField {
  fieldType: "textarea";
}

export interface FieldSwitch extends ItemField {
  fieldType: "switch";
  checkedChildren: string;
  unCheckedChildren: string;
  defaultChecked: boolean;
}

export type FormFieldConfig =
  | FieldText
  | FieldNumber
  | FieldSelect
  | FieldRadio
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

export type Item = FormFieldConfig | ItemLayout | ItemUI;
