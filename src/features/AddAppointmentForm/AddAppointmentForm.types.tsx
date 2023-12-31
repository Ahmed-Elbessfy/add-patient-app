import type { Dayjs } from "dayjs";
import {
  Item,
  SchemaName,
} from "../AddAppointmentFields/AddAppointmentInputs.type";

export interface AddAppointmentFormProps {
  fieldsConfig: Item[];
  onSubmit: (data) => void;
}

export type ValidationRule = {
  fieldName: string;
  date?: string;
  targetField?: string;
};

export type DefaultValueObjectFormat = Record<
  SchemaName | string, // string is added only for the dynamic default values object build since name or schema name in nested object contains "." which we use to separate name and build a nested object
  string | number | boolean | undefined | Dayjs
>;
