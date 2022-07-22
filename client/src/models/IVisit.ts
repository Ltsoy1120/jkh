import { IUser } from "./IUser";

export interface IVisit {
  _id: string;
  number: number;
  office: string;
  date: string;
  time: string;
  topic: string;
  visiterName: string;
  visiterPhone: string;
  address: string;
  homeowner: string;
  text?: string;
  file?: string;
  dispatcher?: string;
  responsiblePerson?: IUser;
  status: string;
  result?: string;
  resultFile?: string;
  grade?: number;
}

export interface IVisitFormData {
  office: string;
  date: string;
  time: string;
  topic: string;
  visiterName: string;
  visiterPhone: string;
  address: string;
  homeowner: string;
  text?: string;
  file?: string;
}
