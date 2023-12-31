import {
  FieldElement,
  UseFormClearErrors,
  UseFormResetField,
} from "react-hook-form";

type Customize<T, R> = Omit<T, keyof R> & R; // Check this line

// type BaseInput = {
//   type: string;
// };

// type SelectInput = Modify<
//   BaseInput,
//   {
//     type: number;
//     options: number;
//   }
// >;

// export const field: SelectInput = {
//   type: 1,
//   options: 1,
// };

type itemCategory = "field" | "layout" | "UI" | "form";
/*
**********************************************************
                    Category: Field
**********************************************************
*/

// fieldLabel is used for Error Messages translation
type FieldValidationField = {
  field: SchemaName;
  fieldLabel: string;
};

export type FieldValidation = {
  type: string;
  date?: string;
  fields?: FieldValidationField[];
  pattern?: RegExp;
  minimum?: number;
  maximum?: number;
  requiredConditions?: Rule[];
};

export type SchemaName =
  | "urgent_tag"
  | "alert_form"
  | "note_form"
  | "patient_name"
  | "new_patient.show_add_patient"
  | "show_add_patient"
  | "switch_input_method"
  | "note_title"
  | "doctor"
  | "notified_doctor"
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
  | "note_content"
  | "diagnostic_fees"
  | "collected_diagnostic_fees"
  | "collected_diagnostic_fees_options"
  | "collected_diagnostic_fees_subtype"
  | "next_invoice_diagnostic_fees"
  | "reminder_before"
  | "reminder_before_interval"
  | "new_patient.id"
  | "new_patient.first_name"
  | "new_patient.last_name"
  | "new_patient.phone"
  | "new_patient.secondary_phone"
  | "new_patient.country"
  | "new_patient.birthDate"
  | "new_patient.age"
  | "new_patient.switch_date_age"
  | "new_patient.switch_date_age"
  | "new_patient.title"
  | "new_patient.gender"
  | "new_patient.email"
  | "new_patient.address"
  | "new_patient.assigned_practitioner"
  | "new_patient.price_list_group"
  | "new_patient.patient_tags"
  | "new_patient.martial_status"
  | "new_patient.job"
  | "new_patient.nationality"
  | "new_patient.tax"
  | "new_patient.national_id"
  | "new_patient.patient_details"
  | "new_patient.insurance_company"
  | "new_patient.show_add_insurance_company"
  | "new_patient.new_insurance_company.name"
  | "new_patient.new_insurance_company.phone"
  | "new_patient.new_insurance_company.limit"
  | "new_patient.new_insurance_company.isUnlimited"
  | "new_patient.new_insurance_company.discount"
  | "new_patient.new_insurance_company.fullDiscount"
  | "new_patient.new_insurance_company.type"
  | "new_patient.new_insurance_company.group"
  | "new_patient.new_insurance_company.crt"
  | "new_patient.new_insurance_company.expiryDate"
  | "new_patient.new_insurance_company.startMonth"
  | "new_patient.new_insurance_company.requireApproval"
  | "new_patient.referral_source"
  | "new_patient.referral_details"
  | "new_patient.referral_user"
  | "new_patient.referral_patient"
  | "new_patient.emergency_first_name"
  | "new_patient.emergency_last_name"
  | "new_patient.emergency_phone"
  | "new_patient.emergency_secondary_phone"
  | "new_patient.emergency_address"
  | "new_patient.emergency_relationship"
  | "new_patient_first_name";

type fieldTypeValues =
  | "text"
  | "number"
  | "select"
  | "datePicker"
  | "timePicker"
  | "textarea"
  | "radio"
  | "switch"
  | "checkbox"
  | "dualField";

type DateLimitRule = {
  status: string;
  date: string;
};

export type Option = {
  label: string;
  value: string;
};

export type Rule = {
  field: string;
  value: string | number | boolean;
};

export type CustomRuleFields = string | number | boolean;

type ItemField = {
  category: itemCategory;
  id: string;
  testId: string;
  fieldType: fieldTypeValues;
  name: SchemaName;
  label?: string;
  placeholder?: string;
  validation: FieldValidation[];
  status?: "error";
  clearErrors?: UseFormClearErrors<{
    [x: string]: unknown;
    [x: number]: unknown;
  }>;
  visibility?: Rule[];
  disability?: Rule[];
  errorTransKey?: string;
  flex?: number;
  prefix?: string;
  suffix?: string;
  emptyFields?: SchemaName[];
};

export type FieldTextT = Customize<
  ItemField,
  {
    fieldType: "text";
    defaultValue?: string;
  }
>;
export type FieldNumberT = Customize<
  ItemField,
  {
    fieldType: "number";
    defaultValue?: number;
  }
>;
export type FieldSelectT = Customize<
  ItemField,
  {
    fieldType: "select";
    defaultValue?: string;
    options: Option[];
  }
>;
export type FieldRadioT = Customize<
  ItemField,
  {
    fieldType: "radio";
    defaultValue?: string;
    options: Option[];
  }
>;
export type FieldDateT = Customize<
  ItemField,
  {
    fieldType: "datePicker";
    format: string;
    defaultValue?: string;
    dateLimit?: DateLimitRule;
  }
>;
export type FieldTimeT = Customize<
  ItemField,
  {
    fieldType: "timePicker";
    use12Hours: boolean;
    format: string;
    defaultValue?: string;
  }
>;

export type FieldTextAreaT = Customize<
  ItemField,
  {
    fieldType: "textarea";
    defaultValue?: string;
    maxLength?: number;
    showCount: boolean;
  }
>;

export type FieldSwitchT = Customize<
  ItemField,
  {
    fieldType: "switch";
    checkedChildren: string;
    unCheckedChildren: string;
    defaultChecked: boolean;
  }
>;

export type FieldCheckboxT = Customize<
  ItemField,
  {
    fieldType: "checkbox";
  }
>;

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

export interface FieldCheckbox extends ItemField {
  fieldType: "checkbox";
  defaultChecked: boolean;
}

export interface FieldDual extends ItemField {
  fieldType: "dualField";
  fieldsOptions: FormFieldConfig[];
}

export type FormFieldConfig =
  | FieldText
  | FieldNumber
  | FieldSelect
  | FieldRadio
  | FieldDate
  | FieldTime
  | FieldSwitch
  | FieldCheckbox
  | FieldTextArea
  | FieldDual;

// properties not added for form configuration and used within the field component
export type FieldComponentProps = {
  onChange: (value: FieldElement["value"]) => void;
  isDisabled: boolean;
  value: unknown;
  resetField?: UseFormResetField<{
    [x: string]: unknown;
    [x: number]: unknown;
  }>;
  visibilityFields?: CustomRuleFields[];
  disabilityFields?: CustomRuleFields[];
};

export type FieldTextComponentProps = FieldText & FieldComponentProps;
export type FieldNumberComponentProps = FieldNumber & FieldComponentProps;
export type FieldTextAreaComponentProps = FieldTextArea & FieldComponentProps;
export type FieldSelectComponentProps = FieldSelect & FieldComponentProps;
export type FieldRadioComponentProps = FieldRadio & FieldComponentProps;
export type FieldDateComponentProps = FieldDate & FieldComponentProps;
export type FieldTimeComponentProps = FieldTime & FieldComponentProps;
export type FieldSwitchComponentProps = FieldSwitch & FieldComponentProps;
export type FieldCheckboxComponentProps = FieldCheckbox & FieldComponentProps;
export type FieldDualComponentProps = FieldDual & FieldComponentProps;

export type FieldConfig =
  | FieldTextComponentProps
  | FieldNumberComponentProps
  | FieldTextAreaComponentProps
  | FieldSelectComponentProps
  | FieldRadioComponentProps
  | FieldDateComponentProps
  | FieldTimeComponentProps
  | FieldSwitchComponentProps
  | FieldCheckboxComponentProps
  | FieldDualComponentProps;

/*
**********************************************************
                    Category: Layout
**********************************************************
*/

type LayoutType = "hStack" | "box";

type ChildrenType = FormFieldConfig | ItemLayout | ItemUI | ItemForm;

export type LayoutBase = {
  category: itemCategory;
  type: LayoutType;
  children: ChildrenType[];
  gap: number;
  align?:
    | "top"
    | "middle"
    | "bottom"
    | "stretch"
    | {
        [key in "xs" | "sm" | "md" | "lg" | "xl" | "xxl"]:
          | "top"
          | "middle"
          | "bottom"
          | "stretch";
      };
  justify?:
    | "start"
    | "end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | Partial<{
        [key in "xs" | "sm" | "md" | "lg" | "xl" | "xxl"]:
          | "start"
          | "end"
          | "center"
          | "space-around"
          | "space-between"
          | "space-evenly";
      }>;
  padding?: number;
  visibility?: Rule[];
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
                    Category: Form
**********************************************************
*/

export type ItemForm = {
  category: itemCategory;
  name: string;
  children: ChildrenType[];
  visibility?: Rule[];
};

/*
**********************************************************
                      Category: UI
**********************************************************
*/

type UIType = "title" | "text" | "link" | "alert";

export type UIBase = {
  category: itemCategory;
  type: UIType;
  visibility?: Rule[];
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

export type Item = FormFieldConfig | ItemLayout | ItemUI | ItemForm;
