import { AxiosResponse } from "axios";
import { CompanyData, RequisitesData } from "../models/ICompany";
import { LeaderData } from "../models/IUser";
import { CompanyResponse } from "../models/response/CompanyResponse";
import http from "./http.service";
import { IOffice, OfficeData } from "../models/IOffice";

const companyService = {
  create: async (
    companyData: CompanyData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.post<CompanyResponse>("/companies", companyData);
  },
  addLeaderCompany: async (
    companyId: string,
    leaderData: LeaderData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/companies/${companyId}/addLeader`,
      leaderData
    );
  },
  addRequisitesCompany: async (
    companyId: string,
    requisitesData: RequisitesData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/companies/${companyId}/addRequisites`,
      requisitesData
    );
  },
  addOfficeCompany: async (
    companyId: string,
    officeData: OfficeData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/companies/${companyId}/addOffice`,
      officeData
    );
  },
  addContractor: async (
    companyId: string,
    contractorId: string
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/companies/${companyId}/addContractor/${contractorId}`
    );
  },
  addNewContractor: async (
    companyId: string,
    contractorData: FormData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.post<CompanyResponse>(
      `/companies/${companyId}/addNewContractor`,
      contractorData
    );
  },
  editCompany: async (
    companyId: string,
    companyData: CompanyData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/companies/${companyId}/editCompany`,
      companyData
    );
  },
  editLeader: async (
    companyId: string,
    leaderData: LeaderData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/companies/${companyId}/editLeader`,
      leaderData
    );
  },
  editRequisites: async (
    companyId: string,
    requisitesData: RequisitesData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/companies/${companyId}/editRequisites`,
      requisitesData
    );
  },
  editOffice: async (
    officeId: string,
    officeData: OfficeData
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(`/office/${officeId}`, officeData);
  },
  deleteCompany: async (
    companyId: string
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.delete<CompanyResponse>(
      `/company/${companyId}/deleteCompany`
    );
  },
  deleteLeader: async (
    companyId: string
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/company/${companyId}/deleteLeader`
    );
  },
  deleteRequisites: async (
    companyId: string
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/company/${companyId}/deleteRequisites`
    );
  },
  deleteOffice: async (
    companyId: string,
    officeId: string
  ): Promise<AxiosResponse<CompanyResponse>> => {
    return await http.put<CompanyResponse>(
      `/company/${companyId}/deleteOffice/${officeId}`
    );
  },
  getOfficesByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IOffice[]>> => {
    const data = await http.get<IOffice[]>(`/offices/byCompany/${companyId}`);
    return data;
  },
  //   getMyAppeals: async (): Promise<AxiosResponse<IAppeal[]>> => {
  //     const data = await http.get<IAppeal[]>("/appeals/my");
  //     return data;
  //   }
};
export default companyService;
