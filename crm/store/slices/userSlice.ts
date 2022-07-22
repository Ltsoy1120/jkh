import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IAuthUser } from "../../models/IAuthUser";
import { IUser } from "../../models/IUser";
import { UserResponse } from "../../models/response/UserResponse";
import { AppState } from "../store";

export interface UserState {
  authData: IAuthUser | null;
  userData: IUser | null;
  users: IUser[];
  userByIdData: IUser;
  employees: IUser[];
  employeeData: UserResponse;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  authData: null,
  userData: null,
  users: [],
  userByIdData: null,
  employees: [],
  employeeData: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching: (state) => {
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
    setUserByIdData: (state, action: PayloadAction<IUser>) => {
      state.userByIdData = action.payload;
    },
    authRequested: (state) => {
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
    userLoggedOut: (state) => {
      state.authData = null;
      state.userData = null;
    },
    employeesFetching: (state) => {
      state.isLoading = true;
    },
    employeesFetchingSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = null;
      state.employees = action.payload;
    },
    employeesFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setEmployeeData: (state, action: PayloadAction<UserResponse>) => {
      state.employeeData = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
});

export const {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
  setUserData,
  setUserByIdData,
  authRequested,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  employeesFetching,
  employeesFetchingSuccess,
  employeesFetchingError,
  setEmployeeData,
} = userSlice.actions;

export const getUserData = (state: AppState) => state.users.userData;
export const getUserByIdData = () => (state: AppState) =>
  state.users.userByIdData;
export const getEmployees = () => (state: AppState) => state.users.employees;
export const getError = (state: AppState) => state.users.error;

export const usersReducer = userSlice.reducer;
