import { IUser } from "./IUser";

export interface ITask {
  _id: string;
  createDate: string;
  number: number;
  basisForTask: string;
  numberOfBasis: string;
  taskName: string;
  priority: string;
  taskType: string;
  deadline: Date | null;
  newDeadline: Date | null;
  reasonOfPostpone?: string;
  remindOfDeadline: boolean;
  remindHow: string;
  remindWho: string;
  remindWhen: Date | null;
  remindDays: string;
  address: string;
  numberOfApartment: string;
  text: string;
  files: string[];
  dispatcher: IUser;
  performers: IUser[];
  observers: IUser[];
  status: string;
  resultComment: string;
  resultCommentDate: string;
  resultFiles: string[];
  reasonForCancel?: string;
  company: string;
}

export interface ITaskType {
  _id: string;
  createDate: string;
  name: string;
  isActive: boolean;
  dispatcher: IUser;
  performers: IUser[];
  company: string;
}

export interface ITaskNotice {
  _id: string;
  isNoticeToPerformer: boolean;
  isNoticeToObserver: boolean;
  company: string;
}

export type TaskInit = {
  createDate?: string;
  basisForTask: string;
  numberOfBasis: string;
  taskName: string;
  priority: string;
  taskType: string;
  deadline: Date | null;
  remindOfDeadline: boolean;
  remindHow?: string;
  remindWho?: string;
  remindWhen?: Date | null;
  remindDays?: string;
  address: string;
  numberOfApartment?: string;
  text?: string;
  files?: string[];
  dispatcher?: Employee;
  performers?: Employee[];
  observers?: Employee[];
  status?: string;
  resultComment?: string;
  resultCommentDate?: string;
  resultFiles?: string[];
  company: string;
};

export type Employee = {
  label: string;
  id: string;
};

export type TaskTypeInit = {
  name: string;
  isActive: boolean;
  performers: Employee[];
  company: string;
};

export type TaskTypeData = {
  name: string;
  isActive: boolean;
  performers: string[];
  company: string;
};

export type TaskNoticeData = {
  isNoticeToPerformer: boolean;
  isNoticeToObserver: boolean;
  company: string;
};

export type TaskPostponeData = {
  deadline: Date | null;
  newDeadline: Date | null;
  reasonOfPostpone?: string;
};

export type TaskCancelData = {
  reasonForCancel: string;
};
