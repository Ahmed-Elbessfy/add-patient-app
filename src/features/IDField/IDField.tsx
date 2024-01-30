import { ChangeEvent, FC, useEffect, useState } from "react";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { FieldIDComponentProps } from "./IDField.type";

const IDField: FC<FieldIDComponentProps> = (props) => {
  const { id, testId, label, onChange, status, isDisabled } = props;

  const { t } = useTranslation("translation");

  // Local state to register each id value separately
  const [fixedId, setFixedId] = useState<number>(0);
  const [dynamicId, setDynamicId] = useState<string>("");

  useEffect(
    function configID() {
      // here we can fetch the fixed ID from server
      setFixedId(8);

      // register combined value of ID
      onChange(`${fixedId}-${dynamicId}`);
    },
    [dynamicId, fixedId, onChange]
  );

  return (
    <div id={id} data-testid={testId}>
      {label && <label>{t(label)}</label>}

      <Space.Compact style={{ width: "100%" }}>
        {/* Fixed ID fetched and set from Server  */}
        <Input value={fixedId} disabled={true} style={{ width: "80px" }} />
        {/* ID that user can set manually  */}
        <Input
          status={status}
          disabled={isDisabled}
          value={dynamicId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDynamicId(e.target.value);
          }}
        />
      </Space.Compact>
    </div>
  );
};

export default IDField;
