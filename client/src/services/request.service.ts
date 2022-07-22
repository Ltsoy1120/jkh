import { AxiosResponse } from "axios";
import { IRequestFormData, IRequest } from "../models/IRequest";
import { RequestResponse } from "../models/response/RequestResponse";
import { RequestsFilterData } from "../pages/requests/requests-filter/requests-filter";
import http from "./http.service";

const requestService = {
  create: async (
    requestData: IRequestFormData
  ): Promise<AxiosResponse<RequestResponse>> => {
    return await http.post<RequestResponse>("/requests", requestData);
  },
  cancel: async (number: number): Promise<AxiosResponse<RequestResponse>> => {
    return await http.get<RequestResponse>(`/request/${number}/cancel`);
  },
  getFilteredRequests: async (
    filterData: RequestsFilterData
  ): Promise<AxiosResponse<IRequest[]>> => {
    return await http.post<IRequest[]>("/requests/filter", filterData);
  },
  getMyRequests: async (): Promise<AxiosResponse<IRequest[]>> => {
    const data = await http.get<IRequest[]>("/requests/my");
    return data;
  }
};
export default requestService;
