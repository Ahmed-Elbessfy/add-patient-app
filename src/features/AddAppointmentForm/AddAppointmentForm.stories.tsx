import type { Meta, StoryObj } from "@storybook/react";
import AddAppointmentForm from "./AddAppointmentForm";
import { AddAppointmentFormProps } from "./AddAppointmentForm.types";
import { addAppointmentFieldsConfig } from "../AddAppointmentContainer/newAppointConfig";

// Stories MEta Data
const meta: Meta<typeof AddAppointmentForm> = {
  component: AddAppointmentForm,
  title: "Add Appointment Form",
  tags: ["autodocs"],
};

export default meta;

// Create Story type to used for each story
type Story = StoryObj<typeof AddAppointmentForm>;

const formConfig: AddAppointmentFormProps = {
  fieldsConfig: addAppointmentFieldsConfig,
  onSubmit: (data) => data,
};

export const Basic: Story = {
  render: () => <AddAppointmentForm {...formConfig} />,
};
