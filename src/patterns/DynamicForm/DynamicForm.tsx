import { FC, useState } from "react";
import { Alert, Button, Col, Flex, Grid, Row, Typography } from "antd";
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

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(localSchema),
    mode: "onChange",
  });

  // for header & error messages
  const { t } = useTranslation("lang");

  const renderItems = (inputsConfig: InputConfigOptions[]): JSX.Element => {
    return (
      <>
        {inputsConfig.map((inputConfig: InputConfigOptions) => {
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
  const style: React.CSSProperties = {
    background: "#0092ff",
    padding: "8px 0",
  };
  const [showGrid, setShowGrid] = useState<boolean>(true);
  // console.log(errors);
  return (
    <>
      <Button onClick={() => setShowGrid((prev) => !prev)}>+</Button>
      <div style={{ display: showGrid ? "block" : "none" }}>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            className="gutter-row"
            style={{ background: "skyblue", height: "4rem" }}
            span={6}
          >
            <div>span -6</div>
          </Col>
          <Col
            className="gutter-row"
            style={{ background: "skyblue", height: "4rem" }}
            span={6}
          >
            <div>span -6</div>
          </Col>
          <Col
            className="gutter-row"
            style={{ background: "skyblue", height: "4rem" }}
            span={6}
          >
            <div>span -6</div>
          </Col>
          <Col
            className="gutter-row"
            style={{ background: "skyblue", height: "4rem" }}
            span={6}
          >
            <div>span -6</div>
          </Col>
        </Row>
        <Row gutter={24} align="middle" style={{ height: "4rem" }}>
          <Col
            className="gutter-row"
            span={8}
            style={{ border: "2px solid gray" }}
          >
            <div style={{ background: "skyblue" }}>span -8</div>
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{ border: "2px solid gray" }}
          >
            <div style={{ background: "skyblue" }}>span -8</div>
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{ border: "2px solid gray" }}
          >
            <div style={{ background: "skyblue" }}>span -8</div>
          </Col>
        </Row>
        <Row gutter={16} style={{ height: "4rem" }}>
          <Col className="gutter-row" span={12}>
            span -12
            <Row
              gutter={24}
              align="middle"
              style={{ height: "4rem", border: "2px solid gray" }}
            >
              <Col md={12} sm={24}>
                {/* <Flex
                justify="space-around"
                align="center"
                style={{ background: "skyblue", height: "3rem" }}
              >
                12 span - 12
              </Flex> */}
                <div style={{ background: "skyblue" }}>12 span - 12</div>
              </Col>
              <Col md={12} sm={24}>
                {/* <Flex
                justify="space-around"
                align="center"
                style={{ background: "skyblue", height: "3rem" }}
                >
                12 span - 12
              </Flex> */}
                <div style={{ background: "skyblue" }}>12 span - 12</div>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row" span={12}>
            span -12
          </Col>
        </Row>
      </div>
      {/* <Row>
        <Col
          className="gutter-row"
          style={{ background: "skyblue", height: "4rem" }}
          span={24}
        >
          span -24
        </Col>
      </Row> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{t(heading)}</h1>
        {renderItems(inputsConfig)}
        <Button type="primary" htmlType="submit" data-testid="submitBtn">
          Add Patient
        </Button>
      </form>
    </>
  );
};

export default DynamicForm;
