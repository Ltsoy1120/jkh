import { IAccount } from "./IAccount";
import { IDevice } from "./IDevice";

export interface IDeviceData {
  _id: string;
  createDate: Date;
  tariff: string;
  periodMonth: string;
  periodYear: string;
  device: IDevice;
  account: IAccount;
  lastData?: number;
  lastDataDay?: number;
  lastDataNight?: number;
  lastDataT1?: number;
  lastDataT2?: number;
  lastDataT3?: number;
  currentData?: number;
  currentDataDay?: number;
  currentDataNight?: number;
  currentDataT1?: number;
  currentDataT2?: number;
  currentDataT3?: number;
  difference: number;
  differenceDay: number;
  differenceNight: number;
  differenceT1: number;
  differenceT2: number;
  differenceT3: number;
}

export type TypeDeviceData = {
  createDate: Date;
  tariff: string;
  lastData?: number;
  lastDataDay?: number;
  lastDataNight?: number;
  lastDataT1?: number;
  lastDataT2?: number;
  lastDataT3?: number;
  currentData?: number | string;
  currentDataDay?: number | string;
  currentDataNight?: number | string;
  currentDataT1?: number | string;
  currentDataT2?: number | string;
  currentDataT3?: number | string;
  account: string;
  device: string;
};
