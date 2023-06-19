import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllResults } from "app/reducers/results";

export const getAllResultsThunk = createAsyncThunk(
  "getAllResults",
  async (dispatch) => {
    try {
      const { data, status } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/results`
      );
      await dispatch(getAllResults({ data, status }));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      await dispatch(getAllResults({ message: data.message, status }));
    }
  }
);
