export interface Country {
  id: number;
  name: string;
}

export interface Profession {
  id: number;
  name: string;
}

export interface IGlobalReduces {
  alert: object;
  loader: boolean;
  breadCrumb: string;
}

export interface IPersonalDetailsForm {
  id?: string;
  name: string;
  age_range: string;
  gender: string;
  country: string;
  profession: string;
  email: string;
  phone_number: string;
}

export interface IInvestedDetailsForm {
  currency: string;
  liquidity: string | number;
  investment_tenure: string | number;
  expected_roi?: string | number;
  annual_income: number;
  regular_payout_amount: string | number;
}
export interface IFinanceDetailsForm {
  currency: string;
  name: string;
  number_of_years: string | number;
  current_estimated_cost: string | number;
  amount_kept_aside: string | number;
}

export interface IFinanceGoalsPayload {
  financial_goals: IFinanceDetailsForm[];
}

export interface IGlobalReducesStaticData {
  countries: Country[];
  profession: Profession[];
  // personalDetails: IPersonalDetailsForm | null;
  personalDetailsId: string;
  iterationId: string | any;
  investmentDetails: IInvestedDetailsForm | null;
  questionCategory: [] | any;
  usersList: [] | any;
  financialGoals: [] | any;
  iterationDashboardDetails: [] | any;
  customerIterationQuesAnswer: [] | any;
  customerDetails: object | any;
}
