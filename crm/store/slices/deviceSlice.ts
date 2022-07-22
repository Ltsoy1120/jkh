import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IDevice } from "../../models/IDevice";

export interface DeviceState {
  devices: IDevice[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DeviceState = {
  devices: [],
  isLoading: false,
  error: null
};

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    devicesFetching: state => {
      state.isLoading = true;
    },
    devicesFetchingSuccess: (state, action: PayloadAction<IDevice[]>) => {
      state.isLoading = false;
      state.error = null;
      state.devices = action.payload;
    },
    devicesFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.devices
      };
    }
  }
});

export const { devicesFetching, devicesFetchingSuccess, devicesFetchingError } =
  deviceSlice.actions;

export const deviceReducer = deviceSlice.reducer;
