import { combineReducers } from "@reduxjs/toolkit";
import theme from "./reducers/theme";
import student from "./reducers/student";
import course from "./reducers/course";
import results from "./reducers/results";

export const rootReducer = combineReducers({
  theme: theme,
  student: student,
  course: course,
  results: results,
});
