import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IRequest } from "../../models/IRequest";

export interface RequestState {
  requests: IRequest[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RequestState = {
  requests: [],
  isLoading: false,
  error: null
};

export const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    requestsFetching: state => {
      state.isLoading = true;
    },
    requestsFetchingSuccess: (state, action: PayloadAction<IRequest[]>) => {
      state.isLoading = false;
      state.error = null;
      state.requests = action.payload;
    },
    requestsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setRequestData: (state, action: PayloadAction<IRequest[]>) => {
      state.requests = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.requests
      };
    }
  }
});

export const {
  requestsFetching,
  requestsFetchingSuccess,
  requestsFetchingError,
  setRequestData
} = requestSlice.actions;

export const requestsReducer = requestSlice.reducer;
