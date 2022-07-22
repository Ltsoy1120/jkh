import Router from "next/router";
import { EmployeesFilterData } from "../../components/Filters/EmployeesFilter";
import { User } from "../../pages/register";
import authService from "../../services/auth.service";
import cookieService, { removeAuthData } from "../../services/cookie.service";
import userService from "../../services/user.service";
import { contractorsFetching } from "../slices/contractorSlice";
import {
  authRequested,
  authRequestFailed,
  authRequestSuccess,
  employeesFetching,
  employeesFetchingSuccess,
  employeesFetchingError,
  userLoggedOut,
  usersFetching,
  usersFetchingError,
  usersFetchingSuccess,
  setUserByIdData,
  setEmployeeData,
} from "../slices/userSlice";
import { AppDispatch, AppState } from "../store";

export const register = (state: User) => async (dispatch: AppDispatch) => {
  dispatch(authRequested());
  try {
    const response = await authService.register(state);
    cookieService.setTokens(response.data.authData);
    dispatch(authRequestSuccess(response.data.authData));
    Router.push("/company");
  } catch (error: any) {
    dispatch(authRequestFailed(error.response?.data?.message));
  }
};

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(authRequested());
    try {
      const response = await authService.login(email, password);
      console.log(response);
      cookieService.setTokens(response.data.authData);
      dispatch(authRequestSuccess(response.data.authData));
      const isAdmin = response.data.authData.user.role === "admin";
      const companyId = response.data.authData.user.company;
      isAdmin
        ? Router.push("/companies")
        : Router.push(`/company/${companyId}`);
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

// employees
export const addEmployee =
  (companyId: string, employeeData: FormData) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(employeesFetching());
      const { data } = await userService.addEmployee(employeeData);
      console.log(data);
      dispatch(setEmployeeData(data));
      // Router.push(`/company/${companyId}/employees`);
    } catch (error) {
      dispatch(employeesFetchingError((error as Error).message));
    }
  };

export const editEmployee = async (
  companyId: string,
  employeeId: string,
  employeeData: FormData
) => {
  try {
    await userService.editEmployee(employeeId, employeeData);
    Router.push(`/company/${companyId}/employees`);
  } catch (error) {}
};

export const deleteEmployee = async (companyId: string, employeeId: string) => {
  try {
    await userService.deleteEmployee(employeeId);
    Router.push(`/company/${companyId}/employees`);
  } catch (error) {}
};

export const getFilteredEmployees =
  (filterData: EmployeesFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(employeesFetching());
      const response = await userService.getFilteredEmployees(filterData);
      dispatch(employeesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(employeesFetchingError((error as Error).message));
    }
  };

export const getEmployeesByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(employeesFetching());
      const response = await userService.getEmployeesByCompany(companyId);
      dispatch(employeesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(employeesFetchingError((error as Error).message));
    }
  };

export const getUserById =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(usersFetching());
      const response = await userService.getUserById(userId);
      dispatch(setUserByIdData(response.data));
    } catch (error) {
      dispatch(usersFetchingError((error as Error).message));
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
