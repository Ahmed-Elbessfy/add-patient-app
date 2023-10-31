import { FC } from "react";
import { Button } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DynamicInputConfig } from "../DynamicInput/DynamicInput.types";
import DynamicInput from "../DynamicInput/DynamicInput";
import { schema } from "./DynamicForm.constants";
import { DynamicFormConfiguration } from "./DynamicForm.types";
import { StyledErrorMsg } from "./DynamicForm.styled";

const DynamicForm: FC<DynamicFormConfiguration> = ({
  heading,
  inputsConfig,
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{heading}</h1>
      {inputsConfig.map((inputConfig: DynamicInputConfig) => {
        return (
          <>
            <Controller
              key={inputConfig.id}
              name={inputConfig.schemaName}
              control={control}
              // rules={inputConfig.validationRules[0]}
              render={({ field }) => (
                <DynamicInput
                  key={inputConfig.id}
                  {...inputConfig}
                  onChange={field.onChange}
                />
              )}
            />
            <StyledErrorMsg>
              {errors[inputConfig.schemaName] &&
                errors[inputConfig.schemaName].message}
            </StyledErrorMsg>
          </>
        );
      })}
      <Button type="primary" htmlType="submit" data-testId="submitBtn">
        Add Patient
      </Button>
    </form>
  );
};

export default DynamicForm;
