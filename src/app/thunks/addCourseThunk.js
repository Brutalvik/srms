import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addCourse } from "../reducers/course";

export const addCourseThunk = createAsyncThunk(
  "addStudent",
  async ({ values, dispatch }) => {
    try {
      const { data, status } = await axios.post(
        "http://localhost:5000/api/addcourse",
        values
      );
      dispatch(addCourse({ message: data.message, status: status }));
      return data;
    } catch (error) {
      const { data, status } = await error.response;
      dispatch(addCourse({ message: data.message, status: status }));
    }
  }
);
