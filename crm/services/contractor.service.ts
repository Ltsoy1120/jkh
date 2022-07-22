import { AxiosResponse } from "axios";
import { ContractorResponse } from "../models/response/ContractorResponse";
import http from "./http.service";
import { HeadData, RequisitesData, IContractor } from "../models/IContractor";
import { IUser } from "../models/IUser";

const contractorService = {
  addNewContractor: async (
    contractorData: FormData
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.post<ContractorResponse>(`/contractors`, contractorData);
  },
  addContractorHead: async (
    contractorId: string,
    headData: HeadData
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.put<ContractorResponse>(
      `/contractors/${contractorId}/addHead`,
      headData
    );
  },
  getContractorsByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IContractor[]>> => {
    const data = await http.get<IContractor[]>(
      `/contractors/${companyId}/byCompany`
    );
    return data;
  },
  addTypesOfWork: async (
    contractorId: string,
    typesOfWorkData: string[]
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.put<ContractorResponse>(
      `/contractors/${contractorId}/addTypesOfWork`,
      typesOfWorkData
    );
  },
  editTypesOfWork: async (
    contractorId: string,
    typesOfWorkData: string[]
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.put<ContractorResponse>(
      `/contractors/${contractorId}/editTypesOfWork`,
      typesOfWorkData
    );
  },
  deleteContractor: async (
    contractorId: string
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.delete<ContractorResponse>(
      `/contractors/${contractorId}/deleteContractor`
    );
  },
  editContractor: async (
    contractorId: string,
    contractorData: FormData
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.put<ContractorResponse>(
      `/contractors/${contractorId}/editContractor`,
      contractorData
    );
  },
  editHead: async (
    contractorId: string,
    headData: HeadData
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.put<ContractorResponse>(
      `/contractors/${contractorId}/editHead`,
      headData
    );
  },
  addRequisitesOfContractor: async (
    contractorId: string,
    requisitesData: RequisitesData
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.put<ContractorResponse>(
      `/contractors/${contractorId}/addRequisites`,
      requisitesData
    );
  },
  editRequisites: async (
    contractorId: string,
    requisitesData: RequisitesData
  ): Promise<AxiosResponse<ContractorResponse>> => {
    return await http.put<ContractorResponse>(
      `/contractors/${contractorId}/editRequisites`,
      requisitesData
    );
  },
  getEmployeesByContractor: async (
    contractorId: string
  ): Promise<AxiosResponse<IUser[]>> => {
    const data = await http.get<IUser[]>(
      `/users/employees/${contractorId}/byContractor`
    );
    return data;
  },
  getAllContractors: async (): Promise<AxiosResponse<IContractor[]>> => {
    const data = await http.get<IContractor[]>(`/contractors`);
    return data;
  },
  //   deleteLeader: async (
  //     companyId: string
  //   ): Promise<AxiosResponse<CompanyResponse>> => {
  //     return await http.put<CompanyResponse>(
  //       `/company/${companyId}/deleteLeader`
  //     );
  //   },
  //   deleteRequisites: async (
  //     companyId: string
  //   ): Promise<AxiosResponse<CompanyResponse>> => {
  //     return await http.put<CompanyResponse>(
  //       `/company/${companyId}/deleteRequisites`
  //     );
  //   },

  //   getMyAppeals: async (): Promise<AxiosResponse<IAppeal[]>> => {
  //     const data = await http.get<IAppeal[]>("/appeals/my");
  //     return data;
  //   }
};
export default contractorService;
