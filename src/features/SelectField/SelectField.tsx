import { FC, useState } from "react";
import { Select, Tag } from "antd";
import { useTranslation } from "react-i18next";
import { FieldSelectComponentProps } from "./SelectField.type";
import { StyledSelectField } from "./SelectField.styled";

const SelectField: FC<FieldSelectComponentProps> = (props) => {
  const {
    label,
    placeholder,
    onChange,
    status,
    isDisabled,
    value,
    options,
    showSearch,
    allowClear,
    allowMultiple,
    allowAddingOptions,
  } = props;

  // Field local state
  // manage search value as (local value) locally for allowing adding new options in case it is allowed

  const [optionsClone, setOptionsClone] = useState(options);
  const { t } = useTranslation("translation");

  // handle adding options with search
  const handleSearch = (searchedItem: string) => {
    if (allowAddingOptions) {
      const ex = options.find((option) => {
        return option.value.toLowerCase().includes(searchedItem.toLowerCase());
      });
      console.log(ex, searchedItem);
      if (!ex) {
        const newOp = [
          ...options,
          { label: searchedItem, value: searchedItem },
        ];
        console.log(newOp);
        setOptionsClone(newOp);
      } else {
        setOptionsClone(options);
      }
    } else {
      setOptionsClone(options);
    }
  };

  return (
    <>
      <label>{label && t(label)}</label>

      <StyledSelectField
        placeholder={placeholder && t(placeholder)}
        status={status}
        disabled={isDisabled}
        onChange={(value: string) => onChange(value)}
        onSearch={handleSearch}
        value={value as string}
        style={{ width: "100%" }}
        showSearch={showSearch}
        allowClear={allowClear}
        mode={allowMultiple ? "multiple" : undefined}
      >
        {optionsClone &&
          optionsClone.map((option, ind) => {
            return (
              <Select.Option key={ind} value={option.value}>
                <Tag color="#d4d106">{t(option.label)}</Tag>
              </Select.Option>
            );
          })}
        {allowAddingOptions && (
          <Select.Option key="new" disabled>
            Add new item
          </Select.Option>
        )}
      </StyledSelectField>
    </>
  );
};
export default SelectField;
