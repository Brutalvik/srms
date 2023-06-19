import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: {
    data: [],
    message: "",
    status: 0,
  },
  addResult: {
    message: "",
    status: 0,
  },
};

const results = createSlice({
  name: "results",
  initialState,
  reducers: {
    getAllResults: (state, action) => {
      state.results = {
        ...state.results,
        data: action.payload.data,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    addResult: (state, action) => {
      state.addResult.message = action.payload.message;
      state.addResult.status = action.payload.status;
    },
    resetResults: () => {
      return { ...initialState };
    },
  },
});

export const { getAllResults, addResult, resetResults } = results.actions;
export default results.reducer;
