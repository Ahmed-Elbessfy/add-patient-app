import { FormEvent } from "react";
import { DynamicFormInputConfigurationInterface } from "../DynamicFormInput/DynamicFormInput.constants";

export interface NewPatientFormInterface {
  newPatientData: {
    name: string;
    email: string;
    age: number;
    gender: string;
    phone: string;
    country: string;
  };
}

export interface DynamicFormConfigurationInterface {
  inputsConfig: DynamicFormInputConfigurationInterface[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
