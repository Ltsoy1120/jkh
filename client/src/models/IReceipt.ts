import { IDevice } from "./IDevice";
import { IUser } from "./IUser";

export interface IReceipt {
  _id: string;
  createDate: string;
  periodMonth: string;
  periodYear: string;
  device: IDevice;
  homeowner: IUser;
  file: string;
  status: string;
  sum: number;
}
