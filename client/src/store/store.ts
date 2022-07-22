import {
  ThunkAction,
  Action,
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { appealReducer } from "./slices/appealSlice";
import { deviceDataReducer } from "./slices/devicedataSlice";
import { deviceReducer } from "./slices/deviceSlice";
import { notificationReducer } from "./slices/notificationSlice";
import { receiptReducer } from "./slices/receiptSlice";
import { requestsReducer } from "./slices/requestSlice";
import { usersReducer } from "./slices/userSlice";
import { visitReducer } from "./slices/visitSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  requests: requestsReducer,
  appeals: appealReducer,
  visits: visitReducer,
  receipts: receiptReducer,
  devices: deviceReducer,
  notifications: notificationReducer,
  deviceData: deviceDataReducer
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
