import { FC } from "react";
import { FieldTextComponentProps } from "../TextField/TextField.type";
import { FieldTextAreaComponentProps } from "../TextAreaField/TextAreaField.type";
import { FieldNumberComponentProps } from "../NumberField/NumberField.type";
// import { FieldRadioComponentProps } from "../RadioField/RadioField.type";
import { FieldSelectComponentProps } from "../SelectField/SelectField.type";
// import { FieldSwitchComponentProps } from "../SwitchField/SwitchField.type";
// import { FieldDateComponentProps } from "../DateField/DateField.type";
// import { FieldTimeComponentProps } from "../TimeField/TimeField.type";
import { FieldCheckboxComponentProps } from "../CheckboxField/CheckboxField.type";
// import { FieldCountryComponentProps } from "../CountryField/CountryField.type";

import TextField from "../TextField/TextField";
import NumberField from "../NumberField/NumberField";
import TextAreaField from "../TextAreaField/TextAreaField";
import SelectField from "../SelectField/SelectField";
// import RadioField from "../RadioField/RadioField";
// import DateField from "../DateField/DateField";
// import TimeField from "../TimeField/TimeField";
// import SwitchField from "../SwitchField/SwitchField";
import CheckboxField from "../CheckboxField/CheckboxField";
// import CountryField from "../CountryField/CountryField";

import { GeneralFieldConfig } from "./AddAppointmentInputs.type";
// import PhoneField from "../PhoneField/PhoneField";
// import { FieldPhoneComponentProps } from "../PhoneField/PhoneField.type";
import { useController } from "react-hook-form";
import ErrorMsg from "../../patterns/ErrorMsg/ErrorMsg";

const AddAppointmentFields: FC<GeneralFieldConfig> = (props) => {
  const { fieldType, name, control, id, testId, ...fieldProps } = props;

  // register field value to form state
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name: name,
    control: control,
  });

  // general field properties
  const inputProps = {
    ...fieldProps,
    value,
    onChange,
    status: error && "error",
  };

  return (
    <div id={id} date-testid={testId}>
      {/* Each field is rendered based on type internally to prevent typescript errors at field component  */}

      {/* Text Input  */}
      {fieldType === "text" && (
        <TextField {...({ ...inputProps } as FieldTextComponentProps)} />
      )}

      {/* Text Input  */}
      {/* {fieldType === "phone" && (
        <PhoneField {...(props as FieldPhoneComponentProps)} />
      )} */}

      {/* Number Input  */}
      {fieldType === "number" && (
        <NumberField
          {...({ ...inputProps, fieldType } as FieldNumberComponentProps)}
        />
      )}

      {/* Textarea Input  */}
      {fieldType === "textarea" && (
        <TextAreaField {...(inputProps as FieldTextAreaComponentProps)} />
      )}

      {/* Select Input  */}
      {fieldType === "select" && (
        <SelectField {...(inputProps as FieldSelectComponentProps)} />
      )}

      {/* Country Input  */}
      {/* {fieldType === "country" && (
        <CountryField {...(props as FieldCountryComponentProps)} />
      )} */}

      {/* Radio Input  */}
      {/* {fieldType === "radio" && (
        <RadioField {...(props as FieldRadioComponentProps)} />
      )} */}

      {/* Date Picker Input  */}
      {/* {fieldType === "datePicker" && (
        <DateField {...(props as FieldDateComponentProps)} />
      )} */}

      {/* Time Picker Input  */}
      {/* {fieldType === "timePicker" && (
        <TimeField {...(props as FieldTimeComponentProps)} />
      )} */}

      {/* Switch Input  */}
      {/* {fieldType === "switch" && (
        <SwitchField {...(props as FieldSwitchComponentProps)} />
      )} */}

      {/* Checkbox Input  */}
      {fieldType === "checkbox" && (
        <CheckboxField {...(inputProps as FieldCheckboxComponentProps)} />
      )}

      <ErrorMsg error={error} />
    </div>
  );
};

export default AddAppointmentFields;
