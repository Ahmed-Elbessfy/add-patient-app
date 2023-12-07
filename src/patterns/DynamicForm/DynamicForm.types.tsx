// import { FormEvent } from "react";
// import * as yup from "yup"
import {
  DynamicFormFieldConfig,
  ItemLayout,
  ItemUI,
} from "../DynamicInput/DynamicInput.types";

export interface DynamicFormOutput {
  
  [x: string]: unknown;
  [x: number]: unknown;
}

export type InputConfigOptions = DynamicFormFieldConfig | ItemLayout | ItemUI;

export type DynamicFormConfiguration = {
  heading: string;
  inputsConfig: InputConfigOptions[];
  onSubmit: (data: DynamicFormOutput) => void;
};

export type RuleValidation = {
  fieldName: string;
  minNumber?: number;
  maxNumber?: number;
  pattern?: RegExp;
  date?: string;
};
// outputFormat: DynamicFormOutput;
// schema:yup.ObjectSchema<{
//   name: string;
//   email: string;
//   age: number;
//   gender: string;
//   country: string;
//   phone: string;
//   description: string | undefined;
//   gamer: string;
//   preferredMeals: string[] | undefined;
//   datePicker: string;
//   rangePicker: string[] | undefined;
//   available: NonNullable<...>;
//   how_much: number;
//   rate: number;
// }
