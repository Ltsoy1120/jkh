import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { INotification } from "../../models/INotification";

export interface NotificationState {
  notifications: INotification[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NotificationState = {
  notifications: [],
  isLoading: false,
  error: null
};

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notificationsFetching: state => {
      state.isLoading = true;
    },
    notificationsFetchingSuccess: (
      state,
      action: PayloadAction<INotification[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.notifications = action.payload;
    },
    notificationsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setNotificationsData: (state, action: PayloadAction<INotification[]>) => {
      state.notifications = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.notifications
      };
    }
  }
});

export const {
  notificationsFetching,
  notificationsFetchingSuccess,
  notificationsFetchingError,
  setNotificationsData
} = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
