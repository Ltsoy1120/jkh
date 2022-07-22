import { IAccount } from "./IAccount";
import { ISubject } from "./ISubject";

export interface IProperty {
  _id: string;
  subject: ISubject;
  startDateOfOwnership: Date | null;
  endDateOfOwnership?: Date | null;
  registerNumber?: string;
  accountNumber: string;
  address: string;
  numberOfApartment: string;
  account: IAccount;
  shareOfOwnership?: string;
  statusOfOwnership?: string;
  comment?: string;
  docs?: string[];
}

export type PropertyData = {
  subject: string;
  startDateOfOwnership: Date | null;
  endDateOfOwnership?: Date | null;
  registerNumber?: string;
  accountNumber: string;
  shareOfOwnership?: string;
  statusOfOwnership?: string;
  comment?: string;
  docs?: string[];
};
