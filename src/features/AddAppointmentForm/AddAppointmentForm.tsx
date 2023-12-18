import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Col, Typography } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import AddAppointmentFields from "../AddAppointmentFields/AddAppointmentFields";
import {
  Rule,
  FormFieldConfig,
  Item,
  ItemLayout,
  ItemUI,
  UIAlert,
  UILink,
  UIText,
  UITitle,
  ItemForm,
} from "../AddAppointmentFields/AddAppointmentInputs.type";
import AddAppointmentSection from "../AddAppointmentSection/AddAppointmentSection";
import { AddAppointmentFormProps } from "./AddAppointmentForm.types";
import { StyledError, StyledTitle } from "./AddAppointmentForm.styled";
import {
  configValidation,
  setDefaultValues,
} from "../../utils/addAppointUtils";

const { Text, Link } = Typography;

const AddAppointmentForm: FC<AddAppointmentFormProps> = ({
  fieldsConfig,
  onSubmit,
}) => {
  // build schema & default values
  const shape = configValidation(fieldsConfig);

  const schemaShape: yup.ObjectShape = shape;
  const schema = yup.object().shape(schemaShape);

  const { control, handleSubmit, clearErrors, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: setDefaultValues(fieldsConfig),
  });

  // get current language for content direction
  const { t, i18n } = useTranslation("translation");

  // configure if field is disabled or not
  const isMatched = (rules: Rule[]) => {
    const [...currentValues] = watch(rules.map((rule) => rule.field));

    // if any condition met, disable field
    for (let i = 0; i < currentValues.length; i++) {
      if (currentValues[i] === rules[i].value) return true;
    }
    // No condition is meet so don't disable field
    return false;
  };

  // render items recursively config
  const renderItems = (fieldsConfig: Item[]): JSX.Element => {
    return (
      <>
        {fieldsConfig.map((fieldConfig: Item) => {
          // Field Render
          if (fieldConfig.category === "field") {
            const item = fieldConfig as FormFieldConfig;
            return (
              <Controller
                key={item.id}
                name={item.name}
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <>
                      <Col
                        sm={item.sm && item.sm}
                        md={item.md && item.md}
                        lg={item.lg && item.lg}
                        xl={item.xl && item.xl}
                        style={{
                          textAlign: "start",
                        }}
                      >
                        {/* in case there is a visibility rule:
                          - check if it is fulfilled first, if yse render field
                          - if not render field normally
                      */}
                        {item.visibility ? (
                          isMatched(item.visibility) && (
                            <>
                              <AddAppointmentFields
                                {...item}
                                clearErrors={clearErrors}
                                onChange={field.onChange}
                                status={error ? "error" : undefined}
                                isDisabled={
                                  item.disability
                                    ? isMatched(item.disability)
                                    : false
                                }
                              />
                              <StyledError>
                                {error && error.message && t(error.message)}
                              </StyledError>
                            </>
                          )
                        ) : (
                          <>
                            <AddAppointmentFields
                              {...item}
                              clearErrors={clearErrors}
                              onChange={field.onChange}
                              status={error ? "error" : undefined}
                              isDisabled={
                                item.disability
                                  ? isMatched(item.disability)
                                  : false
                              }
                            />
                            <StyledError>
                              {error && error.message && t(error.message)}
                            </StyledError>
                          </>
                        )}
                      </Col>
                    </>
                  );
                }}
              />
            );
          }

          // Layout Render
          if (fieldConfig.category === "layout") {
            const item = fieldConfig as ItemLayout;
            return item.visibility ? (
              isMatched(item.visibility) && (
                <AddAppointmentSection renderItems={renderItems} {...item} />
              )
            ) : (
              <AddAppointmentSection renderItems={renderItems} {...item} />
            );
          }

          // Form Render
          if (fieldConfig.category === "form") {
            const item = fieldConfig as ItemForm;
            return item.visibility ? (
              isMatched(item.visibility) && (
                <AddAppointmentSection renderItems={renderItems} {...item} />
              )
            ) : (
              <AddAppointmentSection renderItems={renderItems} {...item} />
            );
          }
          // UI Render
          if (fieldConfig.category === "UI") {
            const item = fieldConfig as ItemUI;
            switch (item.type) {
              // Title UI Item
              case "title": {
                const { level, title } = item as UITitle;
                return (
                  <Col span={24}>
                    {item.visibility ? (
                      isMatched(item.visibility) && (
                        <StyledTitle level={level}>
                          <strong>{t(title)}</strong>
                        </StyledTitle>
                      )
                    ) : (
                      <StyledTitle level={level}>
                        <strong>{t(title)}</strong>
                      </StyledTitle>
                    )}
                  </Col>
                );
              }
              // Text UI Item
              case "text": {
                const { text } = item as UIText;
                return item.visibility ? (
                  isMatched(item.visibility) && <Text>{t(text)}</Text>
                ) : (
                  <Text>{t(text)}</Text>
                );
              }
              // Link UI Item
              case "link": {
                const { text, url } = item as UILink;
                return item.visibility ? (
                  isMatched(item.visibility) && (
                    <Link href={url}>{t(text)}</Link>
                  )
                ) : (
                  <Link href={url}>{t(text)}</Link>
                );
              }
              // Alert UI Item
              case "alert": {
                const { description, message, alertType, showIcon } =
                  item as UIAlert;
                return item.visibility ? (
                  isMatched(item.visibility) && (
                    <Alert
                      message={t(message)}
                      description={t(description)}
                      type={alertType}
                      showIcon={showIcon}
                    />
                  )
                ) : (
                  <Alert
                    message={t(message)}
                    description={t(description)}
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ direction: i18n.language == "ar" ? "rtl" : "ltr" }}
    >
      {renderItems(fieldsConfig)}
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </form>
  );
};

export default AddAppointmentForm;
