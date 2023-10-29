import { FC } from "react";
import { Button } from "antd";
import { Controller, useForm } from "react-hook-form";
import { schema } from "./DynamicForm.constants";
import { DynamicInputConfig } from "../DynamicInput/DynamicInput.types";
import { DynamicFormConfiguration } from "./DynamicForm.types";
import DynamicInput from "../DynamicInput/DynamicInput";
import { yupResolver } from "@hookform/resolvers/yup";

const DynamicForm: FC<DynamicFormConfiguration> = ({
  heading,
  inputsConfig,
  onSubmit,
}) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{heading}</h1>
      {inputsConfig.map((inputConfig: DynamicInputConfig) => {
        return (
          <Controller
            key={inputConfig.id}
            name={inputConfig.schemaName}
            control={control}
            render={() => (
              <DynamicInput key={inputConfig.id} {...inputConfig} />
            )}
          />
        );
      })}
      <Button type="primary" htmlType="submit">
        Add Patient
      </Button>
    </form>
  );
};

export default DynamicForm;
