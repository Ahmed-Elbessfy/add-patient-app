import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Typography } from "antd";
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
} from "../AddAppointmentFields/AddAppointmentInputs.type";
import { AddAppointmentFormProps } from "./AddAppointmentForm.types";
import AddAppointmentSection from "../AddApointmentSection/AddAppointmentSection";

const { Title, Text, Link } = Typography;

const AddAppointmentForm: FC<AddAppointmentFormProps> = ({
  fieldsConfig,
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm();

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
                        onChange={field.onChange}
                      />
                      {error && error.message}
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
