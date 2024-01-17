import { FC } from "react";
import { FieldTextComponentProps } from "../TextField/TextField.type";
import { FieldTextAreaComponentProps } from "../TextAreaField/TextAreaField.type";
import { FieldNumberComponentProps } from "../NumberField/NumberField.type";
import { FieldRadioComponentProps } from "../RadioField/RadioField.type";
import { FieldSelectComponentProps } from "../SelectField/SelectField.type";
import { FieldSwitchComponentProps } from "../SwitchField/SwitchField.type";
import { FieldDateComponentProps } from "../DateField/DateField.type";
import { FieldTimeComponentProps } from "../TimeField/TimeField.type";
import { FieldCheckboxComponentProps } from "../CheckboxField/CheckboxField.type";

import TextField from "../TextField/TextField";
import NumberField from "../NumberField/NumberField";
import TextAreaField from "../TextAreaField/TextAreaField";
import SelectField from "../SelectField/SelectField";
import RadioField from "../RadioField/RadioField";
import DateField from "../DateField/DateField";
import TimeField from "../TimeField/TimeField";
import SwitchField from "../SwitchField/SwitchField";
import CheckboxField from "../CheckboxField/CheckboxField";
import { FieldConfig } from "./AddAppointmentInputs.type";

const AddAppointmentFields: FC<FieldConfig> = (props) => {
  return (
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
  );
};

export default AddAppointmentFields;
