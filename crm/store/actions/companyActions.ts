import Router from "next/router";
import { RequisitesData } from "../../models/ICompany";
import { HeadData } from "../../models/IContractor";
import { OfficeData } from "../../models/IOffice";
import { LeaderData } from "../../models/IUser";
import companyService from "../../services/company.service";
import contractorService from "../../services/contractor.service";
import {
  companyFetching,
  companyFetchingError,
  companyFetchingSuccess,
  officesFetchingSuccess,
} from "../slices/companySlice";
import { AppDispatch, AppState } from "../store";

export const createCompany = async (formData: any) => {
  try {
    await companyService.create(formData);
    Router.push("/companies");
  } catch (error) {}
};

export const addLeaderCompany = async (
  companyId: string,
  leaderData: LeaderData
) => {
  try {
    await companyService.addLeaderCompany(companyId, leaderData);
    Router.push(`/company/${companyId}`);
  } catch (error) {}
};

export const addRequisitesCompany = async (
  companyId: string,
  requisitesData: RequisitesData
) => {
  try {
    await companyService.addRequisitesCompany(companyId, requisitesData);
    Router.push(`/company/${companyId}`);
  } catch (error) {}
};

export const addOfficeCompany = async (
  companyId: string,
  officeData: OfficeData
) => {
  try {
    await companyService.addOfficeCompany(companyId, officeData);
    Router.push(`/company/${companyId}`);
  } catch (error) {}
};

export const addContractor =
  (companyId: string, contractorId: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(companyFetching());
      const { data } = await companyService.addContractor(
        companyId,
        contractorId
      );
      if (data.status >= 400) {
        throw new Error(data.message);
      }
      dispatch(companyFetchingSuccess(data.company));
      Router.push(`/company/${companyId}/contractors`);
    } catch (error) {
      dispatch(companyFetchingError((error as Error).message));
    }
  };

export const addNewContractor =
  (companyId: string, contractorData: FormData, headData: HeadData) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(companyFetching());
      const { data } = await companyService.addNewContractor(
        companyId,
        contractorData
      );
      if (data.status >= 400) {
        throw new Error(data.message);
      }
      const contractorId = data.newContractorId;
      await contractorService.addContractorHead(contractorId, headData);
      Router.push(`/company/${companyId}/contractors`);
    } catch (error) {
      dispatch(companyFetchingError((error as Error).message));
    }
  };

export const editCompany = async (companyId: string, formData: any) => {
  try {
    await companyService.editCompany(companyId, formData);
    Router.push(`/company/${companyId}`);
  } catch (error) {}
};

export const editLeader = async (companyId: string, leaderData: LeaderData) => {
  try {
    await companyService.editLeader(companyId, leaderData);
    Router.push(`/company/${companyId}/leader`);
  } catch (error) {}
};

export const editRequisites = async (
  companyId: string,
  requisitesData: RequisitesData
) => {
  try {
    await companyService.editRequisites(companyId, requisitesData);
    Router.push(`/company/${companyId}/requisites`);
  } catch (error) {}
};

export const editOffice = async (
  companyId: string,
  officeId: string,
  officeData: OfficeData
) => {
  try {
    await companyService.editOffice(officeId, officeData);
    Router.push(`/company/${companyId}/offices`);
  } catch (error) {}
};

export const deleteCompany = async (companyId: string) => {
  try {
    await companyService.deleteCompany(companyId);
    Router.push(`/companies`);
  } catch (error) {}
};

export const deleteLeader = async (companyId: string) => {
  try {
    await companyService.deleteLeader(companyId);
    Router.push(`/company/${companyId}`);
  } catch (error) {}
};

export const deleteRequisites = async (companyId: string) => {
  try {
    await companyService.deleteRequisites(companyId);
    Router.push(`/company/${companyId}`);
  } catch (error) {}
};
export const deleteOffice = async (companyId: string, officeId: string) => {
  try {
    await companyService.deleteOffice(companyId, officeId);
    Router.push(`/company/${companyId}`);
  } catch (error) {}
};
export const getOfficesByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(companyFetching());
      const response = await companyService.getOfficesByCompany(companyId);
      dispatch(officesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(companyFetchingError((error as Error).message));
    }
  };
// export const getFilteredAppeals =
//   (filterData: AppealsFilterData) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(appealsFetching());
//       const response = await appealService.getFilteredAppeals(filterData);
//       dispatch(appealsFetchingSuccess(response.data));
//     } catch (error) {
//       dispatch(appealsFetchingError((error as Error).message));
//     }
//   };

// export const getMyAppeals = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(appealsFetching());
//     const response = await appealService.getMyAppeals();
//     dispatch(appealsFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(appealsFetchingError((error as Error).message));
//   }
// };
export const getOffices = () => (state: AppState) => state.companies.offices;
export const getCompany = () => (state: AppState) => state.companies.company;
export const getError = () => (state: AppState) => state.companies.error;
