import { FC, useState } from "react";
// import { FieldConfig } from "../AddAppointmentFields/AddAppointmentInputs.type";
// import { Switch } from "antd";
import AddAppointmentFields from "../AddAppointmentFields/AddAppointmentFields";
import { Switch } from "antd";
import { Rule } from "../AddAppointmentFields/AddAppointmentInputs.type";

const DualField: FC = (props) => {
  // console.log(props);
  const { fieldType, id, testId, onChange, fieldsOptions } = props;

  // const { t } = useTranslation("translation");

  // const toggleAgeBirthData = {
  //   category: "field",
  //   fieldType: "switch",
  //   id: "new_patient.switch_date_age",
  //   testId: "new_patient.switch_date_age",
  //   name: "new_patient.switch_date_age",
  //   checkedChildren: "apInputs.add_new.switch_date_age.checked",
  //   unCheckedChildren: "apInputs.add_new.switch_date_age.unchecked",
  //   defaultChecked: false,
  //   validation: [],
  // };

  // const ageData = {
  //   category: "field",
  //   fieldType: "number",
  //   id: "new_patient.age",
  //   testId: "new_patient.age",
  //   name: "new_patient.age",
  //   label: "apInputs.add_new.age.label",
  //   validation: [
  //     {
  //       type: "minimum",
  //       minimum: 1,
  //     },
  //     {
  //       type: "maximum",
  //       maximum: 200,
  //     },
  //   ],
  //   visibility: [
  //     {
  //       field: "new_patient.switch_date_age",
  //       value: true,
  //     },
  //   ],
  //   visibilityFields: ["new_patient.switch_date_age"],
  // };

  // const birthDateData = {
  //   category: "field",
  //   fieldType: "datePicker",
  //   id: "new_patient.birthDate",
  //   testId: "new_patient.birthDate",
  //   name: "new_patient.birthDate",
  //   label: "apInputs.add_new.birthDate.label",
  //   placeholder: "apInputs.add_new.birthDate.placeholder",
  //   format: "DD/MM/YYYY",
  //   validation: [
  //     {
  //       type: "earlier_than",
  //       date: "add 0 day",
  //     },
  //   ],
  //   dateLimit: {
  //     status: "after",
  //     date: "add 0 day",
  //   },
  //   visibility: [
  //     {
  //       field: "new_patient.switch_date_age",
  //       value: false,
  //     },
  //   ],
  //   visibilityFields: ["new_patient.switch_date_age"],
  // };

  return (
    <>
      {fieldType === "dualField" && (
        <div>
          <Switch />
          {fieldsOptions.map((field) => {
            return (
              <AddAppointmentFields
                {...field}
                visibilityFields={field.visibility.map(
                  (rule: Rule) => rule.value
                )}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default DualField;
