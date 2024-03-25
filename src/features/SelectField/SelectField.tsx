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
    getOptions,
  } = props;

  // Field local state
  const [optionsClone, setOptionsClone] =
    useState<{ label: string; value: string }[]>(options);
  const { t } = useTranslation("translation");

  // handle adding options with search
  const handleSearch = (searchedItem: string) => {
    // ensure that search is allowed
    if (showSearch) {
      // configure adding new options
      if (allowAddingOptions) {
        const ex = options.find((option) => {
          return option.value
            .toLowerCase()
            .includes(searchedItem.toLowerCase());
        });
        if (!ex) {
          const newOp = [
            ...options,
            { label: searchedItem, value: searchedItem },
          ];
          setOptionsClone(newOp);
        } else {
          setOptionsClone(options);
        }
      }

      // config fetching options
      // Order of calling this configuration is important
      // could not figure out why yet but this configuration needs to be after adding new option config
      if (getOptions) {
        if (searchedItem) {
          const fil = getOptions(searchedItem);
          console.log(fil);
          setOptionsClone(fil);
        } else {
          // if no search, empty options
          setOptionsClone([]);
        }
      }
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
