import type { Meta, StoryObj } from "@storybook/react";
import DynamicForm from "./DynamicForm";
import { DynamicFormConfiguration } from "./DynamicForm.types";
import { inputsConfig } from "./formConfig";

// Stories Meta data
const meta: Meta<typeof DynamicForm> = {
  component: DynamicForm,
  title: "Dynamic Add Patient Form",
  tags: ["autodocs"],
};

export default meta;

// Create Story type tp used for each story
type Story = StoryObj<typeof DynamicForm>;

// creating Stories

const formConfig: DynamicFormConfiguration = {
  heading: "formHeader",
  inputsConfig,
  onSubmit: (data) => {
    return data;
  },
};

export const Basic: Story = {
  render: () => <DynamicForm {...formConfig} />,
};

/*

resources :

- https://storybook.js.org/addons/storybook-addon-i18n
- https://storybook.js.org/docs/react/essentials/toolbars-and-globals#advanced-usage
- https://www.youtube.com/watch?v=DuJ_gmSncLM
- https://storybook.js.org/blog/internationalize-components-with-storybook/
- https://www.youtube.com/watch?v=sr0Pahym3VM

*/
