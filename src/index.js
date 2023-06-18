import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

const theme = extendTheme({
  colors: {
    text: {
      dark: "#000000",
      light: "#ffffff",
    },
    background: {
      dark: "#242425",
      light: "#CBCBD0",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);
