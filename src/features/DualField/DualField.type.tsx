import {
  FormFieldConfig,
  GeneralFieldConfig,
  ItemField,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

/**
 * Dual field used when there are a 2 fields for the same field value and need to switch render between them
 **/

/**
 * Represents the configuration for a dual field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to dual fields.
 *
 * @interface FieldDual
 * @extends {ItemField}
 */
export interface FieldDual extends ItemField {
  fieldType: "dualField"; // Type of the field (dual field)
  fieldsConfig: FormFieldConfig[]; // fields to switch between them
}

/**
 * Represents the custom field configuration for a dual field that is used to determine FieldDual component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to dual fields.
 *
 * @interface FieldDualComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldDualComponentProps = {
  fieldsConfig: FormFieldConfig[]; // fields to switch between them
} & GeneralFieldConfig;
