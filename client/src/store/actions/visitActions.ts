import Router from "next/router";
import { VisitsFilterData } from "../../pages/visits/visits-filter/visits-filter";
import visitService from "../../services/visit.service";
import {
  visitsFetching,
  visitsFetchingError,
  visitsFetchingSuccess
} from "../slices/visitSlice";
import { AppDispatch, AppState } from "../store";

export const createVisit = async (formData: any) => {
  try {
    await visitService.create(formData);
    Router.push("/visithistory");
  } catch (error) {}
};
export const getVisitsByDate =
  (date: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(visitsFetching());
      const response = await visitService.getVisitsByDate(date);
      dispatch(visitsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(visitsFetchingError((error as Error).message));
    }
  };
export const getFilteredVisits =
  (filterData: VisitsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(visitsFetching());
      const response = await visitService.getFilteredVisits(filterData);
      dispatch(visitsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(visitsFetchingError((error as Error).message));
    }
  };
export const getMyVisits = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(visitsFetching());
    const response = await visitService.getMyVisits();
    dispatch(visitsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(visitsFetchingError((error as Error).message));
  }
};
export const getVisits = () => (state: AppState) => state.visits.visits;
