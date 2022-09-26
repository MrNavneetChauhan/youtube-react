import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { SearchContextProvider } from "./context/SearchContext";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { ColorContextProvider } from "./context/ColorContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ChakraProvider>
      <ReduxProvider store={store}>
        <ColorContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </ColorContextProvider>
      </ReduxProvider>
    </ChakraProvider>
);
