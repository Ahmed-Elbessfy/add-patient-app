import { FormFieldConfig } from "../AddAppointmentFields/AddAppointmentInputs.type";

export type DualFieldConfig = {
  category: "dualField";
  testId: string;
  fieldsConfig: FormFieldConfig[];
};

export type DualFieldComponentProps = DualFieldConfig & {
  renderFieldItems: (fieldConfig: FormFieldConfig) => JSX.Element;
};
