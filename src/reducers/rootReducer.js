// rootReducer.js
import { combineReducers } from "redux";

import postReducer from "./postReducer";
import testReducer from "./testReducer";

// Use ES6 object literal shorthand syntax to define the object shape
export default combineReducers({
  posts: postReducer,
  tests: testReducer
});
