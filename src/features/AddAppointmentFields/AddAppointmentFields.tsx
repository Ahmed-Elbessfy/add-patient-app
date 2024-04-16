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
import { FieldCountryComponentProps } from "../CountryField/CountryField.type";
import { FieldPhoneComponentProps } from "../PhoneField/PhoneField.type";
import { FieldDualComponentProps } from "../DualField/DualField.type";
import { FieldIDComponentProps } from "../IDField/IDField.type";
import { FieldUploadFileComponentProps } from "../UploadField/UploadField.type";

import TextField from "../TextField/TextField";
import NumberField from "../NumberField/NumberField";
import TextAreaField from "../TextAreaField/TextAreaField";
import SelectField from "../SelectField/SelectField";
import RadioField from "../RadioField/RadioField";
import DateField from "../DateField/DateField";
import TimeField from "../TimeField/TimeField";
import SwitchField from "../SwitchField/SwitchField";
import CheckboxField from "../CheckboxField/CheckboxField";
import CountryField from "../CountryField/CountryField";
import PhoneField from "../PhoneField/PhoneField";
import DualField from "../DualField/DualField";
import IDField from "../IDField/IDField";
import UploadField from "../UploadField/UploadField";

import { GeneralFieldConfig } from "./AddAppointmentInputs.type";
import { useController } from "react-hook-form";
import ErrorMsg from "../../patterns/ErrorMsg/ErrorMsg";

const AddAppointmentFields: FC<GeneralFieldConfig> = (props) => {
  const { fieldType, name, control, ...fieldProps } = props;

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

  // AddAppointmentField requires "CONTROL" of useForm to register field value
  // dual field uses AddAppointmentField internally to render its children to register fields values
  // so control is passed to dual field to be passed again to AddAppointmentField component
  const dualProps = { ...props, control };

  return (
    <>
      {/* Text Input  */}
      {fieldType === "text" && (
        <TextField {...({ ...inputProps } as FieldTextComponentProps)} />
      )}

      {/* Text Input  */}
      {fieldType === "phone" && (
        <PhoneField {...(inputProps as FieldPhoneComponentProps)} />
      )}

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
      {fieldType === "country" && (
        <CountryField {...(inputProps as FieldCountryComponentProps)} />
      )}

      {/* Radio Input  */}
      {fieldType === "radio" && (
        <RadioField {...(inputProps as FieldRadioComponentProps)} />
      )}

      {/* Date Picker Input  */}
      {fieldType === "datePicker" && (
        <DateField {...(inputProps as FieldDateComponentProps)} />
      )}

      {/* Time Picker Input  */}
      {fieldType === "timePicker" && (
        <TimeField {...(inputProps as FieldTimeComponentProps)} />
      )}

      {/* Switch Input  */}
      {fieldType === "switch" && (
        <SwitchField {...(inputProps as FieldSwitchComponentProps)} />
      )}

      {/* Checkbox Input  */}
      {fieldType === "checkbox" && (
        <CheckboxField {...(inputProps as FieldCheckboxComponentProps)} />
      )}

      {/* Dual Field  */}
      {fieldType === "dualField" && (
        <DualField {...(dualProps as FieldDualComponentProps)} />
      )}

      {/* ID Field  */}
      {fieldType === "idField" && (
        <IDField {...(inputProps as FieldIDComponentProps)} />
      )}

      {/* To prevent doubling error messages in case of using dual field  */}
      {/* No need to error message for switch & checkbox fields and take useless area  */}
      {!["dualField", "switch", "checkbox"].includes(fieldType) && (
        <ErrorMsg error={error} />
      )}

      {fieldType === "uploadFile" && (
        <UploadField {...(inputProps as FieldUploadFileComponentProps)} />
      )}
    </>
  );
};

export default AddAppointmentFields;
