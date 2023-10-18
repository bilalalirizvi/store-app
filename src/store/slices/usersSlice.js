import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  buttonLoading: false,
  data: [],
  count: 0,
};

export const usersSlice = createSlice({
  name: "users",
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
    setUsersData: (state, { payload }) => {
      return {
        ...state,
        data: payload.data,
        count: payload.count,
      };
    },
  },
});

export const { setIsLoading, setButtonLoading, setUsersData } =
  usersSlice.actions;

export default usersSlice.reducer;
