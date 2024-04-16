import {
  ItemField,
  Customize,
  CustomFieldConfig,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export type FieldUploadFileT = Customize<
  ItemField,
  {
    fieldType: "uploadFile";
    defaultValue?: string;
  }
>;

/**
 * Represents the configuration for a text field in a form configuration object.
 * Extends the base ItemField type to extend field items properties and adding custom properties specific to text fields.
 *
 * @interface FieldUploadFile
 * @extends {ItemField}
 */
export interface FieldUploadFile extends ItemField {
  fieldType: "uploadFile"; // Type of the field (text)
  acceptedFormats: string[]; // set accepted files format
  sizeLimit: number; // limit of files size in mega
  maxFileCount: number; // determine how many files allowed to be uploaded.
}

/**
 * Represents the custom field configuration for a text field that is used to determine FieldUploadFile component expected props.
 * Inherits properties from GeneralFieldConfig and includes if needed, additional properties specific to text fields.
 *
 * @interface FieldUploadFileComponentProps
 * @extends {CustomFieldConfig}
 */
export type FieldUploadFileComponentProps = {
  acceptedFormats: string[]; // set accepted files format
  sizeLimit: number; // limit of files size in mega
  maxFileCount: number; // determine how many files allowed to be uploaded.
} & CustomFieldConfig;
