import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: {
    data: [],
    message: "",
    status: 0,
  },
  addCourse: {
    message: "",
    status: 0,
  },
};

const course = createSlice({
  name: "course",
  initialState,
  reducers: {
    getAllCourses: (state, action) => {
      state.courses = {
        ...state.courses,
        data: action.payload.data,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    addCourse: (state, action) => {
      state.addCourse.message = action.payload.message;
      state.addCourse.status = action.payload.status;
    },
    resetCourse: () => {
      return { ...initialState };
    },
  },
});

export const { getAllCourses, addCourse, resetCourse } = course.actions;
export default course.reducer;
