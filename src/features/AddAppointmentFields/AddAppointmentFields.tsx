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
import { FieldConfig } from "./AddAppointmentInputs.type";

const AddAppointmentFields: FC<FieldConfig> = (props) => {
  return (
    <>
      {/* Each field is rendered based on type internally to prevent typescript errors at field component  */}
      {/* Text Input  */}
      <TextField {...props} />

      {/* Number Input  */}
      <NumberField {...props} />

      {/* Textarea Input  */}
      <TextAreaField {...props} />

      {/* Select Input  */}
      <SelectField {...props} />

      {/* Radio Input  */}
      <RadioField {...props} />

      {/* Date Picker Input  */}
      <DateField {...props} />

      {/* Time Picker Input  */}
      <TimeField {...props} />

      {/* Switch Input  */}
      <SwitchField {...props} />

      {/* Checkbox Input  */}
      <CheckboxField {...props} />
    </>
  );
};

export default AddAppointmentFields;
