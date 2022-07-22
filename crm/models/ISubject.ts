import { IAccount } from "./IAccount";
import { IProperty } from "./IProperty";

export interface ISubject {
  //generalData
  _id: string;
  registerDate: Date;
  email: string;
  lastName: string;
  name: string;
  patronymic?: string;
  dateOfBirth: Date | null;
  gender: string;
  phones: string[];
  placeOfWork?: string;
  workPhone?: string;
  type: string;
  isActive: boolean;
  company: string;
  // passportData
  passportSeries: string;
  passportNumber: string;
  departmentCode: string;
  dateOfIssue: Date | null;
  issuedBy: string;
  // propertyData
  properties: IProperty[];
  // registerData
  startDateOfRegister?: Date | null;
  endDateOfRegister?: Date | null;
  registerAccount?: IAccount;
  registerStatus?: string;
  reasonOfLeaving?: string;
  reasonForArrival?: string;
  previosRegisterPlace?: string;
  newRegisterPlace?: string;
  registerComment?: string;
  registerDocs?: string[];
}

export type SubjectData = {
  email: string;
  lastName: string;
  name: string;
  patronymic?: string;
  dateOfBirth: Date | null;
  gender: string;
  phones: string[];
  placeOfWork?: string;
  workPhone?: string;
  passportSeries: string;
  passportNumber: string;
  departmentCode: string;
  dateOfIssue: Date | null;
  issuedBy: string;
  type: string;
  isActive: boolean;
  company: string;
};

export type RegisterData = {
  startDateOfRegister?: Date | null;
  endDateOfRegister?: Date | null;
  registerAccountNumber?: string;
  registerStatus?: string;
  reasonOfLeaving?: string;
  reasonForArrival?: string;
  previosRegisterPlace?: string;
  newRegisterPlace?: string;
  registerComment?: string;
  registerDocs?: string[];
};
