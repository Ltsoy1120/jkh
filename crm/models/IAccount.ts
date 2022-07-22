import { IDevice } from "./IDevice";
import { ISubject } from "./ISubject";
import { IUser } from "./IUser";

export interface IAccount {
  _id: string;
  createDate: Date | null;
  number: string;
  address: string;
  numberOfApartment: string;
  accountBalance: string;
  totalArea: string;
  livingArea: string;
  heatedArea: string;
  numberOfContract: string;
  dateOfContract: Date | null;
  docs: string[];
  payer: IUser;
  owners: ISubject[];
  devices: IDevice[];
  closeDate: Date | null;
  reasonOfClosing: string;
  commentOfClosing: string;
  company: string;
}

export interface IAccountLog {
  _id: string;
  createDate: string;
  createTime: string;
  message: string;
  author: string;
  account: IAccount;
}

export type AccountData = {
  createDate: Date | null;
  number: string;
  address: string;
  numberOfApartment: string;
  accountBalance: string;
  totalArea: string;
  livingArea: string;
  heatedArea: string;
  numberOfContract: string;
  dateOfContract: Date | null;
  docs?: string[];
  closeDate?: Date | null;
  reasonOfClosing?: string;
  commentOfClosing?: string;
  company: string;
};

export type PayerData = {
  email: string;
  lastName: string;
  name: string;
  patronymic: string;
  dateOfBirth: Date | null;
  phones: string[];
  typeOfPayer: string;
  company: string;
};

export type OwnerData = {
  email: string;
  lastName: string;
  name: string;
  patronymic: string;
  dateOfBirth: Date | null;
  phones: string[];
  startDateOfOwnership: Date | null;
  shareOfOwnership: string;
  statusOfOwnership: string;
  company: string;
};

export type AccountClosingData = {
  closeDate: Date | null;
  reasonOfClosing: string;
  commentOfClosing: string;
};
