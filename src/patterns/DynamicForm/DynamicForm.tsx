import { FC } from "react";
import { Button } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseValidation } from "../../utils/validation";
import { DynamicFormInputConfig } from "../DynamicInput/DynamicInput.types";
import DynamicInput from "../DynamicInput/DynamicInput";
import { DynamicFormConfiguration } from "./DynamicForm.types";
import { StyledErrorMsg } from "./DynamicForm.styled";

const DynamicForm: FC<DynamicFormConfiguration> = ({
  heading,
  inputsConfig,
  onSubmit,
}) => {
  const localSchemaShape: yup.ObjectShape = {};

  inputsConfig.forEach((inputConfig: DynamicFormInputConfig) => {
    localSchemaShape[inputConfig.schemaName] = parseValidation(inputConfig);
  });
  const localSchema = yup.object().shape(localSchemaShape);

  const { handleSubmit, control, getValues } = useForm({
    resolver: yupResolver(localSchema),
    mode: "onChange",
  });

  // console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{heading}</h1>
      {inputsConfig.map((inputConfig: DynamicFormInputConfig) => {
        // console.log(getValues());
        return (
          <Controller
            key={inputConfig.id}
            name={inputConfig.schemaName}
            control={control}
            // rules={inputConfig.validationRules[0]}
            render={({ field, fieldState: { error } }) => {
              // console.log(inputConfig.schemaName, props);
              return (
                <>
                  <DynamicInput
                    key={inputConfig.id}
                    {...inputConfig}
                    onChange={field.onChange}
                    values={getValues()}
                  />
                  <StyledErrorMsg>{error && error.message}</StyledErrorMsg>
                </>
              );
            }}
          />
        );
      })}
      <Button type="primary" htmlType="submit" data-testid="submitBtn">
        Add Patient
      </Button>
    </form>
  );
};

export default DynamicForm;
