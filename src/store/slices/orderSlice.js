import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  buttonLoading: false,
  data: [],
  count: 0,
};

export const orderSlice = createSlice({
  name: "orders",
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
    setOrderData: (state, { payload }) => {
      return {
        ...state,
        data: payload.data,
        count: payload.count,
      };
    },
  },
});

export const { setIsLoading, setButtonLoading, setOrderData } =
  orderSlice.actions;

export default orderSlice.reducer;
