import { AppThunk } from "../../store";
import {
  getListService,
  saveService,
  updateService,
  patchService,
  /*
  deleteService, */
} from "../../Services/global";
// import { setAlert, setLoader } from "./index";
import { SERVICES } from "../../Services";
import {
  setCountries,
  setProfession,
  setPersonalDetails,
  setInvestmentDetails,
  setQuestionCategory,
  setUsersList,
  // setFinancialGoalList,
  setCustomerDetails,
  setIterationId,
  setCustomerIterationDashboardDetails,
  setCustomerIterationQuesAnswer,
} from "./staticDataSlice";
import {
  IFinanceGoalsPayload,
  IInvestedDetailsForm,
  IPersonalDetailsForm,
} from "./global.types";
// import { ERROR_MSG } from "../../../constant";

export const fetchProfile = (): AppThunk => async () => {
  const res = await getListService(SERVICES.static + "risk/profiles");
  return res;
};

export const fetchCustomerList =
  (offsetQuery): AppThunk<Promise<any>> =>
    async (dispatch) => {
      const res = await getListService(
        SERVICES.customer + SERVICES.personal + offsetQuery,
        true
      );
      if (res.data) {
        dispatch(setUsersList(res.data));
        return res.data.customers || [];
      }
    };

export const searchCustomerList =
  (query: string, offset: number, limit: number, status = '-1'): AppThunk<Promise<any>> =>
    async (dispatch) => {
      const queryString = status === '-1' ? `?offset=${offset}&limit=${limit}&${SERVICES.query}=${query}` : `?offset=${offset}&limit=${limit}&${SERVICES.query}=${query}&displayStatus=${status}`;
      const res = await getListService(
        SERVICES.customer + SERVICES.personal + queryString,
        true
      );
      if (res.data) {
        dispatch(setUsersList(res.data));
        return res.data.customers || [];
      }
    };

export const fetchCountries = (): AppThunk => async (dispatch) => {
  const res = await getListService(SERVICES.static + SERVICES.countries);
  if (res) dispatch(setCountries(res.data));
};

export const fetchProfession = (): AppThunk => async (dispatch) => {
  const res = await getListService(SERVICES.static + SERVICES.profession);
  if (res) dispatch(setProfession(res.data));
};

export const fetchQuestionCategory = (): AppThunk => async (dispatch) => {
  const res = await getListService(SERVICES.questionCategory, true);
  if (res) dispatch(setQuestionCategory(res.data));
};

export const fetchUserDetail =
  (customerId: string): AppThunk<Promise<any>> =>
    async (dispatch) => {
      const res = await getListService(
        `${SERVICES.customer}${SERVICES.dashboard}/${customerId}`,
        true
      );
      if (res) {
        dispatch(setCustomerDetails(res.data));
        return res.data;
      }
    };

export const fetchUserIterationDashboardDetail =
  (customerId: string): AppThunk<Promise<any>> =>
    async (dispatch) => {
      const res = await getListService(
        `${SERVICES.customer}${SERVICES.iterations}/${SERVICES.details}/${customerId}`,
        true
      );
      if (res) {
        dispatch(setCustomerIterationDashboardDetails(res.data));
        return res.data;
      }
    };

export const fetchQuestion =
  (id: any): AppThunk<Promise<any>> =>
    async () => {
      const res = await getListService(
        SERVICES.questions + "?category=" + id,
        true
      );
      return res?.data;
    };

export const fetchQuestionAnswerIteration =
  (id: any): AppThunk<Promise<any>> =>
    async (dispatch) => {
      const res = await getListService(
        `${SERVICES.customer}${SERVICES.iteration}/${SERVICES.question}/${SERVICES.answer}/${id}`,
        true
      );
      if (res?.data) {
        dispatch(setCustomerIterationQuesAnswer(res.data));
        return res.data;
      }
    };

//// ---- save services ----- ///

export const saveAnswers =
  (payload: any, id: string): AppThunk =>
    async (dispatch) => {
      const res = await saveService(
        `${SERVICES.customer}iteration/${id}`,
        // `${SERVICES.customer}${id}/iteration`,
        payload
      );
      if (res) {
        dispatch(setIterationId(res.data));
        return res?.data;
      }
    };
export const login =
  (payload: any): AppThunk =>
    async (dispatch) => {
      const res = await saveService(
        `${SERVICES.login}`,
        payload, true
      );
      if (res) {
        dispatch(setIterationId(res.data));
        return res?.data;
      }
    };
export const logout =
  (payload: any): AppThunk =>
    async (dispatch) => {
      const res = await saveService(
        `${SERVICES.logout}`,
        payload, true
      );
      if (res) {
        dispatch(setIterationId(res.data));
        return res?.data;
      }
    };
export const savePersonalDetails =
  (payload: IPersonalDetailsForm): AppThunk<Promise<IPersonalDetailsForm>> =>
    async (dispatch) => {
      const res = await saveService(
        SERVICES.customer + SERVICES.personal,
        payload
      );
      if (res) {
        dispatch(setPersonalDetails(res.data));
        return res.data;
      }
    };

///// ---- update service ----- ////
export const updatePersonalDetails =
  (
    payload: IPersonalDetailsForm,
    id: string
  ): AppThunk<Promise<IPersonalDetailsForm>> =>
    async (dispatch) => {
      const res = await updateService(
        SERVICES.customer + SERVICES.personal,
        payload,
        id
      );
      if (res) {
        dispatch(setPersonalDetails(res.data));
        return res.data;
      }
    };

export const updatePersonalDetailsStatus =
  (
    id: string,
    displayStatus: string
  ): AppThunk<Promise<IPersonalDetailsForm>> =>
    async () => {
      const res = await patchService(
        SERVICES.customer + SERVICES.personal + '/' + id + '/' + displayStatus
      );
      if (res) {
        //dispatch(setPersonalDetails(res.data));
        alert('Status updated successfully');
        return res.data;
      }
    };

export const saveInvestedDetails =
  (payload: IInvestedDetailsForm, id: string): AppThunk =>
    async (dispatch) => {
      const res = await updateService(
        SERVICES.customer + SERVICES.investment_details,
        payload,
        id
      );
      if (res) dispatch(setInvestmentDetails(res.data));
    };

export const saveFinancialGoals =
  (payload: IFinanceGoalsPayload, id: string): AppThunk<Promise<any>> =>
    async () => {
      const res = await updateService(
        SERVICES.customer + SERVICES.financial_goals,
        payload,
        id
      );
      if (res) {
        // dispatch(setFinancialGoalList(res.data));
        return res.data;
      }
    };
