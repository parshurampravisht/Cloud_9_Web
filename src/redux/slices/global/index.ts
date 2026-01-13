import { createSlice } from "@reduxjs/toolkit";
import type { IGlobalReduces } from "./global.types";

const initialState: IGlobalReduces = {
  alert: {
    open: false,
    variant: "error",
    message: "",
  },
  loader: false,
  breadCrumb: ""
};

const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setBreadCrumb: (state, action) => {
      state.breadCrumb = action.payload;
    },
  },
});

export default global.reducer;

export const { setAlert, setLoader, setBreadCrumb } = global.actions;
