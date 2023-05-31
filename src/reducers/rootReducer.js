// rootReducer.js
import { combineReducers } from "redux";

import postReducer from "./postReducer";
import testReducer from "./testReducer";
import menuReducer from "./menuReducer";
import productlinksReducer from "./productlinksReducer";
import Homecardsreducer from "./Homecardsreducer";

import footerHeadingReducer from "./footerHeadingReducer";
import FooterBottomreducer from "./FooterBottomreducer";

// Use ES6 object literal shorthand syntax to define the object shape
export default combineReducers({
  posts: postReducer,
  tests: testReducer,
  menuData: menuReducer,
  productlinkData: productlinksReducer,
  Homecardslist: Homecardsreducer,
  footerHeadingData: footerHeadingReducer,
  footerbottomData: FooterBottomreducer
});
