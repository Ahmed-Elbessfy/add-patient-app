import type { Dayjs } from "dayjs";
import { Item } from "../AddAppointmentFields/AddAppointmentInputs.type";

export type DataSourceProperty = {
  [x: string]:
    | { [x: string]: string | boolean | number }[]
    | string
    | string[]
    | boolean
    | ((x: string) => { value: string; label: string }[]);
};

export type DataSource = {
  [x: string]: DataSourceProperty;
};

export type Actions = {
  [x: string]: {
    [x: string]: //
    // actions that requires a parameter
    | ((
          x: string
        ) =>
          | string
          | string[]
          | number
          | boolean
          | { value: string; label: string }[])
      //
      // actions that does not require a parameter
      | (() =>
          | string
          | string[]
          | number
          | boolean
          | { value: string; label: string }[]);
  };
};

export interface AddAppointmentFormProps {
  fieldsConfig: Item[];
  onSubmit: (data: unknown) => void;
  dataSourceObject: DataSource;
  actionsObject: Actions;
}

export type DefaultValueObjectFormat = Record<
  string, // string is added only for the dynamic default values object build since name or schema name in nested object contains "." which we use to separate name and build a nested object
  string | number | boolean | undefined | Dayjs
>;
