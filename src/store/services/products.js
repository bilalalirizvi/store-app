import { store } from "../../store";
import { privateAPI } from "../../config/constant";
import {
  setButtonLoading,
  setIsLoading,
  setProductData,
} from "../slices/productSlice";

export const createProduct = async (payload) => {
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/product/create", payload);
    if (res) {
      await getAllProduct({
        search: "",
        page: 1,
        perPage: 10,
        store: localStorage.getItem("storeId"),
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Create Product Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};

export const getAllProduct = async (payload) => {
  try {
    store.dispatch(setIsLoading(true));
    const res = await privateAPI.post("/product/get-all", payload);
    if (res) {
      store.dispatch(setProductData(res.data));
      return true;
    }
  } catch (error) {
    console.log(
      "Get All Product Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setIsLoading(false));
  }
};

export const updateProduct = async (payload) => {
  try {
    store.dispatch(setButtonLoading(true));
    const res = await privateAPI.post("/product/update", payload);
    if (res) {
      await getAllProduct({
        search: "",
        page: 1,
        perPage: 10,
        store: localStorage.getItem("storeId"),
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Update Product Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  } finally {
    store.dispatch(setButtonLoading(false));
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await privateAPI.delete(`/product/delete/${id}`);
    if (res) {
      await getAllProduct({
        search: "",
        page: 1,
        perPage: 10,
        store: localStorage.getItem("storeId"),
      });
      return res?.data?.message;
    }
  } catch (error) {
    console.log(
      "Delete Product Error >>>",
      error?.response?.data?.message || "Server Error"
    );
  }
};
