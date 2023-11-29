import { FieldElement, UseFormClearErrors } from "react-hook-form";

type itemCategory = "field" | "layout" | "UI";
/*
**********************************************************
                    Category: Field
**********************************************************
*/

type FieldValidation = {
  type: string;
  required?: boolean;
  date?: string;
  fields?: SchemaName[];
  defaultErrorMsg?: string;
  customErrorMsg?: string;
  useCustomErrorMsg?: boolean;
  pattern?: RegExp;
  minimum?: number;
  maximum?: number;
};

export type SchemaName =
  | "urgent_tag"
  | "alert_form"
  | "note_form"
  | "test_patient_name"
  | "patient_name"
  | "switch_input_method"
  | "doctor"
  | "room"
  | "status"
  | "day"
  | "start_time"
  | "end_time"
  | "alert_content"
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
  | "reminder_before_interval"
  | "new_patient_id"
  | "new_patient_first_name"
  | "new_patient_last_name"
  | "new_patient_phone"
  | "new_patient_secondary_phone"
  | "new_patient_country"
  | "new_patient_birthDate"
  | "new_patient_age"
  | "new_patient_switch_date_age"
  | "new_patient_title"
  | "new_patient_gender"
  | "new_patient_email"
  | "new_patient_address"
  | "new_patient_assigned_practitioner"
  | "new_patient_price_list_group"
  | "new_patient_patient_tags"
  | "new_patient_martial_status"
  | "new_patient_job"
  | "new_patient_nationality"
  | "new_patient_tax"
  | "new_patient_national_id"
  | "new_patient_patient_details"
  | "new_patient_insurance_company"
  | "new_patient_referral_source"
  | "new_patient_referral_details"
  | "new_patient_referral_user"
  | "new_patient_referral_patient"
  | "new_patient_emergency_first_name"
  | "new_patient_emergency_last_name"
  | "new_patient_emergency_phone"
  | "new_patient_emergency_secondary_phone"
  | "new_patient_emergency_address"
  | "new_patient_emergency_relationship";

type fieldTypeValues =
  | "text"
  | "number"
  | "select"
  | "datePicker"
  | "timePicker"
  | "textarea"
  | "radio"
  | "switch";

type DateLimitRule = {
  status: string;
  date: string;
};

type Option = {
  label: string;
  value: string;
};

type visibilityRule = {
  field: SchemaName;
  value: string | number | boolean;
};

type disabilityRule = {
  field: SchemaName;
  value: string | number | boolean;
};

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
  status?: "error";
  clearErrors?: UseFormClearErrors<{
    [x: string]: unknown;
    [x: number]: unknown;
  }>;
  visibility?: visibilityRule[];
  disability?: disabilityRule[];
  errorTransKey?: string;
}

export interface FieldText extends ItemField {
  fieldType: "text";
  defaultValue?: string;
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
  dateLimit?: DateLimitRule;
}

export interface FieldTime extends ItemField {
  fieldType: "timePicker";
  use12Hours: boolean;
  format: string;
  defaultValue?: string;
}

export interface FieldTextArea extends ItemField {
  fieldType: "textarea";
  defaultValue?: string;
  maxLength?: number;
  showCount: boolean;
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

type FieldDisability = {
  isDisabled: boolean;
};

export type FieldConfig = FormFieldConfig & FieldOnChange & FieldDisability;

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
  visibility?: visibilityRule[];
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
  visibility?: visibilityRule[];
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
