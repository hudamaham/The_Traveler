import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store, persistor } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>{children} </PersistGate>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
