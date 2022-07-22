import { IAccount } from "./IAccount";
import { IContractor } from "./IContractor";
import { IUser } from "./IUser";

export interface IAppeal {
  _id: string;
  number: number;
  text?: string;
  sender: string;
  dispatcher?: IUser;
  contractor?: IContractor;
  performer?: IUser;
  address: string;
  numberOfApartment: string;
  senderFullName: string;
  account: IAccount;
  phone: string;
  status: string;
  priority: string;
  type: string;
  createDate: Date | null;
  workDate?: Date | null;
  doneDate?: Date | null;
  result?: string;
  resultComment?: string;
  resultFiles?: string[];
  reasonForCancel?: string;
  files?: string[];
  grade?: number;
  senderIsOwner: boolean;
  needAnswer?: boolean;
  company: string;
}

export type AppealData = {
  number?: number;
  type?: string;
  text: string;
  files?: string[];
  address: string;
  numberOfApartment: string;
  account: {
    label: string;
    address: string;
    account: string;
    id: string;
  };
  senderFullName?: string;
  phone: string;
  status: string;
  priority: string;
  isPhoneBindToAccount?: boolean;
  performer?: {
    label: string;
    id: string;
  };
  createDate?: Date | null;
  workDate?: Date | null;
  senderIsOwner?: boolean;
  result?: string;
  resultComment?: string;
  resultFiles?: string[];
  company: string;
};
