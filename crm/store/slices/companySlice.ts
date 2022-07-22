import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ICompany } from "../../models/ICompany";
import { IOffice } from "../../models/IOffice";

export interface CompanyState {
  companies: ICompany[];
  company: ICompany;
  offices: IOffice[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CompanyState = {
  companies: [],
  company: null,
  offices: [],
  isLoading: false,
  error: null,
};

export const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    companyFetching: (state) => {
      state.isLoading = true;
    },
    companyFetchingSuccess: (state, action: PayloadAction<ICompany>) => {
      state.isLoading = false;
      state.error = null;
      state.company = action.payload;
    },
    companyFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCompaniesData: (state, action: PayloadAction<ICompany[]>) => {
      state.companies = action.payload;
    },
    setCompanyData: (state, action: PayloadAction<ICompany>) => {
      state.company = action.payload;
    },
    officesFetchingSuccess: (state, action: PayloadAction<IOffice[]>) => {
      state.isLoading = false;
      state.error = null;
      state.offices = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.companies,
      };
    },
  },
});

export const {
  companyFetching,
  companyFetchingSuccess,
  companyFetchingError,
  setCompaniesData,
  setCompanyData,
  officesFetchingSuccess,
} = companySlice.actions;

export const companyReducer = companySlice.reducer;
