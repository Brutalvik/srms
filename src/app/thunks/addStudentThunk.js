import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addStudent } from "../reducers/student";

export const addStudentThunk = createAsyncThunk(
  "addStudent",
  async ({ values, dispatch }) => {
    try {
      const { data, status } = await axios.post(
        "http://localhost:5000/api/addstudent",
        values
      );
      await dispatch(addStudent({ message: data.message, status: status }));
      return data;
    } catch (error) {
      const { data, status } = await error.response;
      await dispatch(addStudent({ message: data.message, status: status }));
    }
  }
);
