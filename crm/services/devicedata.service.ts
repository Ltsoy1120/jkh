import http from "./http.service";
import { AxiosResponse } from "axios";
import { DeviceData } from "../../pages/newdevicedata/[id]";
import { DeviceDataResponse } from "../models/response/DeviceDataResponse";
import { IDeviceData } from "../models/IDeviceData";
import { DeviceDataFilterData } from "../pages/devicehistory/devicehistory-filter/devicehistory-filter";

const devicedataService = {
  create: async (
    devicedataData: DeviceData
  ): Promise<AxiosResponse<DeviceDataResponse>> => {
    return await http.post<DeviceDataResponse>("/devicedata", devicedataData);
  },
  //   cancel: async (number: number): Promise<AxiosResponse<AppealResponse>> => {
  //     return await http.get<AppealResponse>(`/appeal/${number}/cancel`);
  //   },
  getFilteredDeviceData: async (
    filterData: DeviceDataFilterData
  ): Promise<AxiosResponse<IDeviceData[]>> => {
    return await http.post<IDeviceData[]>("/devicedata/filter", filterData);
  },
  getMyDeviceData: async (): Promise<AxiosResponse<IDeviceData[]>> => {
    const data = await http.get<IDeviceData[]>("/devicedata/my");
    return data;
  },
  getDeviceDataByDevice: async (
    id: string
  ): Promise<AxiosResponse<IDeviceData[]>> => {
    const data = await http.get<IDeviceData[]>(`/devicedata/bydevice/${id}`);
    return data;
  }
};
export default devicedataService;
