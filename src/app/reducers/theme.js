import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  darkMode: false,
  hamburgerIsOpen: false,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleHamburger: (state) => {
      state.hamburgerIsOpen = !state.hamburgerIsOpen;
    },
  },
});

export const { toggleDarkMode, toggleHamburger } = theme.actions;
export default theme.reducer;
