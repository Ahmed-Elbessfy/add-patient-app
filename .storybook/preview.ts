import type { Preview } from "@storybook/react";
import { MockedProvider } from '@apollo/client/testing';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters = {
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
};

export default preview;
