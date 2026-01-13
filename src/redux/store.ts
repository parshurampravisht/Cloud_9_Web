import { useSelector as _useSelector } from "react-redux";

import { type Action, type ThunkAction, configureStore } from "@reduxjs/toolkit";

import GlobalReducer from "./slices/global";
import StaticDataReducer from "./slices/global/staticDataSlice";
import type { IGlobalReduces, IGlobalReducesStaticData } from "./slices/global/global.types";

export interface IStore {
  globalData: IGlobalReduces;
  staticData: IGlobalReducesStaticData
}

// Remove <IStore> here — let configureStore infer state shape
const store = configureStore({
  reducer: {
    globalData: GlobalReducer,
    staticData: StaticDataReducer,
  },
});
export default store;
export const useSelector = (cb: (state: IStore) => IStore) => {
  return _useSelector(cb);
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
