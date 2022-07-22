import Router from "next/router";
import { RequestsFilterData } from "../../pages/requests/requests-filter/requests-filter";
import requestService from "../../services/request.service";
import {
  requestsFetching,
  requestsFetchingError,
  requestsFetchingSuccess
} from "../slices/requestSlice";
import { AppDispatch, AppState } from "../store";

export const createRequest = async (formData: any) => {
  try {
    await requestService.create(formData);
    Router.push("/requests");
  } catch (error) {}
};

export const cancelRequest = async (number: number) => {
  try {
    await requestService.cancel(number);
    Router.push("/requests");
  } catch (error) {}
};

export const getFilteredRequests =
  (filterData: RequestsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(requestsFetching());
      const response = await requestService.getFilteredRequests(filterData);
      dispatch(requestsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(requestsFetchingError((error as Error).message));
    }
  };

export const getMyRequests = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestsFetching());
    const response = await requestService.getMyRequests();
    dispatch(requestsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(requestsFetchingError((error as Error).message));
  }
};

export const getRequests = () => (state: AppState) => state.requests.requests;
