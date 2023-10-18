import { store } from "../../store";
import { privateAPI } from "../../config/constant";
import {
  setButtonLoading,
  setIsLoading,
  setUsersData,
} from "../slices/usersSlice";

export const createUser = async (payload) => {
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/user/create", payload);
    if (res) {
      await getAllUsers({
        search: "",
        page: 1,
        perPage: 10,
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Create User Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};

export const getAllUsers = async (payload) => {
  try {
    store.dispatch(setIsLoading(true));
    const response = await privateAPI.post("/user/get-all", payload);
    store.dispatch(setUsersData(response.data));
  } catch (error) {
    console.log(
      "Get All Users Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setIsLoading(false));
  }
};

export const updateUser = async (payload) => {
  console.log("🚀 ~ file: users.js:47 ~ updateUser ~ payload:", payload);
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/user/update", payload);
    console.log("RESPONSE>>>", res);
    if (res) {
      await getAllUsers({
        search: "",
        page: 1,
        perPage: 10,
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log("ERROR>>>:", error);
    console.log(
      "Update Users Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};
