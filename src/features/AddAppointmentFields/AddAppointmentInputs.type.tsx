import { Control, FieldElement } from "react-hook-form";
import {
  FieldText,
  // FieldTextComponentProps,
} from "../TextField/TextField.type";
import {
  FieldTextArea,
  // FieldTextAreaComponentProps,
} from "../TextAreaField/TextAreaField.type";
import {
  FieldNumber,
  // FieldNumberComponentProps,
} from "../NumberField/NumberField.type";
import {
  FieldRadio,
  // FieldRadioComponentProps,
} from "../RadioField/RadioField.type";
import {
  FieldSelect,
  // FieldSelectComponentProps,
} from "../SelectField/SelectField.type";
import {
  FieldSwitch,
  // FieldSwitchComponentProps,
} from "../SwitchField/SwitchField.type";
import {
  FieldDate,
  // FieldDateComponentProps,
} from "../DateField/DateField.type";
import {
  FieldTime,
  // FieldTimeComponentProps,
} from "../TimeField/TimeField.type";
import {
  FieldCheckbox,
  // FieldCheckboxComponentProps,
} from "../CheckboxField/CheckboxField.type";
import {
  FieldCountry,
  // FieldCountryComponentProps,
} from "../CountryField/CountryField.type";
import { FieldDual } from "../DualField/DualField.type";
import {
  FieldPhone,
  // FieldPhoneComponentProps,
} from "../PhoneField/PhoneField.type";

export type Customize<T, R> = Omit<T, keyof R> & R;

// ITEMS Possible categories
// "field" | "layout" | "UI" | "form"

/*
**********************************************************
                    Category: Field
**********************************************************
*/

// Used for fields validation based on other fields values
type FieldValidationField = {
  field: SchemaName; // name of field value that its value is limit of validation
  fieldLabel: string; // used for Error Messages translation
};

// Validation Rules type
export type FieldValidation = {
  type: string; // Type of validation (e.g., 'required', 'requiredIf', 'hasPattern')
  date?: string; // limit date for validation
  fields?: FieldValidationField[]; // fields that their values is limit or used for validation of current field
  pattern?: RegExp; // Regular expression for pattern validation
  minimum?: number; // Minimum value for number validation
  maximum?: number; // Maximum value for number validation
  requiredConditions?: Rule[]; // Fields that based on its values, the current field is required or not - used with requiredIf rule -
};

// Allowed names to be used as Form State props
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
  | "new_patient.dual_birthDate_age"
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

// Available field types
type fieldTypeValues =
  | "text"
  | "phone"
  | "number"
  | "select"
  | "country"
  | "datePicker"
  | "timePicker"
  | "textarea"
  | "radio"
  | "switch"
  | "checkbox"
  | "dualField";

// Options of Select & Radio types
export type Option = {
  label: string; // text rendered to user - text property matches AntD multi select options
  value: string; // value of option
};

// Type to describe a field and possible value of it
// Used for visibility rules, disability rules, conditions of conditional validation
export type Rule = {
  field: string; // field name need to get its value
  value: string | number | boolean; // value that if matched a functionality applies or does not
};

// possible types of form field values
// it is possible to need to add Dayjs in the future but I did not meet a case need Dayjs
export type CustomRuleFields = string | number | boolean;

// General FIELD component props
// should receive : Category, fieldType, name, id ,testId, label, placeholder, validation, visibility, disability, defaultValue, defaultChecked, checkedChildren, unCheckedChildren, suffix, prefix
export type ItemField = {
  category: "field"; // determine item is a field category
  id: string; // field id for selecting and in some cases to attach label to input
  testId: string; // used to select items for testing
  fieldType: fieldTypeValues; // determine which field type to render
  name: SchemaName; // name used to register field value to form state
  label?: string; // label for all field and text for checkbox fields
  placeholder?: string;
  validation: FieldValidation[]; // validation rules
  visibility?: Rule[]; // visibility rules
  disability?: Rule[]; // disability rules
  prefix?: string; // text or icon added before field - used with addonBefore
  suffix?: string; // text or icon added after field - used with addonAfter
  // Design Values
  xs?: number; // used for default width at screens less than MEDIUM size
  md?: number; // used for width at screens wider than MEDIUM size
};

// possible field configuration types
// used for controlling types of configuration form object
// used as Form component expected props
// Form component functionality : render item based on category - apply visibility & disability rules - build default values & Schema -  submit form state data
// to fullfil this requirement, components needs following properties
export type FormFieldConfig =
  | FieldText
  | FieldPhone
  | FieldNumber
  | FieldSelect
  | FieldCountry
  | FieldRadio
  | FieldDate
  | FieldTime
  | FieldSwitch
  | FieldCheckbox
  | FieldTextArea
  | FieldDual;

// General Field Component props
// should receive: fieldType, name, id, testid, label, placeholder, isDisabled, suffix, prefix
// General Field functionality: registers field value to form state - render Custom Field type based on field value - get current field value and onChange function to register field value if changed
// to fullfil this requirement, components needs following properties
export type GeneralFieldConfig = Omit<
  FormFieldConfig,
  // these props is not requirement or needed to general field layer to fullfil its functionality
  "category" | "visibility" | "disability" | "validation" | "defaultValue"
> & {
  control: Control<{
    [x: string]: unknown;
    [x: number]: unknown;
  }>; // passed from Form component to register current field value
  isDisabled: boolean; // to set item is disabled or not, needs this property to be at custom field level. it get set at Form Component with help of "watch" of useForm so it gets passed to General field then to Custom Field.
};

// Custom Field Component props
// should receive : label, placeholder, isDisabled, suffix, prefix, value, onChange, status
// Custom Field functionality: render field value - submit new value if changed to onChanged function - control AntD status to provide visual indicator if error
export type CustomFieldConfig = Omit<GeneralFieldConfig, "name" | "control"> & {
  value: unknown; // current field value at form state
  onChange: (value: FieldElement["value"]) => void; // function to return new value. In most cases, it accepts onChange of field object to register new value to form state
  status?: "error"; // in case of error, render error custom style
};

/*
**********************************************************
                    Category: Layout
**********************************************************
*/

// Layout is a wrapper of fields

// possible Layout Types
type LayoutType = "hStack" | "box";

// layout possible children
type ChildrenType =
  | FormFieldConfig // fields items
  | ItemLayout // nested layout items
  | ItemUI // Non functional items
  | ItemForm; // nested form items

export type LayoutBase = {
  category: "layout"; // determine item is layout category
  type: LayoutType; // determine which layout type to render
  children: ChildrenType[]; // accepted children types
  // Design Values
  align?: // vertical alignment and based on screens size
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
  justify?: // horizontal alignment and based on screens size
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
  padding?: number; // adding additional padding
  visibility?: Rule[]; // visibility rules
};

export interface LayoutHStack extends LayoutBase {
  type: "hStack";
}

export interface LayoutBox extends LayoutBase {
  type: "box";
  // padding: number;
}

// Union to join possible layout types
export type ItemLayout = LayoutHStack | LayoutBox;

/*
**********************************************************
                    Category: Form
**********************************************************
*/

export type ItemForm = {
  category: "form"; // determine item is form category
  name: string; // name of nested object for nested form used for form state, default values and schema structures
  children: ChildrenType[]; // accepted children types
  visibility?: Rule[]; // visibility rules
  // Design Values
  align?: // vertical alignment and based on screens size
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
  justify?: // horizontal alignment and based on screens size
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
};

/*
**********************************************************
                      Category: UI
**********************************************************
*/

type UIType = "title" | "text" | "link" | "alert" | "divider";

export type UIBase = {
  category: "UI"; // determine item is UI category
  type: UIType; // determine which UI type to render
  visibility?: Rule[]; // visibility rules
};

// Title with horizontal border
export interface UIDivider extends UIBase {
  type: "divider";
  direction: "vertical" | "horizontal"; // direction of hHR
  orientation: "left" | "right" | "center"; // location of text
  text: string; // content
}

// Headings
export interface UITitle extends UIBase {
  type: "title";
  title: string; // content
  level: 1 | 2 | 3 | 4 | 5; // font size based on AntD configuration
}

export interface UIText extends UIBase {
  type: "text";
  text: string; // content
  style?: {
    type?: "secondary" | "success" | "warning" | "danger";
    disabled?: boolean;
    mark?: boolean;
    strong?: boolean;
  };
}

// links
export interface UILink extends UIBase {
  type: "link";
  text: string; // content
  url: string; // target link
}

// Alerts
export interface UIAlert extends UIBase {
  type: "alert";
  message: string; // main content - alert title
  description: string; // additional content if needed - alert text
  alertType: "error" | "success" | "info" | "warning"; // type for styling
  showIcon: boolean;
}

// Union to join UI types
export type ItemUI = UITitle | UIText | UILink | UIAlert | UIDivider;

// Union to join all possible items types
export type Item = FormFieldConfig | ItemLayout | ItemUI | ItemForm;
