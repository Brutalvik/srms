import { combineReducers } from "@reduxjs/toolkit";
import theme from "./reducers/theme";
import student from "./reducers/student";
import course from "./reducers/course";

export const rootReducer = combineReducers({
  theme: theme,
  student: student,
  course: course,
});
