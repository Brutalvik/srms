import { combineReducers } from "@reduxjs/toolkit";
import theme from "./reducers/theme";
import student from "./reducers/student";

export const rootReducer = combineReducers({
  theme: theme,
  student: student,
});
