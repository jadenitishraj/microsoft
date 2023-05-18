import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore } from 'redux';
import { Provider } from "react-redux";
import store from './store';

import Main from "./Main"; // Update the import statement



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>   
      <Main />
    </Provider>
  </StrictMode>
);
