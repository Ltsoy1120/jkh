import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IAccount, IAccountLog } from "../../models/IAccount";
import { IContract } from "../../models/IContract";
import { IDevice } from "../../models/IDevice";
import { IApartment, IEntrance, IHouse } from "../../models/IHouse";
import { IProperty } from "../../models/IProperty";

export interface ControlObjectState {
  houses: IHouse[];
  entrances: IEntrance[];
  apartments: IApartment[];
  contracts: IContract[];
  accounts: IAccount[];
  accountLogs: IAccountLog[];
  devices: IDevice[];
  properties: IProperty[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ControlObjectState = {
  houses: [],
  entrances: [],
  apartments: [],
  contracts: [],
  accounts: [],
  accountLogs: [],
  devices: [],
  properties: [],
  isLoading: false,
  error: null,
};

export const controlObjectSlice = createSlice({
  name: "contralObjects",
  initialState,
  reducers: {
    controlObjectsFetching: (state) => {
      state.isLoading = true;
    },
    housesFetchingSuccess: (state, action: PayloadAction<IHouse[]>) => {
      state.isLoading = false;
      state.error = null;
      state.houses = action.payload;
    },
    entrancesFetchingSuccess: (state, action: PayloadAction<IEntrance[]>) => {
      state.isLoading = false;
      state.error = null;
      state.entrances = action.payload;
    },
    apartmentsFetchingSuccess: (state, action: PayloadAction<IApartment[]>) => {
      state.isLoading = false;
      state.error = null;
      state.apartments = action.payload;
    },
    contractsFetchingSuccess: (state, action: PayloadAction<IContract[]>) => {
      state.isLoading = false;
      state.error = null;
      state.contracts = action.payload;
    },
    accountsFetchingSuccess: (state, action: PayloadAction<IAccount[]>) => {
      state.isLoading = false;
      state.error = null;
      state.accounts = action.payload;
    },
    accountLogsFetchingSuccess: (
      state,
      action: PayloadAction<IAccountLog[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.accountLogs = action.payload;
    },
    devicesFetchingSuccess: (state, action: PayloadAction<IDevice[]>) => {
      state.isLoading = false;
      state.error = null;
      state.devices = action.payload;
    },
    propertiesFetchingSuccess: (state, action: PayloadAction<IProperty[]>) => {
      state.isLoading = false;
      state.error = null;
      state.properties = action.payload;
    },
    controlObjectsError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.contralObjects,
      };
    },
  },
});

export const {
  controlObjectsFetching,
  housesFetchingSuccess,
  entrancesFetchingSuccess,
  apartmentsFetchingSuccess,
  contractsFetchingSuccess,
  accountsFetchingSuccess,
  controlObjectsError,
  accountLogsFetchingSuccess,
  devicesFetchingSuccess,
  propertiesFetchingSuccess,
} = controlObjectSlice.actions;

export const controlObjectReducer = controlObjectSlice.reducer;
