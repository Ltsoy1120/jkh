import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IAuthUser } from "../../models/IAuthUser";
import { IUser } from "../../models/IUser";
import { AppState } from "../store";

export interface UserState {
  authData: IAuthUser | null;
  userData: IUser | null;
  users: IUser[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  authData: null,
  userData: null,
  users: [],
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching: state => {
      state.isLoading = true;
    },
    usersFetchingSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
    usersFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
    },
    authRequested: state => {
      state.isLoading = true;
    },
    authRequestSuccess: (state, action: PayloadAction<IAuthUser>) => {
      state.isLoading = false;
      state.error = null;
      state.authData = action.payload;
    },
    authRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userLoggedOut: state => {
      state.authData = null;
      state.userData = null;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users
      };
    }
  }
});

export const {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
  setUserData,
  authRequested,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut
} = userSlice.actions;

export const getUserData = (state: AppState) => state.users.userData;
export const getError = (state: AppState) => state.users.error;

export const usersReducer = userSlice.reducer;
