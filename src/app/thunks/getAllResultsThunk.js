import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllResults } from "app/reducers/results";

export const getAllResultsThunk = createAsyncThunk(
  "getAllResults",
  async (dispatch) => {
    try {
      const { data, status } = await axios.get(
        "http://localhost:5000/api/results"
      );
      dispatch(getAllResults({ data, status }));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      dispatch(getAllResults({ message: data.message, status }));
    }
  }
);
