import Router from "next/router";
import { AppealsFilterData } from "../../components/Filters/AppealsFilter";
import appealService from "../../services/appeal.service";
import {
  appealsFetching,
  appealsFetchingError,
  appealsFetchingSuccess,
} from "../slices/appealSlice";
import { AppDispatch, AppState } from "../store";

export const createAppeal = async (appealData: FormData) => {
  try {
    const { data } = await appealService.create(appealData);
    Router.push(`/appeals/${data.appeal._id}`);
  } catch (error) {}
};

export const editAppeal = async (appealId: string, appealData: FormData) => {
  try {
    await appealService.editAppeal(appealId, appealData);
    Router.push(`/appeals/${appealId}`);
  } catch (error) {}
};

export const doneAppeal = async (appealId: string, appealData: FormData) => {
  try {
    await appealService.doneAppeal(appealId, appealData);
    Router.push(`/appeals/${appealId}`);
  } catch (error) {}
};

// export const cancelAppeal = async (number: number) => {
//   try {
//     await appealService.cancel(number);
//     Router.push("/appeals");
//   } catch (error) {}
// };

export const getAppealsByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(appealsFetching());
      const response = await appealService.getAppealsByCompany(companyId);
      dispatch(appealsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(appealsFetchingError((error as Error).message));
    }
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

// export const getMyAppeals = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(appealsFetching());
//     const response = await appealService.getMyAppeals();
//     dispatch(appealsFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(appealsFetchingError((error as Error).message));
//   }
// };

export const getAppeals = () => (state: AppState) => state.appeals.appeals;
