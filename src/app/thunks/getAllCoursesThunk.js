import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllCourses } from "../reducers/course";

export const getAllCoursesThunk = createAsyncThunk(
  "getAllCourses",
  async (dispatch) => {
    try {
      const { data, status } = await axios.get(
        "http://localhost:5000/api/courses"
      );
      dispatch(getAllCourses({ data, status }));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      dispatch(getAllCourses({ message: data.message, status }));
    }
  }
);
