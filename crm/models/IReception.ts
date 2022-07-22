import { IAccount } from "./IAccount";
import { IOffice } from "./IOffice";
import { IUser } from "./IUser";

export interface IReception {
  _id: string;
  number: number;
  createDate: Date;
  office: IOffice;
  date: string;
  time: string;
  topic: string;
  visiterName: string;
  visiterPhone: string;
  address: string;
  numberOfApartment: string;
  account: IAccount;
  homeowner: string;
  text?: string;
  files?: string[];
  dispatcher?: string;
  responsiblePerson?: IUser;
  status: string;
  resultComment?: string;
  resultFiles?: string[];
  reasonForCancel?: string;
  grade?: number;
  company: string;
}

export type ReceptionData = {
  office: {
    label: string;
    id: string;
  };
  createDate?: Date;
  date: string;
  time: string;
  topic: string;
  files?: string[];
  account: {
    label: string;
    address: string;
    account: string;
    id: string;
  };
  visiterName: string;
  visiterPhone: string;
  address: string;
  numberOfApartment: string;
  status?: string;
  text?: string;
  responsiblePerson?: {
    label: string;
    id: string;
  };
  resultComment?: string;
  resultFiles?: string[];
  reasonForCancel?: string;
  company: string;
};

export type ReceptionCancelData = {
  reasonForCancel: string;
};
