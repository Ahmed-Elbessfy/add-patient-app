import { FC } from "react";
import { Button } from "antd";
import { DynamicInputConfig } from "../DynamicInput/DynamicInput.types";
import { DynamicFormConfiguration } from "./DynamicForm.types";
import DynamicInput from "../DynamicInput/DynamicInput";

const DynamicForm: FC<DynamicFormConfiguration> = ({
  heading,
  inputsConfig,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>{heading}</h1>
      {inputsConfig.map((inputConfig: DynamicInputConfig) => {
        return <DynamicInput key={inputConfig.id} {...inputConfig} />;
      })}
      <Button type="primary" htmlType="submit">
        Add Patient
      </Button>
    </form>
  );
};

export default DynamicForm;
