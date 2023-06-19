import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllCourses } from "../reducers/course";

export const deleteCourseThunk = createAsyncThunk(
  "deleteCourse",
  async ({ id, dispatch }) => {
    try {
      const { data, status } = await axios.delete(
        `http://localhost:5000/api/deletecourse?id=${id}`
      );
      await dispatch(
        getAllCourses({
          message: data.message,
          status: status,
          data: data.data,
        })
      );
    } catch (error) {
      const { data, status } = await error.response;
      await dispatch(getAllCourses({ message: data.message, status: status }));
    }
  }
);
