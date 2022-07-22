import Router from "next/router";
import { PassportOfficeFilterData } from "../../components/Filters/ControlObjects/PassportOfficeFilter";
import { SubjectData } from "../../models/ISubject";
import subjectService from "../../services/subject.service";
import {
  subjectsFetching,
  subjectsFetchingSuccess,
  subjectsFetchingError,
} from "../slices/subjectSlice";
import { AppDispatch, AppState } from "../store";

export const createSubject = async (subjectData: SubjectData) => {
  try {
    const { data } = await subjectService.createSubject(subjectData);
    Router.push(
      `/controlObjects/passportOffice/${data.subject._id}/properties`
    );
  } catch (error) {}
};

export const editSubject = async (
  subjectId: string,
  subjectData: SubjectData
) => {
  try {
    await subjectService.editSubject(subjectId, subjectData);
    Router.push(`/controlObjects/passportOffice/${subjectId}/editSubject`);
  } catch (error) {}
};

export const deleteSubject = async (companyId: string, subjectId: string) => {
  try {
    await subjectService.deleteSubject(subjectId);
    Router.push(`/company/${companyId}/controlObjects/passportOffice`);
  } catch (error) {}
};

export const addProperty = async (
  subjectId: string,
  propertyData: FormData
) => {
  try {
    await subjectService.addProperty(subjectId, propertyData);
    Router.push(`/controlObjects/passportOffice/${subjectId}/properties`);
  } catch (error) {}
};

export const editProperty = async (
  subjectId: string,
  propertyId: string,
  propertyData: FormData
) => {
  try {
    await subjectService.editProperty(propertyId, propertyData);
    Router.push(`/controlObjects/passportOffice/${subjectId}/properties`);
  } catch (error) {}
};

export const deleteProperty = async (subjectId: string, propertyId: string) => {
  try {
    await subjectService.deleteProperty(subjectId, propertyId);
    Router.push(`/controlObjects/passportOffice/${subjectId}/properties`);
  } catch (error) {}
};

export const addRegister = async (
  subjectId: string,
  registerData: FormData
) => {
  try {
    await subjectService.addRegister(subjectId, registerData);
    Router.push(`/controlObjects/passportOffice/${subjectId}/register`);
  } catch (error) {}
};

export const editRegister = async (
  subjectId: string,
  registerData: FormData
) => {
  try {
    await subjectService.editRegister(subjectId, registerData);
    Router.push(`/controlObjects/passportOffice/${subjectId}/register`);
  } catch (error) {}
};

export const getSubjectsByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(subjectsFetching());
      const response = await subjectService.getSubjectsByCompany(companyId);
      dispatch(subjectsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(subjectsFetchingError((error as Error).message));
    }
  };

export const getFilteredSubjects =
  (filterData: PassportOfficeFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(subjectsFetching());
      const response = await subjectService.getFilteredSubjects(filterData);
      dispatch(subjectsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(subjectsFetchingError((error as Error).message));
    }
  };
export const getSubjects = () => (state: AppState) => state.subjects.subjects;
export const getError = () => (state: AppState) => state.subjects.error;

// export const login =
//   (email: string, password: string) => async (dispatch: AppDispatch) => {
//     dispatch(authRequested());
//     try {
//       const response = await authService.login(email, password);
//       console.log(response);
//       cookieService.setTokens(response.data.authData);
//       dispatch(authRequestSuccess(response.data.authData));
//       const isAdmin = response.data.authData.user.role === "admin";
//       const companyId = response.data.authData.user.company;
//       isAdmin
//         ? Router.push("/companies")
//         : Router.push(`/company/${companyId}`);
//     } catch (error: any) {
//       dispatch(authRequestFailed(error.response?.data?.message));
//     }
//   };

// export const logOut = () => async (dispatch: AppDispatch) => {
//   dispatch(authRequested());
//   try {
//     await authService.logout();
//     removeAuthData();
//     dispatch(userLoggedOut());
//     Router.push("/");
//   } catch (error: any) {
//     dispatch(authRequestFailed(error.response?.data?.message));
//   }
// };

// export const checkAuth = () => async (dispatch: AppDispatch) => {
//   dispatch(authRequested());
//   try {
//     const response = await authService.refresh();
//     cookieService.setTokens(response.data.authData);
//     dispatch(authRequestSuccess(response.data.authData));
//   } catch (error: any) {
//     dispatch(authRequestFailed(error.response?.data?.message));
//   }
// };

// // employees
// export const addEmployee = async (
//   companyId: string,
//   employeeData: FormData
// ) => {
//   try {
//     await userService.addEmployee(employeeData);
//     Router.push(`/company/${companyId}/employees`);
//   } catch (error) {}
// };

// export const editEmployee = async (
//   companyId: string,
//   employeeId: string,
//   employeeData: FormData
// ) => {
//   try {
//     await userService.editEmployee(employeeId, employeeData);
//     Router.push(`/company/${companyId}/employees`);
//   } catch (error) {}
// };

// export const getUserById =
//   (userId: string) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(usersFetching());
//       const response = await userService.getUserById(userId);
//       dispatch(setUserByIdData(response.data));
//     } catch (error) {
//       dispatch(usersFetchingError((error as Error).message));
//     }
//   };
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(usersFetching());
//     const response = await userService.getUsers();
//     dispatch(usersFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(usersFetchingError((error as Error).message));
//   }
// };
