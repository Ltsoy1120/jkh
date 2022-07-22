import Router from "next/router";
import { HeadData, RequisitesData } from "../../models/IContractor";
import contractorService from "../../services/contractor.service";
import userService from "../../services/user.service";
import {
  contractorsFetching,
  contractorsFetchingSuccess,
  contractorsFetchingError,
  employeesFetchingSuccess,
} from "../slices/contractorSlice";
import { AppDispatch, AppState } from "../store";

export const addNewContractor =
  (contractorData: FormData, headData: HeadData) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(contractorsFetching());
      const { data } = await contractorService.addNewContractor(contractorData);
      console.log("data", data);
      if (data.status >= 400) {
        throw new Error(data.message);
      }
      const contractorId = data.contractor._id;
      await contractorService.addContractorHead(contractorId, headData);
      Router.push(`/contractors`);
    } catch (error) {
      dispatch(contractorsFetchingError((error as Error).message));
    }
  };

export const addRequisitesOfContractor = async (
  companyId: string,
  contractorId: string,
  requisitesData: RequisitesData
) => {
  try {
    await contractorService.addRequisitesOfContractor(
      contractorId,
      requisitesData
    );
    Router.push(`/company/${companyId}/contractors`);
  } catch (error) {}
};

export const addTypesOfWork = async (
  companyId: string,
  contractorId: string,
  typesOfWorkData: string[]
) => {
  try {
    await contractorService.addTypesOfWork(contractorId, typesOfWorkData);
    Router.push(`/company/${companyId}/contractors`);
  } catch (error) {}
};

export const addEmployee = async (
  companyId: string,
  employeeData: FormData
) => {
  try {
    await userService.addEmployee(employeeData);
    Router.push(`/company/${companyId}/contractors`);
  } catch (error) {}
};

export const editTypesOfWork = async (
  companyId: string,
  contractorId: string,
  typesOfWorkData: string[]
) => {
  try {
    await contractorService.editTypesOfWork(contractorId, typesOfWorkData);
    Router.push(
      `/company/${companyId}/contractors/${contractorId}/settings/typesOfWork`
    );
  } catch (error) {}
};

export const getEmployeesByContractor =
  (contractorId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(contractorsFetching());
      const response = await contractorService.getEmployeesByContractor(
        contractorId
      );
      dispatch(employeesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(contractorsFetchingError((error as Error).message));
    }
  };

export const getContractorsByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(contractorsFetching());
      const response = await contractorService.getContractorsByCompany(
        companyId
      );
      dispatch(contractorsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(contractorsFetchingError((error as Error).message));
    }
  };

export const getAllContractors = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(contractorsFetching());
    const response = await contractorService.getAllContractors();
    dispatch(contractorsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(contractorsFetchingError((error as Error).message));
  }
};

export const deleteContractor = async (
  companyId: string,
  contractorId: string
) => {
  try {
    await contractorService.deleteContractor(contractorId);
    Router.push(`/company/${companyId}/contractors`);
  } catch (error) {}
};

export const editContractor = async (
  companyId: string,
  contractorId: string,
  contractorData: FormData
) => {
  try {
    await contractorService.editContractor(contractorId, contractorData);
    Router.push(
      `/company/${companyId}/contractors/${contractorId}/settings/contractor`
    );
  } catch (error) {}
};

export const editHead = async (
  companyId: string,
  contractorId: string,
  headData: HeadData
) => {
  try {
    await contractorService.editHead(contractorId, headData);
    Router.push(
      `/company/${companyId}/contractors/${contractorId}/settings/head`
    );
  } catch (error) {}
};

export const editRequisites = async (
  companyId: string,
  contractorId: string,
  requisitesData: RequisitesData
) => {
  try {
    await contractorService.editRequisites(contractorId, requisitesData);
    Router.push(
      `/company/${companyId}/contractors/${contractorId}/settings/requisites`
    );
  } catch (error) {}
};

export const getContractors = () => (state: AppState) =>
  state.contractors.contractors;
export const getContractorEmployees = () => (state: AppState) =>
  state.contractors.employees;

export const getError = () => (state: AppState) => state.contractors.error;

// export const getFilteredContractors =
//   (filterData: AppealsFilterData) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(appealsFetching());
//       const response = await appealService.getFilteredAppeals(filterData);
//       dispatch(appealsFetchingSuccess(response.data));
//     } catch (error) {
//       dispatch(appealsFetchingError((error as Error).message));
//     }
//   };

// export const getAppeals = () => (state: AppState) => state.appeals.appeals;
// export const addLeaderCompany = async (
//   companyId: string,
//   leaderData: LeaderData
// ) => {
//   try {
//     await contractorService.addLeaderCompany(companyId, leaderData);
//     Router.push(`/company/${companyId}`);
//   } catch (error) {}
// };

// export const addRequisitesCompany = async (
//   companyId: string,
//   requisitesData: RequisitesData
// ) => {
//   try {
//     await contractorService.addRequisitesCompany(companyId, requisitesData);
//     Router.push(`/company/${companyId}`);
//   } catch (error) {}
// };

// export const deleteCompany = async (companyId: string) => {
//   try {
//     await contractorService.deleteCompany(companyId);
//     Router.push(`/companies`);
//   } catch (error) {}
// };

// export const deleteLeader = async (companyId: string) => {
//   try {
//     await contractorService.deleteLeader(companyId);
//     Router.push(`/company/${companyId}`);
//   } catch (error) {}
// };

// export const deleteRequisites = async (companyId: string) => {
//   try {
//     await contractorService.deleteRequisites(companyId);
//     Router.push(`/company/${companyId}`);
//   } catch (error) {}
// };
