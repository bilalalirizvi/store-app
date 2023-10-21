import { store } from "../../store";
import { privateAPI } from "../../config/constant";
import {
  setButtonLoading,
  setIsLoading,
  setOrderData,
} from "../slices/orderSlice";

export const createOrder = async (payload) => {
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/product/create", payload);
    if (res) {
      await getAllOrder({
        search: "",
        page: 1,
        perPage: 10,
        store: localStorage.getItem("storeId"),
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Create Order Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};

export const getAllOrder = async (payload) => {
  try {
    store.dispatch(setIsLoading(true));
    const res = await privateAPI.post("/product/get-all", payload);
    if (res) {
      store.dispatch(setOrderData(res.data));
      return true;
    }
  } catch (error) {
    console.log(
      "Get All Order Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setIsLoading(false));
  }
};

export const updateOrder = async (payload) => {
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/product/update", payload);
    if (res) {
      await getAllOrder({
        search: "",
        page: 1,
        perPage: 10,
        store: localStorage.getItem("storeId"),
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Update Order Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};

export const deleteOrder = async (id) => {
  try {
    const res = await privateAPI.delete(`/product/delete/${id}`);
    if (res) {
      await getAllOrder({
        search: "",
        page: 1,
        perPage: 10,
        store: localStorage.getItem("storeId"),
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Delete Order Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  }
};
