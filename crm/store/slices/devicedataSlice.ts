import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IDeviceData } from "../../models/IDeviceData";

export interface DeviceDataState {
  deviceData: IDeviceData[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DeviceDataState = {
  deviceData: [],
  isLoading: false,
  error: null
};

export const deviceDataSlice = createSlice({
  name: "deviceData",
  initialState,
  reducers: {
    deviceDataFetching: state => {
      state.isLoading = true;
    },
    deviceDataFetchingSuccess: (
      state,
      action: PayloadAction<IDeviceData[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.deviceData = action.payload;
    },
    deviceDataFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.deviceData
      };
    }
  }
});

export const {
  deviceDataFetching,
  deviceDataFetchingSuccess,
  deviceDataFetchingError
} = deviceDataSlice.actions;

export const deviceDataReducer = deviceDataSlice.reducer;
