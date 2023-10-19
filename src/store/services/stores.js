import { store } from "../../store";
import { privateAPI } from "../../config/constant";
import {
  setButtonLoading,
  setIsLoading,
  setStoreData,
} from "../slices/StoresSlice";

export const createStore = async (payload) => {
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/shop/create", payload);
    if (res) {
      await getAllStore({
        search: "",
        page: 1,
        perPage: 10,
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Create Store Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};

export const getAllStore = async (payload) => {
  try {
    store.dispatch(setIsLoading(true));
    const res = await privateAPI.post("/shop/get-all", payload);
    if (res) {
      store.dispatch(setStoreData(res.data));
      return true;
    }
  } catch (error) {
    console.log(
      "Get All Store Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setIsLoading(false));
  }
};

export const updateStore = async (payload) => {
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/shop/update", payload);
    if (res) {
      await getAllStore({
        search: "",
        page: 1,
        perPage: 10,
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Update Store Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};

export const deleteStore = async (id) => {
  try {
    const res = await privateAPI.delete(`/shop/delete/${id}`);
    if (res) {
      await getAllStore({
        search: "",
        page: 1,
        perPage: 10,
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Delete Store Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  }
};
