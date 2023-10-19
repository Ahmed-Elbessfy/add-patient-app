import type { Meta, StoryObj } from "@storybook/react";

import SwitchLangBtn from "./SwitchLangBtn";

const meta: Meta<typeof SwitchLangBtn> = {
  component: SwitchLangBtn,
  title: "Switch Language Button",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SwitchLangBtn>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    primary: true,
  },
};
