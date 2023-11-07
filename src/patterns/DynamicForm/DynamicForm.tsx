import { FC } from "react";
import { Button } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseValidation } from "../../utils/validation";
import { DynamicFormFieldConfig } from "../DynamicInput/DynamicInput.types";
import { InputConfigOptions } from "./DynamicForm.types";
import DynamicInput from "../DynamicInput/DynamicInput";
import { DynamicFormConfiguration } from "./DynamicForm.types";
import { StyledErrorMsg } from "./DynamicForm.styled";
import Title from "antd/es/typography/Title";

const DynamicForm: FC<DynamicFormConfiguration> = ({
  heading,
  inputsConfig,
  onSubmit,
}) => {
  const localSchemaShape: yup.ObjectShape = {};

  // inputsConfig.forEach((inputConfig: InputConfigOptions[]) => {
  //   localSchemaShape[inputConfig.schemaName] = parseValidation(inputConfig);
  // });
  const localSchema = yup.object().shape(localSchemaShape);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(localSchema),
    mode: "onChange",
  });

  const renderItems = (inputsConfig: InputConfigOptions[]) => {
    return inputsConfig.map((inputConfig: InputConfigOptions) => {
      console.log(inputConfig.category);
      switch (inputConfig.category) {
        case "field":
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

        case "layout":
          return inputConfig.children.map(
            (layoutInputConfig: InputConfigOptions) => (
              <Controller
                key={layoutInputConfig.id}
                name={layoutInputConfig.schemaName}
                control={control}
                // rules={layoutInputConfig.validationRules[0]}
                render={({ field, fieldState: { error } }) => {
                  // console.log(layoutInputConfig.schemaName, props);
                  return (
                    <>
                      <DynamicInput
                        key={layoutInputConfig.id}
                        {...layoutInputConfig}
                        onChange={field.onChange}
                      />
                      <StyledErrorMsg>{error && error.message}</StyledErrorMsg>
                    </>
                  );
                }}
              />
            )
          );

        case "UI":
          switch (inputConfig.type) {
            case "title":
              return (
                <Title level={inputConfig.level}>{inputConfig.title}</Title>
              );

            case "text":
              return <Text>{inputConfig.text}</Text>;
          }
      }
    });
  };

  // console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{heading}</h1>
      {renderItems(inputsConfig)}
      <Button type="primary" htmlType="submit" data-testid="submitBtn">
        Add Patient
      </Button>
    </form>
  );
};

export default DynamicForm;
