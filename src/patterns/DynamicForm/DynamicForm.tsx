import { FC } from "react";
import { Button } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DynamicFormInputConfig } from "../DynamicInput/DynamicInput.types";
import DynamicInput from "../DynamicInput/DynamicInput";
import { schema } from "./DynamicForm.constants";
import { DynamicFormConfiguration } from "./DynamicForm.types";
import { StyledErrorMsg } from "./DynamicForm.styled";
import { parseValidation } from "../../utils/validation";

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

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(localSchema),
    mode: "onChange",
  });

  // console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{heading}</h1>
      {inputsConfig.map((inputConfig: DynamicFormInputConfig) => {
        // console.log(inputConfig);
        // console.table(localSchema);
        // // localSchemaShape[inputConfig.schemaName] = parseValidation(inputConfig);
        // console.log(
        //   "schema  ---------------------------------------------------"
        // );
        // console.table(schema);
        // console.table(localSchema);
        // console.log(
        //   "parsed  ---------------------------------------------------"
        // );
        // console.log(localSchemaShape[inputConfig.schemaName]);
        // // console.log(parseValidation(inputConfig));
        // console.log(yup.string().required("Field is required"));
        // console.log(
        //   "------------------------------------------------------------------------------------------------------------------------------------"
        // );
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
