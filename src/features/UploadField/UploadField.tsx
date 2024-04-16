import { FC, useState } from "react";
import { Image, Upload, Button } from "antd";
import type { UploadFile, UploadProps } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { FieldUploadFileComponentProps } from "./UploadField.type";
import { useTranslation } from "react-i18next";
import { StyledDeleteFileBtn, StyledImageContainer } from "./UploadField.style";

type FileType = UploadProps["beforeUpload"];

// convert file to 64 Base for preview only
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    // Ensure file is an instance of File
    if (!(file instanceof File)) {
      reject(new Error("Expected a File object"));
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadField: FC<FieldUploadFileComponentProps> = (props) => {
  const {
    id,
    testId,
    label,
    acceptedFormats,
    sizeLimit,
    maxFileCount,
    onChange,
  } = props;

  // actual file store to submit
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  // file store to preview for the user
  const [filePreview, setFilePreview] = useState<string[]>([]);

  const { t } = useTranslation("translation");

  const handleChange: UploadProps["onChange"] = async ({ file }) => {
    // create file preview to show preview of image
    file.preview = await getBase64(file.originFileObj as FileType);

    // register file preview to local file preview store
    setFilePreview([...filePreview, file.preview]);
    // register file to local file store
    setFileList([...fileList, file]);
    console.log(filePreview);
    console.log(fileList);
  };

  // empty file preview and file list stores
  const handleRemoveFile = () => {
    setFileList([]);
    setFilePreview([]);
  };

  const uploadProps = {
    name: "file",
    maxCount: maxFileCount,
    onChange: handleChange,
    accept: acceptedFormats.join(","),
    beforeUpload: (file: UploadFile) => {
      if (file.size && file.size / 1024 / 1024 > sizeLimit) {
        throw Error(`File must be less than ${sizeLimit} megabytes`);
      } else {
        onChange(file);
        return true;
      }
    },
    showUploadList: false,
  };
  return (
    <>
      <label>{label && t(label)}</label>

      <div id={id} data-testid={testId}>
        <Upload {...uploadProps}>
          <Button type="primary" icon={<UploadOutlined />}>
            Upload Image
          </Button>
        </Upload>

        {fileList.length > 0 &&
          filePreview.map((file) => {
            return (
              <StyledImageContainer>
                <Image
                  width={120}
                  height={120}
                  src={file}
                  style={{ borderRadius: "50%" }}
                />
                <StyledDeleteFileBtn
                  danger
                  type="primary"
                  icon={<DeleteOutlined />}
                  onClick={handleRemoveFile}
                />
              </StyledImageContainer>
            );
          })}
      </div>
    </>
  );
};

export default UploadField;
