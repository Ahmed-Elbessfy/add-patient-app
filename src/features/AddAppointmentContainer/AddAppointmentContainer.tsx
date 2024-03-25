import { FC } from "react";
import { DataSource } from "../AddAppointmentForm/AddAppointmentForm.types";
import AddAppointmentForm from "../AddAppointmentForm/AddAppointmentForm";
import { addAppointmentFieldsConfig } from "./newAppointConfig";

const actions = {
  patient_name: {
    getOptions: (x: string) => {
      const users = [
        {
          label: "Ahmed Taha",
          value: "ahmed_taha",
          number: "01113305408",
        },
        {
          label: "Sameha Taha",
          value: "sameha_taha",
          number: "02233454646",
        },
        {
          label: "Dina Ali",
          value: "dina_ali",
          number: "083434353453",
        },
        {
          label: "Omar Ahmed",
          value: "omar_ahmed",
          number: "035456657757",
        },
        {
          label: "Fatma Mohmammed",
          value: "fatma_mohammed",
          number: "0565758887456",
        },
      ];

      return users.filter((user) => {
        return user.label.toLowerCase().includes(x);
      });
    },
  },
  "new_patient.referenceId": {
    defaultValue: () => {
      return 234;
    },
  },
  doctor: {
    options: () => {
      return [
        {
          __typename: "User",
          id: "0cf4df88-795d-4af0-9697-15bff082a2f7",
          name: "Doctor Samy",
          isDoctor: true,
          disabled: false,
          calendarSettings: null,
        },
        {
          __typename: "User",
          id: "ad78e2b7-6f46-4360-9f74-20c69e014652",
          name: "Doctor Basher",
          isDoctor: true,
          disabled: false,
          calendarSettings: null,
        },
        {
          __typename: "User",
          id: "2dd62990-5274-4f4e-b1a5-c7586f727f5c",
          name: "Doctor Kill",
          isDoctor: true,
          disabled: false,
          calendarSettings: null,
        },
        {
          __typename: "User",
          id: "548f78cc-e6d5-4a57-9395-74b79ed0e1ef",
          name: "Doctor Local",
          isDoctor: true,
          disabled: false,
          calendarSettings: null,
        },
      ].map((doc) => {
        return {
          label: doc.name,
          value: doc.id,
        };
      });
    },
  },
  room: {
    options: () => {
      return [
        {
          value: "Room 1",
          label: "Room 1",
        },
        {
          value: "Room 2",
          label: "Room 2",
        },
        {
          value: "Room 3",
          label: "Room 3",
        },
        {
          value: "Room 4",
          label: "Room 4",
        },
      ];
    },
  },
  "new_patient.tempPatient": {
    visibility: () => {
      return false;
    },
  },
};

const dataSource: DataSource = {};

const AddAppointmentContainer: FC = () => {
  const onSubmit = (data: unknown) => console.log(data);
  const formConfig = {
    fieldsConfig: addAppointmentFieldsConfig,
    onSubmit,
    dataSourceObject: dataSource,
    actionsObject: actions,
  };
  return (
    <div>
      <AddAppointmentForm {...formConfig} />
    </div>
  );
};

export default AddAppointmentContainer;
