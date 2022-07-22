import {
  ThunkAction,
  Action,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { appealReducer } from "./slices/appealSlice";
import { companyReducer } from "./slices/companySlice";
import { contractorReducer } from "./slices/contractorSlice";
import { controlObjectReducer } from "./slices/controlObjectSlice";
import { deviceDataReducer } from "./slices/devicedataSlice";
import { deviceReducer } from "./slices/deviceSlice";
import { notificationReducer } from "./slices/notificationSlice";
import { receiptReducer } from "./slices/receiptSlice";
import { applicationReducer } from "./slices/applicationSlice";
import { subjectReducer } from "./slices/subjectSlice";
import { usersReducer } from "./slices/userSlice";
import { receptionReducer } from "./slices/receptionSlice";
import { taskReducer } from "./slices/taskSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  subjects: subjectReducer,
  companies: companyReducer,
  contractors: contractorReducer,
  controlObjects: controlObjectReducer,
  applications: applicationReducer,
  appeals: appealReducer,
  receptions: receptionReducer,
  receipts: receiptReducer,
  devices: deviceReducer,
  notifications: notificationReducer,
  deviceData: deviceDataReducer,
  tasks: taskReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
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
