import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import themeSlice from "./slices/themeSlice";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
    users: usersSlice,
  },
});
