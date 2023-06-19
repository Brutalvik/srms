import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addResult } from "../reducers/results";

export const addResultThunk = createAsyncThunk(
  "addResult",
  async ({ values, dispatch }) => {
    try {
      const { data, status } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/addresult`,
        values
      );
      await dispatch(addResult({ message: data.message, status: status }));
      return data;
    } catch (error) {
      const { data, status } = await error.response;
      await dispatch(addResult({ message: data.message, status: status }));
    }
  }
);
