import { ITask, ITaskNotice, ITaskType } from "../ITask";

export interface TaskResponse {
  message: string;
  task: ITask;
}

export interface TaskTypeResponse {
  message: string;
  taskType: ITaskType;
}

export interface TaskNoticeResponse {
  message: string;
  taskNotice: ITaskNotice;
}
