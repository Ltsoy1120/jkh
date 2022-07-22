import { AxiosResponse } from "axios";
import { IVisit, IVisitFormData } from "../models/IVisit";
import { VisitResponse } from "../models/response/VisitResponse";
import { VisitsFilterData } from "../pages/visits/visits-filter/visits-filter";
import http from "./http.service";

const visitService = {
  create: async (
    visitData: IVisitFormData
  ): Promise<AxiosResponse<VisitResponse>> => {
    return await http.post<VisitResponse>("/visits", visitData);
  },
  getVisitsByDate: async (date: string): Promise<AxiosResponse<IVisit[]>> => {
    const data = await http.get<IVisit[]>(`/visits/${date}`);
    return data;
  },
  getMyVisits: async (): Promise<AxiosResponse<IVisit[]>> => {
    const data = await http.get<IVisit[]>("/visits/my");
    return data;
  },
  getFilteredVisits: async (
    filterData: VisitsFilterData
  ): Promise<AxiosResponse<IVisit[]>> => {
    return await http.post<IVisit[]>("/visits/filter", filterData);
  }

  // cancel: async (number: number): Promise<AxiosResponse<AppealResponse>> => {
  //   return await http.get<AppealResponse>(`/appeal/${number}/cancel`);
  // },
};
export default visitService;
