// import { FormEvent } from "react";
// import * as yup from "yup"
import { DynamicFormInputConfig } from "../DynamicInput/DynamicInput.types";

export interface DynamicFormOutput {
  name: string;
  email: string;
  age: number;
  gender: string;
  phone: string;
  country: string;
  description?: string;
  gamer: string;
  preferredMeals: string[];
  datePicker: string;
  rangePicker: string[];
  available: boolean;
  how_much: number;
  rate: number;
}

export type DynamicFormConfiguration = {
  heading: string;
  inputsConfig: DynamicFormInputConfig[];
  onSubmit: (data: DynamicFormOutput) => void;
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
