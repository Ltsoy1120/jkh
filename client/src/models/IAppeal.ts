import { IUser } from "./IUser";

export interface IAppeal {
  _id: string;
  number: number;
  text?: string;
  sender: string;
  dispatcher?: string;
  perfomer?: IUser;
  status: string;
  type: string;
  createDate: string;
  workDate?: string;
  doneDate?: string;
  result?: string;
  resultFile?: string;
  file?: string;
  grade?: number;
  needAnswer: boolean;
}

export interface IAppealFormData {
  text?: string;
  file?: string;
  needAnswer: boolean;
}
