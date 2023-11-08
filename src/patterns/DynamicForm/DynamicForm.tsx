import { FC } from "react";
import { Alert, Button, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { parseValidation } from "../../utils/validation";
import {
  DynamicFormFieldConfig,
  ItemLayout,
  ItemUI,
  UIAlert,
  UILink,
  UIText,
  UITitle,
} from "../DynamicInput/DynamicInput.types";
import DynamicInput from "../DynamicInput/DynamicInput";
import { InputConfigOptions } from "./DynamicForm.types";
import { StyledErrorMsg } from "./DynamicForm.styled";
import { DynamicFormConfiguration } from "./DynamicForm.types";

const { Text, Link, Title } = Typography;

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
      // Field render
      if (inputConfig.category === "field") {
        const currentItem = inputConfig as DynamicFormFieldConfig;
        return (
          <Controller
            key={currentItem.id}
            name={currentItem.schemaName}
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <>
                  <DynamicInput
                    key={currentItem.id}
                    {...currentItem}
                    onChange={field.onChange}
                  />
                  <StyledErrorMsg>{error && error.message}</StyledErrorMsg>
                </>
              );
            }}
          />
        );
      }

      // Layout Render
      if (inputConfig.category === "layout") {
        const currentItem = inputConfig as ItemLayout;
        return currentItem.children.map(
          (layoutInputConfig: DynamicFormFieldConfig) => (
            <Controller
              key={layoutInputConfig.id}
              name={layoutInputConfig.schemaName}
              control={control}
              render={({ field, fieldState: { error } }) => {
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
      }

      // UI Render
      if (inputConfig.category === "UI") {
        const currentItem = inputConfig as ItemUI;
        switch (currentItem.type) {
          // Title UI Item
          case "title": {
            const { level, title } = currentItem as UITitle;
            return <Title level={level}>{title}</Title>;
          }
          // Text UI Item
          case "text": {
            const { text } = currentItem as UIText;
            return <Text>{text}</Text>;
          }
          // Link UI Item
          case "link": {
            const { text, url } = currentItem as UILink;
            return <Link href={url}>{text}</Link>;
          }
          // Alert UI Item
          case "alert": {
            const { description, message, alertType, showIcon } =
              currentItem as UIAlert;
            return (
              <Alert
                message={message}
                description={description}
                type={alertType}
                showIcon={showIcon}
              />
            );
          }
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
