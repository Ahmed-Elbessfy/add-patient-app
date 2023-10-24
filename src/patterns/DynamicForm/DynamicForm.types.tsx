import { FormEvent } from "react";
import { DynamicInputConfig } from "../DynamicInput/DynamicInput.types";

// interface DSelectOptions {
//   value: string;
//   label: string;
// }

// export interface DInputConfiguration {
//   fieldType?: string; // optional for select input
//   name: string;
//   placeholder: string;
//   label?: string;
//   fieldId: string;
//   multiOptions?: DSelectOptions[]; // for multi options inputs like : Select, Radio, checkbox
//   onChangeEvent: (inputName: string, inputValue: string | number) => void;
// }

export type DynamicFormConfiguration = {
  inputsConfig: DynamicInputConfig[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
