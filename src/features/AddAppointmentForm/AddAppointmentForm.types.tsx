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
  SchemaName,
  string | number | boolean | undefined | Dayjs
>;
