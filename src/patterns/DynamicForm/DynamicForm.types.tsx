// import { FormEvent } from "react";
// import * as yup from "yup"
import { DynamicFormInputConfig } from "../DynamicInput/DynamicInput.types";

export interface DynamicFormOutput {
  name: string;
  age: number;
  email: string;
  phone: string;
  gender: string;
  country: string;
  human: string;
  preferredMeals: string[];
}

export type DynamicFormConfiguration = {
  heading: string;
  inputsConfig: DynamicFormInputConfig[];
  onSubmit: (data: DynamicFormOutput) => void;
};

export type RuleValidation = {
  fieldName: string;
  minNumber?: number;
  maxNumber?: number;
  pattern?: RegExp;
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
