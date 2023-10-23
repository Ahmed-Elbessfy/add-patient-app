import { FormEvent } from "react";

interface DSelectOptionsInterface {
  value: string;
  valText: string;
}

export interface DInputConfigurationInterface {
  fieldType?: string;
  name: string;
  placeholder: string;
  label?: string;
  fieldId: string;
  multiOptions?: DSelectOptionsInterface[];
  onChangeEvent: (inputName: string, inputValue: string | number) => void;
}

export interface DFormConfigurationInterface {
  inputsConfig: DInputConfigurationInterface[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

// Dynamic form output format
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
