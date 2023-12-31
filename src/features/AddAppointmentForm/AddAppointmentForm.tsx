import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Col,
  Typography,
  Upload,
  UploadProps,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
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
  CustomRuleFields,
} from "../AddAppointmentFields/AddAppointmentInputs.type";
import AddAppointmentSection from "../AddAppointmentSection/AddAppointmentSection";
import { AddAppointmentFormProps } from "./AddAppointmentForm.types";
import { StyledError, StyledTitle } from "./AddAppointmentForm.styled";
import {
  configValidation,
  setDefaultValues,
} from "../../utils/addAppointUtils";
import DualField from "../DualField/DualField";

const { Text, Link } = Typography;

const AddAppointmentForm: FC<AddAppointmentFormProps> = ({
  fieldsConfig,
  onSubmit,
}) => {
  // Schema Config
  const shape: yup.ObjectShape = {};
  // build schema & default values
  const schemaShape = configValidation(fieldsConfig, shape);

  const schema = yup.object().shape(schemaShape);
  // console.log("final schema : ", schema);
  const { control, handleSubmit, clearErrors, watch, resetField } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: setDefaultValues(fieldsConfig, {}),
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

  const watchFields = (rules: Rule[]) => {
    const currentValues: CustomRuleFields[] = watch(
      rules.map((rule) => rule.field)
    );

    return currentValues;
  };
  const renderUIItems = (item: ItemUI) => {
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
          isMatched(item.visibility) && <Link href={url}>{t(text)}</Link>
        ) : (
          <Link href={url}>{t(text)}</Link>
        );
      }
      // Alert UI Item
      case "alert": {
        const { description, message, alertType, showIcon } = item as UIAlert;
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
  };

  const renderFieldItems = (item: FormFieldConfig) => {
    return (
      <Controller
        key={item.id}
        name={item.name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <Col
              style={{
                textAlign: "start",
                flex: item.flex ? item.flex : undefined,
              }}
            >
              {/* in case there is a visibility rule:
                    - check if it is fulfilled first, if yse render field
                    - if not render field normally
              */}
              {
                <div>
                  <AddAppointmentFields
                    {...item}
                    clearErrors={clearErrors}
                    onChange={field.onChange}
                    status={error ? "error" : undefined}
                    isDisabled={
                      item.disability ? isMatched(item.disability) : false
                    }
                    resetField={resetField}
                    value={field.value}
                    visibilityFields={
                      item.visibility && watchFields(item.visibility)
                    }
                  />
                  <StyledError>
                    {error && error.message && t(error.message)}
                  </StyledError>
                </div>
              }
            </Col>
          );
        }}
      />
    );
  };

  const renderFormItems = (item: ItemForm) => {
    return (
      <AddAppointmentSection
        renderItems={renderItems}
        {...item}
        isVisible={item.visibility ? isMatched(item.visibility) : true}
      />
    );
  };

  const renderLayoutItems = (item: ItemLayout) => {
    return (
      <AddAppointmentSection
        renderItems={renderItems}
        {...item}
        isVisible={item.visibility ? isMatched(item.visibility) : true}
      />
    );
  };
  // render items recursively config
  const renderItems = (fieldsConfig: Item[]): JSX.Element => {
    return (
      <>
        {fieldsConfig.map((fieldConfig: Item) => {
          switch (fieldConfig.category) {
            case "field":
              // Field Render
              return renderFieldItems(fieldConfig as FormFieldConfig);

            case "layout":
              // Layout Render
              return renderLayoutItems(fieldConfig as ItemLayout);

            case "form":
              // Form Render
              return renderFormItems(fieldConfig as ItemForm);

            default:
              // UI Render
              return renderUIItems(fieldConfig as ItemUI);
          }
        })}
      </>
    );
  };

  const uploadProps: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    maxCount: 1,
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ direction: i18n.language == "ar" ? "rtl" : "ltr" }}
    >
      <DualField />
      <Upload {...uploadProps}>
        <Button type="primary" icon={<UploadOutlined />}>
          Upload Image
        </Button>
      </Upload>

      {renderItems(fieldsConfig)}
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </form>
  );
};

export default AddAppointmentForm;
