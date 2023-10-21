import { store } from "../../store";
import { privateAPI } from "../../config/constant";
import {
  setButtonLoading,
  setIsLoading,
  setUsersData,
} from "../slices/usersSlice";

const getUsers = async () => {
  await getAllUsers({
    search: "",
    page: 1,
    perPage: 10,
    store: localStorage.getItem("storeId"),
  });
};

export const createUser = async (payload) => {
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/user/create", payload);
    if (res) {
      await getUsers();
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
    const res = await privateAPI.post("/user/get-all", payload);
    if (res) {
      store.dispatch(setUsersData(res.data));
      return true;
    }
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
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/user/update", payload);
    if (res) {
      await getUsers();
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Update Users Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};

export const deleteUser = async (id) => {
  try {
    // store.dispatch(setButtonLoading(true));
    const res = await privateAPI.delete(`/user/delete/${id}`);
    if (res) {
      await getUsers();
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Update Users Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  }
  //   finally {
  //     store.dispatch(setButtonLoading(false));
  //   }
};
