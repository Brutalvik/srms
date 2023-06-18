import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllStudents } from "../reducers/student";

export const getAllStudentsThunk = createAsyncThunk(
  "getAllStudents",
  async (dispatch) => {
    console.log("sending...");
    try {
      const { data, status } = await axios.get(
        "http://localhost:5000/api/students"
      );
      dispatch(getAllStudents({ data, status }));
    } catch (error) {
      const { data, status } = error.response;
      dispatch(getAllStudents({ message: data.message, status }));
    }
  }
);
