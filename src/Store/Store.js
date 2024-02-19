import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import animationParametrsReducer from "./reducers/animationParametrsReducer.js";
import interactiveElements from "./reducers/interactiveElementsReducer.js"
import indicatorFunction from "./reducers/indicatorFunctionReducer.js"

const rootReducer = combineReducers({
  animationParametrsReducer,
  interactiveElements,
  indicatorFunction
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
