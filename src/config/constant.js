import Axios from "axios";

export const base_url = "http://localhost:3200";

export const publicAPI = Axios.create({ baseURL: base_url });

export const privateAPI = Axios.create({ baseURL: base_url });

// export const attachToken = async () => {
//   const jwt = localStorage.getItem('token')
//   privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`
// }

export const firstLetterCap = (str) => {
  return str !== "" ? str?.charAt(0).toUpperCase() + str.slice(1) : str;
};
