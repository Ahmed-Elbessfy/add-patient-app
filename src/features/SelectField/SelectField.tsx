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

  const handleClear = () => {
    // In case fetching options from an API, empty fetched options on clearing
    if (allowClear && getOptions) setOptionsClone(options);
  };
  const handleSelectForAddress = () => {
    console.log(value);
    fetch("https://jsonplaceholder.typicode.com/todos/10")
      .then((response) => response.json())
      .then((json) => console.log(json));
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
        onClear={handleClear}
        onSelect={handleSelectForAddress}
        mode={allowMultiple ? "multiple" : undefined}
        filterOption={(input, option): boolean => {
          return option?.key.toLowerCase().includes(input.toLowerCase());
        }}
      >
        {optionsClone &&
          optionsClone.map((option) => {
            return (
              <Select.Option key={option.label} value={option.value}>
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
