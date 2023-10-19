import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import themeSlice from "./slices/themeSlice";
import usersSlice from "./slices/usersSlice";
import storesSlice from "./slices/storesSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
    users: usersSlice,
    stores: storesSlice,
    products: productSlice,
  },
});
