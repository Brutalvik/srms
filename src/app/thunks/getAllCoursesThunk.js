import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllCourses } from "../reducers/course";

export const getAllCoursesThunk = createAsyncThunk(
  "getAllCourses",
  async (dispatch) => {
    try {
      const { data, status } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/courses`
      );
      await dispatch(getAllCourses({ data, status }));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      await dispatch(getAllCourses({ message: data.message, status }));
    }
  }
);
