import { FC } from "react";
import { DataSource } from "../AddAppointmentForm/AddAppointmentForm.types";
import AddAppointmentForm from "../AddAppointmentForm/AddAppointmentForm";
import { addAppointmentFieldsConfig } from "./newAppointConfig";

const fetchDoctors = () => {
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
};
const searchPatients = (txt: string): { value: string; label: string }[] => {
  console.log("Searched Text : ", txt);
  return [
    {
      value: "options",
      label: "options",
    },
  ];
};

const events = {
  patient_name: {
    searchPatients,
  },
  doctor: {
    fetchDoctors: fetchDoctors(),
  },
};

const dataSource: DataSource = {
  doctor: {
    options: events.doctor.fetchDoctors,
  },
  room: {
    options: ["Room 1", "Room 2", "Room 3", "Room 4"],
  },
  "new_patient.tempPatient": {
    visibility: true,
  },
  patient_name: {
    options: events.patient_name.searchPatients,
  },
  // "new_patient.referenceId": {
  //   referenceIDValue: "87000",
  // },
};

const AddAppointmentContainer: FC = () => {
  const onSubmit = (data: unknown) => console.log(data);
  const formConfig = {
    fieldsConfig: addAppointmentFieldsConfig,
    onSubmit,
    dataSourceObject: dataSource,
  };
  return (
    <div>
      <AddAppointmentForm {...formConfig} />
    </div>
  );
};

export default AddAppointmentContainer;
