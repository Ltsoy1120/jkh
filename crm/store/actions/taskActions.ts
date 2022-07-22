import Router from "next/router";
import { TasksFilterData } from "../../components/Filters/TasksFilter";
import {
  TaskCancelData,
  TaskNoticeData,
  TaskPostponeData,
  TaskTypeData,
} from "../../models/ITask";
import taskService from "../../services/taskService";
import {
  tasksFetching,
  tasksFetchingError,
  tasksFetchingSuccess,
  taskTypesFetchingSuccess,
} from "../slices/taskSlice";
import { AppDispatch, AppState } from "../store";

// task
export const createTask = async (taskData: FormData) => {
  try {
    const { data } = await taskService.createTask(taskData);
    Router.push(`/tasks/${data.task._id}`);
  } catch (error) {}
};

export const editTask = async (taskId: string, taskData: FormData) => {
  try {
    await taskService.editTask(taskId, taskData);
    Router.push(`/tasks/${taskId}`);
  } catch (error) {}
};

export const completeTask = async (taskId: string, taskData: FormData) => {
  try {
    await taskService.completeTask(taskId, taskData);
    Router.push(`/tasks/${taskId}`);
  } catch (error) {}
};

export const postponeTask = async (
  taskId: string,
  taskData: TaskPostponeData
) => {
  try {
    await taskService.postponeTask(taskId, taskData);
    Router.push(`/tasks/${taskId}`);
  } catch (error) {}
};

export const cancelTask = async (taskId: string, taskData: TaskCancelData) => {
  try {
    await taskService.cancelTask(taskId, taskData);
    Router.push(`/tasks/${taskId}`);
  } catch (error) {}
};

export const getTasksByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(tasksFetching());
      const response = await taskService.getTasksByCompany(companyId);
      dispatch(tasksFetchingSuccess(response.data));
    } catch (error) {
      dispatch(tasksFetchingError((error as Error).message));
    }
  };

export const getFilteredTasks =
  (filterData: TasksFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(tasksFetching());
      const response = await taskService.getFilteredTasks(filterData);
      dispatch(tasksFetchingSuccess(response.data));
    } catch (error) {
      dispatch(tasksFetchingError((error as Error).message));
    }
  };

// taskNotice
export const createTaskNotice = async (
  companyId: string,
  taskNoticeData: TaskNoticeData
) => {
  try {
    await taskService.createTaskNotice(taskNoticeData);
    Router.push(`/company/${companyId}/tasks/settings/taskNotices`);
  } catch (error) {}
};

// taskType
export const createTaskType = async (
  companyId: string,
  taskTypeData: TaskTypeData
) => {
  try {
    await taskService.createTaskType(taskTypeData);
    Router.push(`/company/${companyId}/tasks/settings/taskTypes`);
  } catch (error) {}
};
export const disableTaskType = async (
  companyId: string,
  taskTypeId: string
) => {
  try {
    await taskService.disableTaskType(taskTypeId);
    Router.push(`/company/${companyId}/tasks/settings/taskTypes`);
  } catch (error) {}
};
export const editTaskType = async (
  companyId: string,
  taskTypeId: string,
  taskTypeData: TaskTypeData
) => {
  try {
    await taskService.editTaskType(taskTypeId, taskTypeData);
    Router.push(`/company/${companyId}/tasks/settings/taskTypes`);
  } catch (error) {}
};
export const getTaskTypesByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(tasksFetching());
      const response = await taskService.getTaskTypesByCompany(companyId);
      dispatch(taskTypesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(tasksFetchingError((error as Error).message));
    }
  };

// export const getMyReceipts = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(receiptsFetching());
//     const response = await receiptService.getMyReceipts();
//     dispatch(receiptsFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(receiptsFetchingError((error as Error).message));
//   }
// };

// export const payReceipt = async (id: string) => {
//   try {
//     await receiptService.payReceipt(id);
//     Router.push("/receipts");
//   } catch (error) {}
// };
export const getTasks = () => (state: AppState) => state.tasks.tasks;
export const getTaskTypes = () => (state: AppState) => state.tasks.taskTypes;
