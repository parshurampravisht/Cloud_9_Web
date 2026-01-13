import { createSelector } from "reselect";

const globalData = (state) => state.globalData;

const staticData = (state) => state.staticData;

export const getAlert = createSelector(globalData, (state) => state.alert);

export const getLoader = createSelector(globalData, (state) => state.loader);

export const getBreadCrumb = createSelector(globalData, (state) => state.breadCrumb);

export const getQuestionCategory = createSelector(staticData, (state) => state.questionCategory);
