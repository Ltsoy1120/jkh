import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IReceipt } from "../../models/IReceipt";

export interface ReceiptState {
  receipts: IReceipt[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ReceiptState = {
  receipts: [],
  isLoading: false,
  error: null
};

export const receiptSlice = createSlice({
  name: "receipts",
  initialState,
  reducers: {
    receiptsFetching: state => {
      state.isLoading = true;
    },
    receiptsFetchingSuccess: (state, action: PayloadAction<IReceipt[]>) => {
      state.isLoading = false;
      state.error = null;
      state.receipts = action.payload;
    },
    receiptsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.receipts
      };
    }
  }
});

export const {
  receiptsFetching,
  receiptsFetchingSuccess,
  receiptsFetchingError
} = receiptSlice.actions;

export const receiptReducer = receiptSlice.reducer;
