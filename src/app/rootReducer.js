import { combineReducers } from "@reduxjs/toolkit";
import theme from "./reducers/theme";

export const rootReducer = combineReducers({
  theme: theme,
});
