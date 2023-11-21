import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Typography } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { parseValidation } from "../../utils/addAppointValidation";
import AddAppointmentFields from "../AddAppointmentFields/AddAppointmentFields";
import {
  FormFieldConfig,
  Item,
  ItemLayout,
  ItemUI,
  UIAlert,
  UILink,
  UIText,
  UITitle,
  SchemaName,
} from "../AddAppointmentFields/AddAppointmentInputs.type";
import AddAppointmentSection from "../AddAppointmentSection/AddAppointmentSection";
import { AddAppointmentFormProps } from "./AddAppointmentForm.types";

const { Title, Text, Link } = Typography;

const AddAppointmentForm: FC<AddAppointmentFormProps> = ({
  fieldsConfig,
  onSubmit,
}) => {
  // Schema Config
  const shape: yup.ObjectShape = {};
  // default values config
  const defaultValuesObject: Record<
    SchemaName,
    string | number | boolean | undefined | Dayjs
  > = {};

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

  const { control, handleSubmit, clearErrors } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValuesObject,
  });
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
                    <div>
                      <AddAppointmentFields
                        {...item}
                        clearErrors={clearErrors}
                        onChange={field.onChange}
                        status={error ? "error" : undefined}
                      />
                      <p>{error && error.message}</p>
                    </div>
                  );
                }}
              />
            );
          }

          // Layout Render
          if (fieldConfig.category === "layout") {
            const item = fieldConfig as ItemLayout;
            return (
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
                return <Title level={level}>{title}</Title>;
              }
              // Text UI Item
              case "text": {
                const { text } = item as UIText;
                return <Text>{text}</Text>;
              }
              // Link UI Item
              case "link": {
                const { text, url } = item as UILink;
                return <Link href={url}>{text}</Link>;
              }
              // Alert UI Item
              case "alert": {
                const { description, message, alertType, showIcon } =
                  item as UIAlert;
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
