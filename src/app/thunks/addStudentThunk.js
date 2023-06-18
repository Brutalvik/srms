import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addStudent } from "../reducers/student";

export const addStudentThunk = createAsyncThunk(
  "addStudent",
  async ({ values, dispatch }) => {
    console.log("sending...");
    try {
      const { data, status } = await axios.post(
        "http://localhost:5000/api/addstudent",
        values
      );
      dispatch(addStudent({ message: data.message, status: status }));
    } catch (error) {
      const { data, status } = await error.response;
      dispatch(addStudent({ message: data.message, status: status }));
    }
  }
);
