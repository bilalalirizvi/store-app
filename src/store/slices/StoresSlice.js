import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  buttonLoading: false,
  data: [],
  count: 0,
};

export const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
    setButtonLoading: (state, { payload }) => {
      return {
        ...state,
        buttonLoading: payload,
      };
    },
    setStoreData: (state, { payload }) => {
      return {
        ...state,
        data: payload.data,
        count: payload.count,
      };
    },
  },
});

export const { setIsLoading, setButtonLoading, setStoreData } =
  storesSlice.actions;

export default storesSlice.reducer;
