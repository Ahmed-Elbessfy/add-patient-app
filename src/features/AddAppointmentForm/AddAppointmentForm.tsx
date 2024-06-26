import { FC } from "react";
import { useForm } from "react-hook-form";
import { Alert, Button, Col, Divider, Typography } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { AddAppointmentFormProps } from "./AddAppointmentForm.types";
import {
  StyledDividerText,
  StyledForm,
  StyledNestedForm,
  StyledTitle,
} from "./AddAppointmentForm.styled";
import {
  configValidation,
  setDefaultValues,
  configDataSource,
} from "../../utils/addAppointUtils";
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
  UIDivider,
} from "../AddAppointmentFields/AddAppointmentInputs.type";
import AddAppointmentSection from "../AddAppointmentSection/AddAppointmentSection";
// import UploadField from "../UploadField/UploadField";

const { Text, Link } = Typography;

const AddAppointmentForm: FC<AddAppointmentFormProps> = ({
  fieldsConfig,
  onSubmit,
  dataSourceObject,
  actionsObject,
}) => {
  // Schema Config
  const shape: yup.ObjectShape = {};
  // build schema & default values
  const schemaShape = configValidation(fieldsConfig, shape);
  const schema = yup.object().shape(schemaShape);
  // console.log("final schema : ", schema);
  const { control, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: setDefaultValues(
      fieldsConfig,
      {},
      dataSourceObject,
      actionsObject
    ),
  });

  // get current language for content direction
  const { t, i18n } = useTranslation("translation");

  const configDisability = (itemData: FormFieldConfig) => {
    // Check if disability configuration exists and directly return its value if it's a boolean
    if (typeof itemData.disability === "boolean") {
      return itemData.disability;
    }

    // If disability configuration is an array of rules
    if (Array.isArray(itemData.disability)) {
      // Use map and some to check if any condition is fulfilled
      const isDisabled = itemData.disability.some(
        (rule: Rule) => watch(rule.field) === rule.value
      );
      return isDisabled;
    }

    // Default to false if disability is not defined or not a boolean/array
    return false;
  };

  // conditional visibility configuration
  const configVisibility = (itemData: Item) => {
    // Check if visibility configuration exists and directly return its value if it's a boolean
    if (typeof itemData.visibility === "boolean") {
      return itemData.visibility;
    }

    // If visibility configuration is an array of rules
    if (Array.isArray(itemData.visibility)) {
      // Use map and every to check if all conditions are fulfilled
      const allConditionsMet = itemData.visibility.every(
        (rule: Rule) => watch(rule.field) === rule.value
      );
      return allConditionsMet;
    }

    // Default to true if visibility is neither a boolean nor an array
    return true;
  };

  const renderUIItems = (item: ItemUI) => {
    switch (item.type) {
      // Title UI Item
      case "title": {
        const { level, title } = item as UITitle;
        return (
          <Col span={24}>
            {configVisibility(item) && (
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
        return configVisibility(item) && <Text>{t(text)}</Text>;
      }
      // Link UI Item
      case "link": {
        const { text, url } = item as UILink;
        return configVisibility(item) && <Link href={url}>{t(text)}</Link>;
      }
      // Alert UI Item
      case "alert": {
        const { description, message, alertType, showIcon } = item as UIAlert;
        return (
          configVisibility(item) && (
            <Alert
              message={t(message)}
              description={t(description)}
              type={alertType}
              showIcon={showIcon}
            />
          )
        );
      }
      // Divider UI Item
      case "divider": {
        const { text, orientation, direction } = item as UIDivider;
        return (
          configVisibility(item) && (
            <Divider type={direction} orientation={orientation}>
              <StyledDividerText>{t(text)}</StyledDividerText>
            </Divider>
          )
        );
      }
    }
  };

  const renderFieldItems = (item: FormFieldConfig) => {
    // Apply Data Source configuration
    const dataSourceItem = item.dataSourceConfig
      ? configDataSource(item, dataSourceObject, actionsObject)
      : item;

    // extract field data
    const {
      category,
      visibility,
      disability,
      defaultValue,
      validation,
      md,
      xs,
      ...field
    } = dataSourceItem;

    const fieldProps = {
      ...field,
      isDisabled: configDisability(dataSourceItem),
      control,
    };

    return (
      <Col
        xs={xs}
        md={md}
        style={{
          textAlign: "start",
        }}
      >
        {configVisibility(dataSourceItem) && (
          <AddAppointmentFields {...fieldProps} />
        )}
      </Col>
    );
  };

  const renderFormItems = (item: ItemForm) => {
    return (
      <>
        {configVisibility(item) && (
          <StyledNestedForm>
            <AddAppointmentSection renderItems={renderItems} {...item} />
          </StyledNestedForm>
        )}
      </>
    );
  };

  const renderLayoutItems = (item: ItemLayout) => {
    return (
      configVisibility(item) && (
        <AddAppointmentSection renderItems={renderItems} {...item} />
      )
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

  // const uploadProps: UploadProps = {
  //   name: "file",
  //   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //   maxCount: 1,
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       console.log(info.file);
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ direction: i18n.language == "ar" ? "rtl" : "ltr" }}
    >
      {/* <Upload {...uploadProps}>
        <Button type="primary" icon={<UploadOutlined />}>
          Upload Image
        </Button>
      </Upload> */}

      {/* <UploadField /> */}
      {/* Center form Content  */}
      <StyledForm>{renderItems(fieldsConfig)}</StyledForm>
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </form>
  );
};

export default AddAppointmentForm;
