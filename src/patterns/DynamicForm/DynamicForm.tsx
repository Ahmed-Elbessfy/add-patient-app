import { FC, useEffect, useState } from "react";
import { Alert, Button, Col, Flex, Grid, Input, Row, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { parseValidation } from "../../utils/validation";
import { useTranslation } from "react-i18next";
import {
  DynamicFormFieldConfig,
  ItemLayout,
  ItemUI,
  UIAlert,
  UILink,
  UIText,
  UITitle,
} from "../DynamicInput/DynamicInput.types";
import DynamicFormSection from "../DynamicFormSection/DynamicFormSection";
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

  const childSchema = yup.object().shape({
    childName: yup.string().required(),
    childAge: yup.number().required().min(5).max(17),
  });

  const parentSchema = yup.object().shape({
    parentName: yup.string().required(),
    parentAge: yup.string().required().min(37),
    child: childSchema,
  });

  const addressSchema = yup.object().shape({
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
  });

  const userSchema = yup.object().shape({
    name__: yup.string().required("Name is required"),
    age: yup.number().required().min(5).max(17),

    email__: yup.string().email("Invalid email").required("Email is required"),
    address__: addressSchema, // Nested schema
  });

  const { handleSubmit, control, formState, getValues } = useForm({
    resolver: yupResolver(parentSchema),
    mode: "onChange",
  });

  // for header & error messages
  const { t } = useTranslation("translation");

  const renderItems = (inputsConfig: InputConfigOptions[]): JSX.Element => {
    return (
      <>
        {inputsConfig.map((inputConfig: InputConfigOptions) => {
          // Field render
          if (inputConfig.category === "field") {
            const currentItem = inputConfig as DynamicFormFieldConfig;
            // console.log(currentItem);
            return (
              <Controller
                key={currentItem.id}
                name={currentItem.schemaName}
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <div>
                      <DynamicInput
                        key={currentItem.id}
                        {...currentItem}
                        onChange={field.onChange}
                      />
                      <StyledErrorMsg>{error && error.message}</StyledErrorMsg>
                    </div>
                  );
                }}
              />
            );
          }

          // Layout Render
          if (inputConfig.category === "layout") {
            const currentItem = inputConfig as ItemLayout;
            return (
              <DynamicFormSection {...currentItem} renderItems={renderItems} />
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
        })}
      </>
    );
  };

  useEffect(() => {
    console.log(getValues(), formState);
  }, [formState, getValues]);
  // const style: React.CSSProperties = {
  //   background: "#0092ff",
  //   padding: "8px 0",
  // };
  // const [showGrid, setShowGrid] = useState<boolean>(true);
  // console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderItems([
          {
            category: "field",
            fieldType: "text",
            name: "parentName",
            schemaName: "parentName",
            testId: "parentName",
            id: "parentName",
            placeholder: "formInputs.nameInput.text",
            label: "formInputs.nameInput.text",
            validation: [],
            visibility: true,
          },
          {
            category: "field",
            fieldType: "number",
            name: "parentAge",
            schemaName: "parentAge",
            testId: "parentAge",
            id: "parentAge",
            placeholder: "formInputs.ageInput.text",
            label: "formInputs.ageInput.text",
            validation: [],
            visibility: true,
          },
          {
            category: "field",
            fieldType: "text",
            name: "childName",
            schemaName: "child.childName",
            testId: "childName",
            id: "childName",
            placeholder: "formInputs.nameInput.text",
            label: "formInputs.nameInput.text",
            validation: [],
            visibility: true,
          },
          {
            category: "field",
            fieldType: "number",
            name: "childAge",
            schemaName: "child.childAge",
            testId: "childAge",
            id: "childAge",
            placeholder: "formInputs.ageInput.text",
            label: "formInputs.ageInput.text",
            validation: [],
            visibility: true,
          },
        ])}
        {JSON.stringify(formState)}
        <Button type="primary" htmlType="submit" data-testid="submitBtn">
          Add Patient
        </Button>
      </form>
      <>{console.log(formState, getValues())}</>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{t(heading)}</h1>

        {/* {renderItems(inputsConfig)} */}
        <Button type="primary" htmlType="submit" data-testid="submitBtn">
          Add Patient
        </Button>
      </form>
    </>
  );
};

export default DynamicForm;
