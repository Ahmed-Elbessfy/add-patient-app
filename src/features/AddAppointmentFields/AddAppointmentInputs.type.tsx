import { FieldElement, UseFormClearErrors } from "react-hook-form";
import {
  FieldText,
  FieldTextComponentProps,
} from "../TextField/TextField.type";
import {
  FieldTextArea,
  FieldTextAreaComponentProps,
} from "../TextAreaField/TextAreaField.type";
import {
  FieldNumber,
  FieldNumberComponentProps,
} from "../NumberField/NumberField.type";
import {
  FieldRadio,
  FieldRadioComponentProps,
} from "../RadioField/RadioField.type";
import {
  FieldSelect,
  FieldSelectComponentProps,
} from "../SelectField/SelectField.type";
import {
  FieldSwitch,
  FieldSwitchComponentProps,
} from "../SwitchField/SwitchField.type";
import {
  FieldDate,
  FieldDateComponentProps,
} from "../DateField/DateField.type";
import {
  FieldTime,
  FieldTimeComponentProps,
} from "../TimeField/TimeField.type";
import {
  FieldCheckbox,
  FieldCheckboxComponentProps,
} from "../CheckboxField/CheckboxField.type";
import { DualFieldConfig } from "../DualField/DualField.type";

export type Customize<T, R> = Omit<T, keyof R> & R;

type ItemCategory = "field" | "dualField" | "layout" | "UI" | "form";

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
  | "new_patient.phone_key"
  | "new_patient.phone_number"
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

export type Option = {
  label: string;
  value: string;
};

export type Rule = {
  field: string;
  value: string | number | boolean;
};

export type CustomRuleFields = string | number | boolean;

export type ItemField = {
  category: ItemCategory;
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
};

export type FormFieldConfig =
  | FieldText
  | FieldNumber
  | FieldSelect
  | FieldRadio
  | FieldDate
  | FieldTime
  | FieldSwitch
  | FieldCheckbox
  | FieldTextArea;

// properties not added for form configuration and used within the field component
export type FieldComponentProps = {
  onChange: (value: FieldElement["value"]) => void;
  isDisabled: boolean;
  value: unknown;
};

export type FieldConfig =
  | FieldTextComponentProps
  | FieldNumberComponentProps
  | FieldTextAreaComponentProps
  | FieldSelectComponentProps
  | FieldRadioComponentProps
  | FieldDateComponentProps
  | FieldTimeComponentProps
  | FieldSwitchComponentProps
  | FieldCheckboxComponentProps;

/*
  **********************************************************
                      Category: Combine Field
  **********************************************************
  */

/*
  Notes:
  - combine field is a field used when we have 2 - and only 2 - inputs that affecting the same form state value. For example: Phone number needs a key and actual number
  - form state name is the name in combine field name not at the fieldsConfig fields
  - combine field value is separated with "-" and this is useful to know on modification of its value
  - So far, combine field is configured to have 2 TEXT fields only as fieldsConfig. If it is required, we can expand its usage to use other field type later upon request
  */

// export type CombineFieldConfig = {
//   category: ItemCategory;
//   fieldType: string;
//   name: SchemaName;
//   id: string;
//   testId: string;
//   label: string;
//   fieldsConfig: FieldText[];
//   validation: FieldValidation[];
// };

// export type CombineFieldComponentProps = CombineFieldConfig & {
//   renderFieldItems: (fieldConfig: FieldText) => JSX.Element;
//   control: Control<{ [x: string]: unknown; [x: number]: unknown }, unknown>;
// };

/*
**********************************************************
                    Category: Layout
**********************************************************
*/

type LayoutType = "hStack" | "box";

type ChildrenType =
  | FormFieldConfig
  | DualFieldConfig
  | ItemLayout
  | ItemUI
  | ItemForm;

export type LayoutBase = {
  category: ItemCategory;
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
  category: ItemCategory;
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
  category: ItemCategory;
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

export type Item =
  | FormFieldConfig
  | DualFieldConfig
  | ItemLayout
  | ItemUI
  | ItemForm;
