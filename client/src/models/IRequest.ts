import { IUser } from "./IUser";

export interface IRequest {
  _id: string;
  number: number;
  text?: string;
  applicant: string;
  dispatcher?: IUser;
  perfomer?: IUser;
  status: string;
  createDate: string;
  workDate?: string;
  doneDate?: string;
  result?: string;
  resultFile?: string;
  executionDate?: string;
  completionDate?: string;
  file?: string;
  grade?: number;
}

export interface IRequestFormData {
  text?: string;
  file?: string;
}
