import { AxiosResponse } from "axios";
import { ReceptionsFilterData } from "../components/Filters/ReceptionsFilter";
import { IReception, ReceptionCancelData } from "../models/IReception";
import { ReceptionResponse } from "../models/response/ReceptionResponse";
import http from "./http.service";

const receptionService = {
  create: async (
    receptionData: FormData
  ): Promise<AxiosResponse<ReceptionResponse>> => {
    return await http.post<ReceptionResponse>("/receptions", receptionData);
  },
  editReception: async (
    receptionId: string,
    receptionData: FormData
  ): Promise<AxiosResponse<ReceptionResponse>> => {
    return await http.put<ReceptionResponse>(
      `/receptions/${receptionId}/edit`,
      receptionData
    );
  },
  confirmReception: async (
    receptionId: string,
    receptionData: FormData
  ): Promise<AxiosResponse<ReceptionResponse>> => {
    return await http.put<ReceptionResponse>(
      `/receptions/${receptionId}/confirm`,
      receptionData
    );
  },
  completeReception: async (
    receptionId: string,
    receptionData: FormData
  ): Promise<AxiosResponse<ReceptionResponse>> => {
    return await http.put<ReceptionResponse>(
      `/receptions/${receptionId}/complete`,
      receptionData
    );
  },
  cancelReception: async (
    number: number,
    reasonForCancel: ReceptionCancelData
  ): Promise<AxiosResponse<ReceptionResponse>> => {
    return await http.put<ReceptionResponse>(
      `/receptions/${number}/cancel`,
      reasonForCancel
    );
  },
  getReceptionsByDate: async (
    date: string,
    officeId: string
  ): Promise<AxiosResponse<IReception[]>> => {
    const data = await http.post<IReception[]>(`/receptions/byDate`, {
      date,
      officeId,
    });
    return data;
  },
  getReceptionsByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IReception[]>> => {
    const data = await http.get<IReception[]>(
      `/receptions/byCompany/${companyId}`
    );
    return data;
  },
  getFilteredReceptions: async (
    filterData: ReceptionsFilterData
  ): Promise<AxiosResponse<IReception[]>> => {
    return await http.post<IReception[]>("/receptions/filter", filterData);
  },
};
export default receptionService;
