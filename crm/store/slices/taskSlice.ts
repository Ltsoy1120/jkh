import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IAppeal } from "../../models/IAppeal";
import { ITask, ITaskType } from "../../models/ITask";

export interface AppealState {
  tasks: ITask[];
  task: ITask;
  taskTypes: ITaskType[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AppealState = {
  tasks: [],
  task: null,
  taskTypes: [],
  isLoading: false,
  error: null,
};

export const taskSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    tasksFetching: (state) => {
      state.isLoading = true;
    },
    tasksFetchingSuccess: (state, action: PayloadAction<ITask[]>) => {
      state.isLoading = false;
      state.error = null;
      state.tasks = action.payload;
    },
    taskTypesFetchingSuccess: (state, action: PayloadAction<ITaskType[]>) => {
      state.isLoading = false;
      state.error = null;
      state.taskTypes = action.payload;
    },
    tasksFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setTaskData: (state, action: PayloadAction<ITask>) => {
      state.task = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.appeals,
      };
    },
  },
});

export const {
  tasksFetching,
  tasksFetchingSuccess,
  taskTypesFetchingSuccess,
  tasksFetchingError,
  setTaskData,
} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
