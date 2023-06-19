import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllStudents } from "../reducers/student";

export const getAllStudentsThunk = createAsyncThunk(
  "getAllStudents",
  async (dispatch) => {
    try {
      const { data, status } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/students`
      );
      await dispatch(getAllStudents({ data, status }));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      await dispatch(getAllStudents({ message: data.message, status }));
    }
  }
);
