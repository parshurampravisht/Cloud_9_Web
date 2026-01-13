import { createSlice } from "@reduxjs/toolkit";
import type { IGlobalReducesStaticData } from "./global.types";
// import { initialPersonalDetailsState } from 'src/components/register';

const initialState: IGlobalReducesStaticData = {
  countries: [],
  profession: [],
  personalDetailsId: "",
  // personalDetails: {
  //   id: "",
  //   name: "",
  //   age_range: "",
  //   gender: "",
  //   country: "Select",
  //   profession: "Select",
  //   email: "",
  //   phone_number: "",
  // },
  investmentDetails: {
    currency: "dollar",
    liquidity: "Select",
    investment_tenure: "Select",
    expected_roi: "Select",
    annual_income: 0,
    regular_payout_amount: "Select",
  },
  questionCategory: [],
  usersList: {},
  financialGoals: [],
  customerDetails: {},
  iterationId: "",
  iterationDashboardDetails: [],
  customerIterationQuesAnswer: [],
};

const staticDataSlice = createSlice({
  name: "staticData",
  initialState,
  reducers: {
    setPersonalDetails(state, action) {
      state.personalDetailsId = action.payload;
    },
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setProfession(state, action) {
      state.profession = action.payload;
    },
    setInvestmentDetails(state, action) {
      state.investmentDetails = action.payload;
    },
    setQuestionCategory(state, action) {
      state.questionCategory = action.payload;
    },
    setUsersList(state, action) {
      state.usersList = action.payload;
    },
    setFinancialGoalList(state, action) {
      state.financialGoals = action.payload;
    },
    setCustomerDetails(state, action) {
      state.customerDetails = action.payload;
    },
    setIterationId(state, action) {
      state.iterationId = action.payload;
    },
    setCustomerIterationDashboardDetails(state, action) {
      state.iterationDashboardDetails = action.payload;
    },
    setCustomerIterationQuesAnswer(state, action) {
      state.customerIterationQuesAnswer = action.payload;
    },
  },
});

export default staticDataSlice.reducer;

export const {
  setCountries,
  setProfession,
  setPersonalDetails,
  setInvestmentDetails,
  setQuestionCategory,
  setUsersList,
  setFinancialGoalList,
  setCustomerDetails,
  setIterationId,
  setCustomerIterationDashboardDetails,
  setCustomerIterationQuesAnswer,
} = staticDataSlice.actions;
