import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IContractor } from "../../models/IContractor";
import { IUser } from "../../models/IUser";

export interface ContractorState {
  contractors: IContractor[];
  employees: IUser[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContractorState = {
  contractors: [],
  employees: [],
  isLoading: false,
  error: null,
};

export const contractorSlice = createSlice({
  name: "contractors",
  initialState,
  reducers: {
    contractorsFetching: (state) => {
      state.isLoading = true;
    },
    contractorsFetchingSuccess: (
      state,
      action: PayloadAction<IContractor[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.contractors = action.payload;
    },
    contractorsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    employeesFetchingSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = null;
      state.employees = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.contractors,
      };
    },
  },
});

export const {
  contractorsFetching,
  contractorsFetchingSuccess,
  contractorsFetchingError,
  employeesFetchingSuccess,
} = contractorSlice.actions;

export const contractorReducer = contractorSlice.reducer;
