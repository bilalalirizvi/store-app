import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import themeSlice from "./slices/themeSlice";
import usersSlice from "./slices/usersSlice";
import storesSlice from "./slices/StoresSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
    users: usersSlice,
    stores: storesSlice,
  },
});
