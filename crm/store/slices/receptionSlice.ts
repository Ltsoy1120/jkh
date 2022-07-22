import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IReception } from "../../models/IReception";

export interface ReceptionState {
  receptions: IReception[];
  reception: IReception;
  isLoading: boolean;
  error: string | null;
}

const initialState: ReceptionState = {
  receptions: [],
  reception: null,
  isLoading: false,
  error: null,
};

export const receptionSlice = createSlice({
  name: "receptions",
  initialState,
  reducers: {
    receptionsFetching: (state) => {
      state.isLoading = true;
    },
    receptionsFetchingSuccess: (state, action: PayloadAction<IReception[]>) => {
      state.isLoading = false;
      state.error = null;
      state.receptions = action.payload;
    },
    receptionsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setReceptionData: (state, action: PayloadAction<IReception>) => {
      state.reception = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.receptions,
      };
    },
  },
});

export const {
  receptionsFetching,
  receptionsFetchingSuccess,
  receptionsFetchingError,
  setReceptionData,
} = receptionSlice.actions;

export const receptionReducer = receptionSlice.reducer;
