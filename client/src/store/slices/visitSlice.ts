import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IVisit } from "../../models/IVisit";

export interface VisitState {
  visits: IVisit[];
  isLoading: boolean;
  error: string | null;
}

const initialState: VisitState = {
  visits: [],
  isLoading: false,
  error: null
};

export const visitSlice = createSlice({
  name: "visits",
  initialState,
  reducers: {
    visitsFetching: state => {
      state.isLoading = true;
    },
    visitsFetchingSuccess: (state, action: PayloadAction<IVisit[]>) => {
      state.isLoading = false;
      state.error = null;
      state.visits = action.payload;
    },
    visitsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.visits
      };
    }
  }
});

export const { visitsFetching, visitsFetchingSuccess, visitsFetchingError } =
  visitSlice.actions;

export const visitReducer = visitSlice.reducer;
