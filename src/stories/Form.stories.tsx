import type { Meta, StoryObj } from "@storybook/react";
import AddPatientForm from "../features/AddPatientForm/AddPatientForm";

const meta: Meta<typeof AddPatientForm> = {
  component: AddPatientForm,
  title: "Add Patient Form",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AddPatientForm>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    primary: true,
  },
  render: () => <AddPatientForm />,
};
