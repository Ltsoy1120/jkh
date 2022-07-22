import Router from "next/router";
import { AppealsFilterData } from "../../pages/appeals/appeals-filter/appeals-filter";
import appealService from "../../services/appeal.service";
import {
  appealsFetching,
  appealsFetchingError,
  appealsFetchingSuccess
} from "../slices/appealSlice";
import { AppDispatch, AppState } from "../store";

export const createAppeal = async (formData: any) => {
  try {
    await appealService.create(formData);
    Router.push("/appeals");
  } catch (error) {}
};

export const cancelAppeal = async (number: number) => {
  try {
    await appealService.cancel(number);
    Router.push("/appeals");
  } catch (error) {}
};

export const getFilteredAppeals =
  (filterData: AppealsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(appealsFetching());
      const response = await appealService.getFilteredAppeals(filterData);
      dispatch(appealsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(appealsFetchingError((error as Error).message));
    }
  };

export const getMyAppeals = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(appealsFetching());
    const response = await appealService.getMyAppeals();
    dispatch(appealsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(appealsFetchingError((error as Error).message));
  }
};

export const getAppeals = () => (state: AppState) => state.appeals.appeals;
