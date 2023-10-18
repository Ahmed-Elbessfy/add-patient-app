import type { Meta, StoryObj } from '@storybook/react';
import AddPatientForm from "../features/AddPatientForm/AddPatientForm";





const meta: Meta<typeof AddPatientForm> = {
  component: AddPatientForm,
};
export default meta;

type Story = StoryObj<typeof AddPatientForm>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    primary: true,
  },
};