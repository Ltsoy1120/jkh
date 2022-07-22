import { ICompany } from "./ICompany";
import { IUser } from "./IUser";

export interface IContractor {
  _id: string;
  contractorName: string;
  address: string;
  phones: string[];
  logo: string;
  isActive: boolean;
  typesOfWork: string[];
  createDate: string;
  head: IUser;
  requisites: RequisitesData;
  companies: string[];
}

export type ContractorData = {
  contractorName: string;
  address: string;
  phones: string[];
  logo: string;
  isActive: boolean;
  companies?: string[];
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

export type HeadData = {
  email: string;
  lastName: string;
  name: string;
  patronymic?: string;
  dateOfBirth?: Date | null;
  phones: string[];
  position?: string;
};
