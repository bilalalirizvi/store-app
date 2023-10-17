import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
  },
});
