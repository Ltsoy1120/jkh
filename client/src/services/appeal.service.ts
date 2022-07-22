import { AxiosResponse } from "axios";
import { IAppeal, IAppealFormData } from "../models/IAppeal";
import { AppealResponse } from "../models/response/AppealResponse";
import { AppealsFilterData } from "../pages/appeals/appeals-filter/appeals-filter";
import http from "./http.service";

const appealService = {
  create: async (
    appealData: IAppealFormData
  ): Promise<AxiosResponse<AppealResponse>> => {
    return await http.post<AppealResponse>("/appeals", appealData);
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
  }
};
export default appealService;
