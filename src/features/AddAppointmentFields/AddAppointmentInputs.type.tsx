import { Control, FieldElement } from "react-hook-form";

// import Fields types for Field Union - FormFieldConfig
import { FieldText } from "../TextField/TextField.type";
import { FieldTextArea } from "../TextAreaField/TextAreaField.type";
import { FieldNumber } from "../NumberField/NumberField.type";
import { FieldRadio } from "../RadioField/RadioField.type";
import { FieldSelect } from "../SelectField/SelectField.type";
import { FieldSwitch } from "../SwitchField/SwitchField.type";
import { FieldDate } from "../DateField/DateField.type";
import { FieldTime } from "../TimeField/TimeField.type";
import { FieldCheckbox } from "../CheckboxField/CheckboxField.type";
import { FieldCountry } from "../CountryField/CountryField.type";
import { FieldDual } from "../DualField/DualField.type";
import { FieldPhone } from "../PhoneField/PhoneField.type";
import { FieldID } from "../IDField/IDField.type";

// Utility type to customize a type by excluding certain properties
// this was for approaching another type definition method and can be used later
export type Customize<T, R> = Omit<T, keyof R> & R;

// ITEMS Possible categories
// "field" | "layout" | "UI" | "form"

/*
**********************************************************
                    Category: Field
**********************************************************
*/

// Validation field definition used for fields validation based on other fields' values
type FieldValidationField = {
  field: string; // Name of field value that its value is used for validation
  fieldLabel: string; // Used for error messages translation
};

// Validation Rules type
export type FieldValidation = {
  type:
    | "required"
    | "requiredIf"
    | "earlier_than"
    | "later_than"
    | "time_earlier_than"
    | "time_later_than"
    | "hasPattern"
    | "minimum"
    | "maximum"
    | "is_valid_phone"; // Type of validation (e.g., 'required', 'requiredIf', 'hasPattern')
  date?: string; // Limit date for validation
  fields?: FieldValidationField[]; // Fields that their values is used for validation of current field
  pattern?: RegExp; // Regular expression for pattern validation
  minimum?: number; // Minimum value for number validation
  maximum?: number; // Maximum value for number validation
  requiredConditions?: Rule[]; // Fields that, based on its values, determine if the current field is required or not (used with 'requiredIf' rule)
};

// Available field types
type fieldTypeValues =
  | "text"
  | "idField"
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
  label: string; // Text rendered to user (text property matches AntD multi select options)
  value: string; // Value of option
};

// Type to describe a field and possible value of it
// Used for visibility rules, disability rules, conditions of conditional validation
export type Rule = {
  field: string; // Field name need to get its value
  value: string | number | boolean; // Value that, if matched, a functionality applies or does not
};

// Possible types of form field values
// it is possible to need to add Dayjs in the future but I did not meet a case need Dayjs
export type CustomRuleFields = string | number | boolean;

// General FIELD component props
// should receive : Category, fieldType, name, id ,testId, label, placeholder, validation, visibility, disability, defaultValue, defaultChecked, checkedChildren, unCheckedChildren, suffix, prefix
export type ItemField = {
  category: "field"; // Determine item is a field category
  id: string; // Field id for selecting and, in some cases, to attach label to input
  testId: string; // Used to select items for testing
  fieldType: fieldTypeValues; // Determine which field type to render
  name: string; // Name used to register field value to form state
  label?: string; // Label for all fields and text for checkbox fields
  placeholder?: string;
  validation: FieldValidation[]; // Validation rules
  visibility?: Rule[] | boolean; // Visibility rules or get a permanent value
  disability?: Rule[] | boolean; // Disability rules or allow permanent disability
  prefix?: string; // Text or icon added before field (used with addonBefore)N
  suffix?: string; // Text or icon added after field (used with addonAfter)
  useDataSource?: boolean;
  // Design Values
  xs?: number; // Used for default width at screens less than MEDIUM size
  md?: number; // Used for width at screens wider than MEDIUM size
};

// Union to join possible field types
// Used for controlling types of configuration form object
// Used for Form component expected configuration object as props
// Form component functionality : render item based on category - apply visibility & disability rules - build default values & Schema -  submit form state data
// to fullfil this requirement, components needs properties from each Field type based on rendered type
export type FormFieldConfig =
  | FieldText
  | FieldID
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
// Should receive: fieldType, name, id, testid, label, placeholder, isDisabled, suffix, prefix
// General Field functionality: registers field value to form state - render Custom Field type based on field value - get current field value and onChange function to register field value if changed
// to fullfil this requirement, components needs following properties
export type GeneralFieldConfig = Omit<
  FormFieldConfig,
  // These props is not required for general field layer to fullfil its functionality
  "category" | "visibility" | "disability" | "validation" | "defaultValue"
> & {
  control: Control<{
    [x: string]: unknown;
    [x: number]: unknown;
  }>; // Passed from Form component to register current field value
  isDisabled: boolean; // To set item is disabled or not, needs this property to be at custom field level. it get set at Form Component with help of "watch" of useForm so it gets passed to General field then to Custom Field.
};

// Custom Field Component props
// Should receive : label, placeholder, isDisabled, suffix, prefix, value, onChange, status
// Custom Field functionality: render field value - submit new value if changed to onChanged function - control AntD status to provide visual indicator if error
export type CustomFieldConfig = Omit<GeneralFieldConfig, "name" | "control"> & {
  value: unknown; // Current field value at form state
  onChange: (value: FieldElement["value"]) => void; // Function to return new value. In most cases, it accepts onChange of field object to register new value to form state
  status?: "error"; // In case of error, render error custom style
};

/*
**********************************************************
                    Category: Layout
**********************************************************
*/

// Layout is a wrapper of fields

// Possible Layout Types
type LayoutType = "hStack" | "box" | "fieldGroup";

// Layout possible children
type ChildrenType =
  | FormFieldConfig // Fields items
  | ItemLayout // Nested layout items
  | ItemUI // Non functional items
  | ItemForm; // Nested form items

export type LayoutBase = {
  category: "layout"; // Determine item is layout category
  type: LayoutType; // Determine which layout type to render
  // Design Values
  align?: // Vertical alignment and based on screens size
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
  justify?: // Horizontal alignment and based on screens size
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
  padding?: number; // Adding additional padding
  visibility?: Rule[]; // Visibility rules
};

export interface LayoutHStack extends LayoutBase {
  type: "hStack";
  children: ChildrenType[]; // Accepted children types
}

export interface LayoutBox extends LayoutBase {
  type: "box";
  children: ChildrenType[]; // Accepted children types
  // padding: number;
}

export interface LayoutFieldGroup extends LayoutBase {
  type: "fieldGroup";
  children: FormFieldConfig[];
  xs: number;
  md: number;
}

// Union to join possible layout types
export type ItemLayout = LayoutHStack | LayoutBox | LayoutFieldGroup;

/*
**********************************************************
                    Category: Form
**********************************************************
*/

export type ItemForm = {
  category: "form"; // Determine item is form category
  name: string; // Name of nested object for nested form used for form state, default values, and schema structures
  children: ChildrenType[]; // Accepted children types
  visibility?: Rule[]; // Visibility rules
  // Design Values
  align?: // Vertical alignment and based on screens size
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
  justify?: // Horizontal alignment and based on screens size
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
  category: "UI"; // Determine item is UI category
  type: UIType; // Determine which UI type to render
  visibility?: Rule[]; // Visibility rules
};

// Title with horizontal border
export interface UIDivider extends UIBase {
  type: "divider";
  direction: "vertical" | "horizontal"; // Direction of hHR
  orientation: "left" | "right" | "center"; // Location of text
  text: string; // Content
}

// Headings
export interface UITitle extends UIBase {
  type: "title";
  title: string; // Content
  level: 1 | 2 | 3 | 4 | 5; // Font size based on AntD configuration
}

export interface UIText extends UIBase {
  type: "text";
  text: string; // Content
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
  text: string; // Content
  url: string; // Target link
}

// Alerts
export interface UIAlert extends UIBase {
  type: "alert";
  message: string; // Main content - alert title
  description: string; // Additional content if needed - alert text
  alertType: "error" | "success" | "info" | "warning"; // Type for styling
  showIcon: boolean;
}

// Union to join UI types
export type ItemUI = UITitle | UIText | UILink | UIAlert | UIDivider;

// Union to join all possible items types
export type Item = FormFieldConfig | ItemLayout | ItemUI | ItemForm;
