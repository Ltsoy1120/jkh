import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IAppeal } from "../../models/IAppeal";

export interface AppealState {
  appeals: IAppeal[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AppealState = {
  appeals: [],
  isLoading: false,
  error: null
};

export const appealSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    appealsFetching: state => {
      state.isLoading = true;
    },
    appealsFetchingSuccess: (state, action: PayloadAction<IAppeal[]>) => {
      state.isLoading = false;
      state.error = null;
      state.appeals = action.payload;
    },
    appealsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.appeals
      };
    }
  }
});

export const { appealsFetching, appealsFetchingSuccess, appealsFetchingError } =
  appealSlice.actions;

export const appealReducer = appealSlice.reducer;
