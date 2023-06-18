import { createSelector } from "reselect";

export const selectDarkMode = (state) => state.theme.darkMode;
export const selectHamburgerIsOpen = (state) => state.theme.hamburgerIsOpen;
