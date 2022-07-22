import { IAccount } from "./IAccount";
import { IDevice } from "./IDevice";
import { ISubject } from "./ISubject";

export interface IReceipt {
  _id: string;
  createDate: string;
  periodMonth: string;
  periodYear: string;
  device: IDevice;
  // homeowner: ISubject;
  account: IAccount;
  file: string;
  status: string;
  sum: number;
}
