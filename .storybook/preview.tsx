import React, { Suspense, useEffect } from "react";
import type { Decorator, Preview } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing";
import i18next from "../src/i18n";
import { I18nextProvider, useTranslation } from "react-i18next";
import { ADD_PATIENT } from "../src/features/AddPatientForm/AddPatientForm.gql";

// build toolbar change language item
export const globalTypes = {
  locale: {
    name: "locale",
    description: "Change language",
    toolbar: {
      icon: "globe",
      dynamicTitle: true,
      items: ["en", "ar"],
    },
  },
};

// connect i18next with toolbar item we built to change language
const withI18n = (Story, context) => {
  const { locale } = context.globals;

  // When locale Global changes
  // set new locale in i18n
  const { i18n } = useTranslation("lang");
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>Loading Translations ....</div>}>
      <I18nextProvider i18n={i18next}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

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
  withI18n,
];

export default preview;
