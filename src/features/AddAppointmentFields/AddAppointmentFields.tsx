import { FC } from "react";
import { Rule } from "../AddAppointmentFields/AddAppointmentInputs.type";
import TextField from "../TextField/TextField";
import NumberField from "../NumberField/NumberField";
import TextAreaField from "../TextAreaField/TextAreaField";
import SelectField from "../SelectField/SelectField";
import RadioField from "../RadioField/RadioField";
import DateField from "../DateField/DateField";
import TimeField from "../TimeField/TimeField";
import SwitchField from "../SwitchField/SwitchField";
import CheckboxField from "../CheckboxField/CheckboxField";
import {
  CustomRuleFields,
  FieldCheckboxComponentProps,
  FieldConfig,
  FieldDateComponentProps,
  FieldNumberComponentProps,
  FieldRadioComponentProps,
  FieldSelectComponentProps,
  FieldSwitchComponentProps,
  FieldTextAreaComponentProps,
  FieldTextComponentProps,
  FieldTimeComponentProps,
} from "./AddAppointmentInputs.type";

const AddAppointmentFields: FC<FieldConfig> = (props) => {
  const isMatched = (rules: Rule[], currentValues: CustomRuleFields[]) => {
    if (currentValues && currentValues.includes("new_patient.switch_date_age"))
      console.log(rules, currentValues);

    if (!rules || !currentValues) return true;
    // if any condition met, disable field
    for (let i = 0; i < currentValues.length; i++) {
      if (currentValues[i] === rules[i].value) return false;
    }
    // No condition is meet so don't disable field
    return true;
  };

  return (
    <>
      {isMatched(props.visibility, props.visibilityFields) && (
        <>
          {/* Each field is rendered based on type internally to prevent typescript errors at field component  */}

          {/* Text Input  */}
          {props.fieldType === "text" && (
            <TextField {...(props as FieldTextComponentProps)} />
          )}

          {/* Number Input  */}
          {props.fieldType === "number" && (
            <NumberField {...(props as FieldNumberComponentProps)} />
          )}

          {/* Textarea Input  */}
          {props.fieldType === "textarea" && (
            <TextAreaField {...(props as FieldTextAreaComponentProps)} />
          )}

          {/* Select Input  */}
          {props.fieldType === "select" && (
            <SelectField {...(props as FieldSelectComponentProps)} />
          )}

          {/* Radio Input  */}
          {props.fieldType === "radio" && (
            <RadioField {...(props as FieldRadioComponentProps)} />
          )}

          {/* Date Picker Input  */}
          {props.fieldType === "datePicker" && (
            <DateField {...(props as FieldDateComponentProps)} />
          )}

          {/* Time Picker Input  */}
          {props.fieldType === "timePicker" && (
            <TimeField {...(props as FieldTimeComponentProps)} />
          )}

          {/* Switch Input  */}
          {props.fieldType === "switch" && (
            <SwitchField {...(props as FieldSwitchComponentProps)} />
          )}

          {/* Checkbox Input  */}
          {props.fieldType === "checkbox" && (
            <CheckboxField {...(props as FieldCheckboxComponentProps)} />
          )}
        </>
      )}
    </>
  );
};

export default AddAppointmentFields;
