import { IAccount } from "./IAccount";
import { IContractor } from "./IContractor";
import { ISubject } from "./ISubject";
import { IUser } from "./IUser";

export interface IApplication {
  _id: string;
  number: number;
  type?: string;
  text?: string;
  address: string;
  numberOfEntrance: string;
  floor: string;
  numberOfApartment: string;
  applicantFullName: string;
  accountNumber?: string;
  account: IAccount;
  phone: string;
  isPhoneBindToAccount: boolean;
  applicant: ISubject;
  dispatcher?: IUser;
  typeOfPerformer?: string;
  performer?: IUser;
  contractor?: IContractor;
  status: string;
  priority: string;
  createDate: Date | null;
  workDate?: Date | null;
  doneDate?: Date | null;
  result?: string;
  resultComment?: string;
  resultFiles?: string[];
  reasonForCancel?: string;
  executionDateFrom?: Date | null;
  executionDateTo?: Date | null;
  completionDate?: Date | null;
  files?: string[];
  grade?: number;
  company: string;
}

export type ApplicationData = {
  type?: string;
  text: string;
  files?: string[];
  address: string;
  numberOfEntrance: string;
  floor?: string;
  numberOfApartment: string;
  applicantFullName: string;
  accountNumber?: string;
  phone: string;
  isPhoneBindToAccount: boolean;
  status?: string;
  priority?: string;
  executionDateFrom?: Date | null;
  executionDateTo?: Date | null;
  typeOfPerformer?: string;
  contractor?: { label: string; id: string };
  performer?: { label: string; id: string };
  result?: string;
  resultComment?: string;
  resultFiles?: string[];
  reasonForCancel?: string;
  createDate?: Date | null;
  company: string;
};

export type ApplicationCancelData = {
  reasonForCancel: string;
};
