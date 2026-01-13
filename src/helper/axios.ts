import axios from "axios";
import contains from "lodash/fp/contains";
import { base_url } from "../constant";

const url = base_url;
export const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

let sessionOut = 0;
axiosInstance.interceptors.response.use(
  (conf) => {
    const {
      config: { url },
      data: { data },
    } = conf;
    if (contains("login", url)) {
      localStorage.setItem("access_token", data.access_token);
    }
    sessionOut = 0;
    return conf;
  },
  (err) => {
    if (
      err?.response?.status === 401 &&
      sessionOut === 0 &&
      err?.response?.data === ""
    ) {
      sessionOut = 1;
      localStorage.clear();
      window.location.href = "/#/login";
      window.alert("Session expired, Please login again.");
    } else if (err?.response?.status === 401 && err?.response?.data !== "") {
      sessionOut = 1;
      window.alert("Invalid user credential");
      window.location.reload();
    }
    return err;
  }
);
