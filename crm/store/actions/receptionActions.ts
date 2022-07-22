import Router from "next/router";
import { ReceptionsFilterData } from "../../components/Filters/ReceptionsFilter";
import { ReceptionCancelData } from "../../models/IReception";
// import { VisitsFilterData } from "../../pages/visits/visits-filter/visits-filter";
import receptionService from "../../services/reception.service";
import {
  receptionsFetching,
  receptionsFetchingError,
  receptionsFetchingSuccess,
} from "../slices/receptionSlice";
import { AppDispatch, AppState } from "../store";

export const createReception = async (receptionData: FormData) => {
  try {
    const { data } = await receptionService.create(receptionData);
    Router.push(`/receptionOfCitizens/${data.reception._id}/reception`);
  } catch (error) {}
};

export const editReception = async (
  receptionId: string,
  receptionData: FormData
) => {
  try {
    await receptionService.editReception(receptionId, receptionData);
    Router.push(`/receptionOfCitizens/${receptionId}/reception`);
  } catch (error) {}
};

export const confirmReception = async (
  receptionId: string,
  receptionData: FormData
) => {
  try {
    await receptionService.confirmReception(receptionId, receptionData);
    Router.push(`/receptionOfCitizens/${receptionId}/reception`);
  } catch (error) {}
};

export const completeReception = async (
  receptionId: string,
  receptionData: FormData
) => {
  try {
    await receptionService.completeReception(receptionId, receptionData);
    Router.push(`/receptionOfCitizens/${receptionId}/reception`);
  } catch (error) {}
};

export const cancelReception = async (
  receptionId: string,
  number: number,
  reasonForCancel: ReceptionCancelData
) => {
  try {
    await receptionService.cancelReception(number, reasonForCancel);
    Router.push(`/receptionOfCitizens/${receptionId}/reception`);
  } catch (error) {}
};

export const getReceptionsByDate =
  (date: string, officeId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(receptionsFetching());
      const response = await receptionService.getReceptionsByDate(
        date,
        officeId
      );
      dispatch(receptionsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(receptionsFetchingError((error as Error).message));
    }
  };

export const getReceptionsByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(receptionsFetching());
      const response = await receptionService.getReceptionsByCompany(companyId);
      dispatch(receptionsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(receptionsFetchingError((error as Error).message));
    }
  };

export const getFilteredReceptions =
  (filterData: ReceptionsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(receptionsFetching());
      const response = await receptionService.getFilteredReceptions(filterData);
      dispatch(receptionsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(receptionsFetchingError((error as Error).message));
    }
  };

export const getReceptions = () => (state: AppState) =>
  state.receptions.receptions;
export const getReception = () => (state: AppState) =>
  state.receptions.reception;
