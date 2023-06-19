import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: {
    data: [],
    message: "",
    status: 0,
  },
  addStudent: {
    message: "",
    status: 0,
  },
};

const student = createSlice({
  name: "student",
  initialState,
  reducers: {
    getAllStudents: (state, action) => {
      state.students = {
        ...state.students,
        data: action.payload.data,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    addStudent: (state, action) => {
      state.addStudent.message = action.payload.message;
      state.addStudent.status = action.payload.status;
    },
    resetStudent: () => {
      return { ...initialState };
    },
  },
});

export const { getAllStudents, addStudent, resetStudent } = student.actions;
export default student.reducer;
