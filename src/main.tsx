import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import i18next from "./i18n.ts";
import { I18nextProvider } from "react-i18next";
import ErrorBoundary from "./patterns/ErrorBoundaryComp/ErrorBoundary.tsx";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18next}>
        <ErrorBoundary
          fallback={
            <p>
              Something went wrong, you can try again later or reload the page
              or restart the server
            </p>
          }
        >
          <App />
        </ErrorBoundary>
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
