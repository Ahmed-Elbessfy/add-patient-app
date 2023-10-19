import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing";
import { ADD_PATIENT } from "../src/features/AddPatientForm/addPateintFormGQ";

const newPatientData = {
  id: 7,
  key: 7,
  name: "Ahmed Taha",
  email: "ahmed@gmail.com",
  age: 34,
  gender: "male",
  phone: "01113334445",
  country: "Russia",
};

const parameters: Preview["parameters"] = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
    globalMock: [
      {
        request: {
          query: ADD_PATIENT,
          variables: newPatientData,
        },
        result: { data: newPatientData },
      },
    ],
  },
};

const preview: Preview = {
  parameters,
};

export const decorators: Decorator[] = [
  (Story) => (
    <MockedProvider
      mocks={parameters.apolloClient.globalMock}
      addTypename={false}
    >
      <Story />
    </MockedProvider>
  ),
];

export default preview;
