import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addResult } from "../reducers/results";

export const addResultThunk = createAsyncThunk(
  "addResult",
  async ({ values, dispatch }) => {
    try {
      const { data, status } = await axios.post(
        "http://localhost:5000/api/addresult",
        values
      );
      dispatch(addResult({ message: data.message, status: status }));
      return data;
    } catch (error) {
      const { data, status } = await error.response;
      dispatch(addResult({ message: data.message, status: status }));
    }
  }
);
