import { AxiosResponse } from "axios";
import { IDevice } from "../models/IDevice";
import http from "./http.service";

const deviceService = {
  getMyDevices: async (): Promise<AxiosResponse<IDevice[]>> => {
    const data = await http.get<IDevice[]>("/devices/my");
    return data;
  }
};
export default deviceService;
