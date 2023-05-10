import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import Main from "./Main"; // Update the import statement

const middleware = [thunk];
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>   
      <Main />
    </Provider>
  </StrictMode>
);
