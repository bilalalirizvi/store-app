import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const themeLocal = localStorage.getItem("theme");
      if (themeLocal === "light") {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
      return {
        ...state,
        theme: themeLocal === "light" ? "dark" : "light",
      };
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
