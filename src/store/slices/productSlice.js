import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  buttonLoading: false,
  data: [],
  count: 0,
};

export const productSlice = createSlice({
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
    setProductData: (state, { payload }) => {
      return {
        ...state,
        data: payload.data,
        count: payload.count,
      };
    },
  },
});

export const { setIsLoading, setButtonLoading, setProductData } =
  productSlice.actions;

export default productSlice.reducer;
