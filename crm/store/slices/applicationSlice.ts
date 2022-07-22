import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IApplication } from "../../models/IApplication";

export interface ApplicationState {
  applications: IApplication[];
  application: IApplication;
  isLoading: boolean;
  error: string | null;
}

const initialState: ApplicationState = {
  applications: [],
  application: null,
  isLoading: false,
  error: null,
};

export const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    applicationsFetching: (state) => {
      state.isLoading = true;
    },
    applicationsFetchingSuccess: (
      state,
      action: PayloadAction<IApplication[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.applications = action.payload;
    },
    applicationsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setApplicationsData: (state, action: PayloadAction<IApplication[]>) => {
      state.applications = action.payload;
    },
    setApplicationData: (state, action: PayloadAction<IApplication>) => {
      state.application = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.applications,
      };
    },
  },
});

export const {
  applicationsFetching,
  applicationsFetchingSuccess,
  applicationsFetchingError,
  setApplicationsData,
  setApplicationData,
} = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
