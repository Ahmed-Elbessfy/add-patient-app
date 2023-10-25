import { FormEvent } from "react";
import { DynamicInputConfig } from "../DynamicInput/DynamicInput.types";

export type DynamicFormConfiguration = {
  heading: string;
  inputsConfig: DynamicInputConfig[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
