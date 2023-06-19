import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addCourse } from "../reducers/course";

export const addCourseThunk = createAsyncThunk(
  "addStudent",
  async ({ values, dispatch }) => {
    try {
      const { data, status } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/addcourse`,
        values
      );
      await dispatch(addCourse({ message: data.message, status: status }));
      return data;
    } catch (error) {
      const { data, status } = await error.response;
      await dispatch(addCourse({ message: data.message, status: status }));
    }
  }
);
