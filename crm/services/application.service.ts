import { AxiosResponse } from "axios";
import { ApplicationsFilterData } from "../components/Filters/ApplicationsFilter";
import { ApplicationCancelData, IApplication } from "../models/IApplication";
import { ApplicationResponse } from "../models/response/ApplicationResponse";
import http from "./http.service";

const applicationService = {
  createApplication: async (
    applicationData: FormData
  ): Promise<AxiosResponse<ApplicationResponse>> => {
    return await http.post<ApplicationResponse>(
      "/applications",
      applicationData
    );
  },
  editApplication: async (
    applicationId: string,
    applicationData: FormData
  ): Promise<AxiosResponse<ApplicationResponse>> => {
    return await http.put<ApplicationResponse>(
      `/applications/${applicationId}/editApplication`,
      applicationData
    );
  },
  applicationInProgress: async (
    applicationId: string,
    applicationData: FormData
  ): Promise<AxiosResponse<ApplicationResponse>> => {
    return await http.put<ApplicationResponse>(
      `/applications/${applicationId}/inProgressApplication`,
      applicationData
    );
  },
  completeApplication: async (
    applicationId: string,
    applicationData: FormData
  ): Promise<AxiosResponse<ApplicationResponse>> => {
    return await http.put<ApplicationResponse>(
      `/applications/${applicationId}/completeApplication`,
      applicationData
    );
  },
  cancel: async (
    number: number,
    reasonForCancel: ApplicationCancelData
  ): Promise<AxiosResponse<ApplicationResponse>> => {
    console.log("cancel", number, reasonForCancel);

    return await http.put<ApplicationResponse>(
      `/applications/${number}/cancel`,
      reasonForCancel
    );
  },
  getFilteredApplications: async (
    filterData: ApplicationsFilterData
  ): Promise<AxiosResponse<IApplication[]>> => {
    return await http.post<IApplication[]>("/applications/filter", filterData);
  },
  getMyApplications: async (): Promise<AxiosResponse<IApplication[]>> => {
    const data = await http.get<IApplication[]>("/applications/my");
    return data;
  },
  getApplicationsByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IApplication[]>> => {
    const data = await http.get<IApplication[]>(
      `/applications/byCompany/${companyId}`
    );
    return data;
  },
};
export default applicationService;
