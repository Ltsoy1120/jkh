import { ICompany } from "./ICompany";

export interface IUser {
  _id: string;
  email: string;
  password: string;
  lastName: string;
  name: string;
  patronymic?: string;
  registerDate: Date;
  dateOfBirth?: Date | null;
  address?: string;
  avatar?: string;
  account?: string;
  phones?: string[];
  position?: string;
  role: string;
  typeOfPayer: string;
  company?: string;
  isActive: boolean; //employee
  department?: string; //employee
  subordinates?: string[]; //employee
  typesOfRequests?: string; //employee
  nameOfRequests?: string; //employee
  sendPassword: boolean; //employee
  fullnameInParent?: string; //leader
  basisForAppointment?: string; //leader
  startDateOfOwnership?: Date | null; //owner
  shareOfOwnership?: string; //owner
  statusOfOwnership?: string; //owner
}

export type LeaderData = {
  email: string;
  lastName: string;
  name: string;
  patronymic?: string;
  dateOfBirth?: Date | null;
  phones: string[];
  position?: string;
  fullnameInParent?: string;
  basisForAppointment?: string;
  company?: string;
};

export type EmployeeData = {
  email: string;
  lastName: string;
  name: string;
  patronymic?: string;
  dateOfBirth?: Date | null;
  avatar?: string;
  phones: string[];
  position?: string;
  department?: string;
  isActive: boolean;
  subordinates?: string[];
  typesOfRequests?: string;
  nameOfRequests?: string;
  company?: string;
  contractor?: string;
  sendPassword: boolean;
};
