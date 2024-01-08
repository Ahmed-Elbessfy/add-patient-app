import { FC } from "react";
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
