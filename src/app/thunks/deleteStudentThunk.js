import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllStudents } from "../reducers/student";

export const deleteStudentThunk = createAsyncThunk(
  "deleteStudent",
  async ({ id, dispatch }) => {
    try {
      const { data, status } = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/deletestudent?id=${id}`
      );
      await dispatch(
        getAllStudents({
          message: data.message,
          status: status,
          data: data.data,
        })
      );
      return data;
    } catch (error) {
      const { data, status } = await error.response;
      await dispatch(getAllStudents({ message: data.message, status: status }));
    }
  }
);
