import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Col, Typography } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { parseValidation } from "../../utils/addAppointValidation";
import AddAppointmentFields from "../AddAppointmentFields/AddAppointmentFields";
import {
  DisabilityRule,
  FormFieldConfig,
  Item,
  ItemLayout,
  ItemUI,
  UIAlert,
  UILink,
  UIText,
  UITitle,
} from "../AddAppointmentFields/AddAppointmentInputs.type";
import AddAppointmentSection from "../AddAppointmentSection/AddAppointmentSection";
import {
  AddAppointmentFormProps,
  DefaultValueObjectFormat,
} from "./AddAppointmentForm.types";
import { StyledError } from "./AddAppointmentForm.styled";

const { Title, Text, Link } = Typography;

const AddAppointmentForm: FC<AddAppointmentFormProps> = ({
  fieldsConfig,
  onSubmit,
}) => {
  // Schema Config
  const shape: yup.ObjectShape = {};
  // default values config
  const defaultValuesObject: DefaultValueObjectFormat =
    {} as DefaultValueObjectFormat;

  // build schema & default values
  const configValidation = (itemsData: Item[]) => {
    itemsData.forEach((item: Item) => {
      if (item.category === "field") {
        const currentItem = item as FormFieldConfig;
        /********************
        config default values FOR FORM STATE which gets validated
        default value for each field input is for the displayed value for user
         ********************/

        if ("defaultChecked" in item) {
          defaultValuesObject[item.schemaName] = item.defaultChecked;
        }

        if ("defaultValue" in item)
          defaultValuesObject[item.schemaName] = item.defaultValue;

        // custom case for date picker default value
        if (
          "defaultValue" in item &&
          item.fieldType === "datePicker" &&
          item.defaultValue === "today"
        ) {
          // accepted format "YYYY/MM/DD"
          defaultValuesObject[item.schemaName] = dayjs().format("YYYY/MM/DD");
        }

        // custom case for time picker default value
        if (
          "defaultValue" in item &&
          item.fieldType === "timePicker" &&
          item.defaultValue === "now"
        ) {
          // Target Format hh:mm a
          const currentHour = new Date().getHours();
          defaultValuesObject[item.schemaName] = dayjs()
            .hour(currentHour + 1)
            .minute(0)
            .format("hh:mm a");
        }
        if (
          "defaultValue" in item &&
          item.fieldType === "timePicker" &&
          item.defaultValue === "next"
        ) {
          // Target Format hh:mm a
          const currentHour = new Date().getHours();
          defaultValuesObject[item.schemaName] = dayjs()
            .hour(currentHour + 1)
            .minute(30)
            .format("hh:mm a");
        }

        // config schema
        shape[currentItem.schemaName] = parseValidation(item);
      }

      if (item.category === "layout") {
        const currentItem = item as ItemLayout;
        configValidation(currentItem.children);
      }
    });
    return shape;
  };

  const schemaShape: yup.ObjectShape = configValidation(fieldsConfig);
  const schema = yup.object().shape(schemaShape);

  const { control, handleSubmit, clearErrors, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValuesObject,
  });
  // render items recursively config
  const { t } = useTranslation("lang");

  // configure if field is disabled or not
  const isDisabled = (disabilityRules: DisabilityRule[]) => {
    const [...currentValues] = watch(disabilityRules.map((rule) => rule.field));

    // if any condition met, disable field
    for (let i = 0; i < currentValues.length; i++) {
      if (currentValues[i] === disabilityRules[i].value) return true;
    }
    // No condition is meet so don't disable field
    return false;
  };

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
                      <Col md={8} sm={24} style={{ textAlign: "left" }}>
                        {/* in case there is a visibility rule:
                          - check if it is fulfilled first, if yse render field
                          - if not render field normally
                      */}
                        {item.visibility ? (
                          watch(item.visibility[0].field) ===
                            item.visibility[0].value && (
                            <div>
                              <AddAppointmentFields
                                {...item}
                                clearErrors={clearErrors}
                                onChange={field.onChange}
                                status={error ? "error" : undefined}
                                isDisabled={
                                  item.disability
                                    ? isDisabled(item.disability)
                                    : false
                                }
                              />
                              <StyledError>
                                {error && error.message && t(error.message)}
                              </StyledError>
                            </div>
                          )
                        ) : (
                          <div>
                            <AddAppointmentFields
                              {...item}
                              clearErrors={clearErrors}
                              onChange={field.onChange}
                              status={error ? "error" : undefined}
                              isDisabled={
                                item.disability
                                  ? isDisabled(item.disability)
                                  : false
                              }
                            />
                            <StyledError>
                              {error && error.message && t(error.message)}
                            </StyledError>
                          </div>
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
              watch(item.visibility[0].field) === item.visibility[0].value && (
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
                      watch(item.visibility[0].field) ===
                        item.visibility[0].value && (
                        <Title level={level}>{t(title)}</Title>
                      )
                    ) : (
                      <Title level={level}>{t(title)}</Title>
                    )}
                  </Col>
                );
              }
              // Text UI Item
              case "text": {
                const { text } = item as UIText;
                return item.visibility ? (
                  watch(item.visibility[0].field) ===
                    item.visibility[0].value && <Text>{t(text)}</Text>
                ) : (
                  <Text>{t(text)}</Text>
                );
              }
              // Link UI Item
              case "link": {
                const { text, url } = item as UILink;
                return item.visibility ? (
                  watch(item.visibility[0].field) ===
                    item.visibility[0].value && (
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
                  watch(item.visibility[0].field) ===
                    item.visibility[0].value && (
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderItems(fieldsConfig)}
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </form>
  );
};

export default AddAppointmentForm;
