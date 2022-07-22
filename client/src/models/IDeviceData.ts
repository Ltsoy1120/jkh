import { IDevice } from "./IDevice";

export interface IDeviceData {
  _id: string;
  createDate: string;
  periodMonth: string;
  periodYear: string;
  device: IDevice;
  payer: string;
  lastData: number;
  currentData: number;
  difference: number;
}
