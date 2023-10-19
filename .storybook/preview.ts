import type { Preview } from "@storybook/react";
import { MockedProvider } from '@apollo/client/testing';
import { ADD_PATIENT } from './../src/features/AddPatientForm/addPateintFormGQ';


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
    globalMock: [
    {
      request: {
        query: ADD_PATIENT,
        variables: { data: newPatientData },
      },
      result: { data: newPatientData },
    },
    ]
  },
};

export default preview;
