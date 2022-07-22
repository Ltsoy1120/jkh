import { AxiosResponse } from "axios";
import { AppealsFilterData } from "../components/Filters/AppealsFilter";
import { IAppeal } from "../models/IAppeal";
import { AppealResponse } from "../models/response/AppealResponse";
import http from "./http.service";

const appealService = {
  create: async (
    appealData: FormData
  ): Promise<AxiosResponse<AppealResponse>> => {
    return await http.post<AppealResponse>("/appeals", appealData);
  },
  editAppeal: async (
    appealId: string,
    appealData: FormData
  ): Promise<AxiosResponse<AppealResponse>> => {
    return await http.put<AppealResponse>(
      `/appeals/${appealId}/editAppeal`,
      appealData
    );
  },
  doneAppeal: async (
    appealId: string,
    appealData: FormData
  ): Promise<AxiosResponse<AppealResponse>> => {
    return await http.put<AppealResponse>(
      `/appeals/${appealId}/doneAppeal`,
      appealData
    );
  },
  cancel: async (number: number): Promise<AxiosResponse<AppealResponse>> => {
    return await http.get<AppealResponse>(`/appeal/${number}/cancel`);
  },
  getFilteredAppeals: async (
    filterData: AppealsFilterData
  ): Promise<AxiosResponse<IAppeal[]>> => {
    return await http.post<IAppeal[]>("/appeals/filter", filterData);
  },
  getMyAppeals: async (): Promise<AxiosResponse<IAppeal[]>> => {
    const data = await http.get<IAppeal[]>("/appeals/my");
    return data;
  },
  getAppealsByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IAppeal[]>> => {
    const data = await http.get<IAppeal[]>(`/appeals/byCompany/${companyId}`);
    return data;
  },
};
export default appealService;
