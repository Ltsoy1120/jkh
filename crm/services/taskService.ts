import { AxiosResponse } from "axios";
import { TasksFilterData } from "../components/Filters/TasksFilter";
import {
  ITask,
  ITaskType,
  TaskCancelData,
  TaskNoticeData,
  TaskPostponeData,
  TaskTypeData,
} from "../models/ITask";
import {
  TaskNoticeResponse,
  TaskResponse,
  TaskTypeResponse,
} from "../models/response/TaskResponse";
// import { ReceiptsFilterData } from "../pages/receipts/receipts-filter/receipts-filter";
import http from "./http.service";

const taskService = {
  // task
  createTask: async (
    taskData: FormData
  ): Promise<AxiosResponse<TaskResponse>> => {
    return await http.post<TaskResponse>("/tasks", taskData);
  },
  editTask: async (
    taskId: string,
    taskData: FormData
  ): Promise<AxiosResponse<TaskResponse>> => {
    return await http.put<TaskResponse>(`/tasks/${taskId}/editTask`, taskData);
  },
  completeTask: async (
    taskId: string,
    taskData: FormData
  ): Promise<AxiosResponse<TaskResponse>> => {
    return await http.put<TaskResponse>(
      `/tasks/${taskId}/completeTask`,
      taskData
    );
  },
  postponeTask: async (
    taskId: string,
    taskData: TaskPostponeData
  ): Promise<AxiosResponse<TaskResponse>> => {
    return await http.put<TaskResponse>(
      `/tasks/${taskId}/postponeTask`,
      taskData
    );
  },
  cancelTask: async (
    taskId: string,
    taskData: TaskCancelData
  ): Promise<AxiosResponse<TaskResponse>> => {
    return await http.put<TaskResponse>(
      `/tasks/${taskId}/cancelTask`,
      taskData
    );
  },
  getTasksByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<ITask[]>> => {
    const data = await http.get<ITask[]>(`/tasks/byCompany/${companyId}`);
    return data;
  },
  getFilteredTasks: async (
    filterData: TasksFilterData
  ): Promise<AxiosResponse<ITask[]>> => {
    return await http.post<ITask[]>("/tasks/filter", filterData);
  },

  // taskNotice
  createTaskNotice: async (
    taskNoticeData: TaskNoticeData
  ): Promise<AxiosResponse<TaskNoticeResponse>> => {
    return await http.post<TaskNoticeResponse>("/taskNotices", taskNoticeData);
  },

  // taskType
  createTaskType: async (
    taskTypeData: TaskTypeData
  ): Promise<AxiosResponse<TaskTypeResponse>> => {
    return await http.post<TaskTypeResponse>("/taskTypes", taskTypeData);
  },
  disableTaskType: async (
    taskTypeId: string
  ): Promise<AxiosResponse<ITaskType>> => {
    return await http.put<ITaskType>(`/taskTypes/${taskTypeId}/disable`);
  },
  editTaskType: async (
    taskTypeId: string,
    taskTypeData: TaskTypeData
  ): Promise<AxiosResponse<ITaskType>> => {
    return await http.put<ITaskType>(
      `/taskTypes/${taskTypeId}/edit`,
      taskTypeData
    );
  },
  getTaskTypesByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<ITaskType[]>> => {
    const data = await http.get<ITaskType[]>(
      `/taskTypes/byCompany/${companyId}`
    );
    return data;
  },

  // getMyReceipts: async (): Promise<AxiosResponse<IReceipt[]>> => {
  //   const data = await http.get<IReceipt[]>("/receipts/my");
  //   return data;
  // },
  // payReceipt: async (id: string): Promise<AxiosResponse<IReceipt>> => {
  //   return await http.post<IReceipt>(`/receipt/${id}/pay`);
  // },
};
export default taskService;
