import { IUser } from "./IUser";
import { IOffice } from "./IOffice";
import { IContractor } from "./IContractor";

export interface ICompany {
  _id: string;
  name: string;
  address: string;
  timezone: string;
  phones: string[];
  domen: string;
  website: string;
  logo: string;
  createDate: string;
  leader: IUser;
  requisites: RequisitesData;
  offices: IOffice[];
  contractors: IContractor[];
}

export type CompanyData = {
  name: string;
  address: string;
  timezone: string;
  phones: string[];
  domen: string;
  website: string;
  logo: string;
};

export type RequisitesData = {
  ogrn: string;
  inn: string;
  kpp: string;
  bankName: string;
  bik: string;
  paymentAccount: string;
  correspondentAccount: string;
};
