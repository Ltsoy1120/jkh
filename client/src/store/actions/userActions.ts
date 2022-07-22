import axios from "axios";
import Router from "next/router";
import { destroyCookie, parseCookies } from "nookies";
import { User } from "../../../pages/register";
import { AuthResponse } from "../../models/response/AuthResponse";
import authService from "../../services/auth.service";
import cookieService, { removeAuthData } from "../../services/cookie.service";
import userService from "../../services/user.service";
import {
  authRequested,
  authRequestFailed,
  authRequestSuccess,
  userLoggedOut,
  usersFetching,
  usersFetchingError,
  usersFetchingSuccess
} from "../slices/userSlice";
import { AppDispatch } from "../store";

export const register = (state: User) => async (dispatch: AppDispatch) => {
  dispatch(authRequested());
  try {
    const response = await authService.register(state);
    cookieService.setTokens(response.data.authData);
    dispatch(authRequestSuccess(response.data.authData));
    Router.push("/dashboard");
  } catch (error: any) {
    dispatch(authRequestFailed(error.response?.data?.message));
  }
};

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(authRequested());
    try {
      const response = await authService.login(email, password);
      cookieService.setTokens(response.data.authData);
      dispatch(authRequestSuccess(response.data.authData));
      Router.push("/dashboard");
    } catch (error: any) {
      dispatch(authRequestFailed(error.response?.data?.message));
    }
  };

export const logOut = () => async (dispatch: AppDispatch) => {
  dispatch(authRequested());
  try {
    await authService.logout();
    removeAuthData();
    dispatch(userLoggedOut());
    Router.push("/");
  } catch (error: any) {
    dispatch(authRequestFailed(error.response?.data?.message));
  }
};

export const checkAuth = () => async (dispatch: AppDispatch) => {
  dispatch(authRequested());
  try {
    const response = await authService.refresh();
    cookieService.setTokens(response.data.authData);
    dispatch(authRequestSuccess(response.data.authData));
  } catch (error: any) {
    dispatch(authRequestFailed(error.response?.data?.message));
  }
};

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersFetching());
    const response = await userService.getUsers();
    dispatch(usersFetchingSuccess(response.data));
  } catch (error) {
    dispatch(usersFetchingError((error as Error).message));
  }
};
