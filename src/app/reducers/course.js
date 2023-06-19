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
      state.courses.data = action.payload.data;
      state.courses.message = action.payload.message;
      state.courses.status = action.payload.status;
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
