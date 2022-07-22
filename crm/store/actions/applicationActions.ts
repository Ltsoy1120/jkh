import Router from "next/router";
import { ApplicationsFilterData } from "../../components/Filters/ApplicationsFilter";
import { ApplicationCancelData } from "../../models/IApplication";
// import { ApplicationsFilterData } from "../../pages/requests/requests-filter/requests-filter";
import applicationService from "../../services/application.service";
import {
  applicationsFetching,
  applicationsFetchingError,
  applicationsFetchingSuccess,
} from "../slices/applicationSlice";
import { AppDispatch, AppState } from "../store";

export const createApplication = async (applicationData: FormData) => {
  try {
    const { data } = await applicationService.createApplication(
      applicationData
    );
    Router.push(`/control/${data.application._id}/application`);
  } catch (error) {}
};
export const editApplication = async (
  applicationId: string,
  applicationData: FormData
) => {
  try {
    await applicationService.editApplication(applicationId, applicationData);
    Router.push(`/control/${applicationId}/application`);
  } catch (error) {}
};
export const applicationInProgress = async (
  applicationId: string,
  applicationData: FormData
) => {
  try {
    await applicationService.applicationInProgress(
      applicationId,
      applicationData
    );
    Router.push(`/control/${applicationId}/application`);
  } catch (error) {}
};
export const completeApplication = async (
  applicationId: string,
  applicationData: FormData
) => {
  try {
    await applicationService.completeApplication(
      applicationId,
      applicationData
    );
    Router.push(`/control/${applicationId}/application`);
  } catch (error) {}
};
export const cancelApplication = async (
  applicationId: string,
  number: number,
  reasonForCancel: ApplicationCancelData
) => {
  try {
    await applicationService.cancel(number, reasonForCancel);
    Router.push(`/control/${applicationId}/application`);
  } catch (error) {}
};
export const getFilteredApplications =
  (filterData: ApplicationsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(applicationsFetching());
      const response = await applicationService.getFilteredApplications(
        filterData
      );
      dispatch(applicationsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(applicationsFetchingError((error as Error).message));
    }
  };
export const getApplicationsByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(applicationsFetching());
      const response = await applicationService.getApplicationsByCompany(
        companyId
      );
      dispatch(applicationsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(applicationsFetchingError((error as Error).message));
    }
  };
export const getMyApplications = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(applicationsFetching());
    const response = await applicationService.getMyApplications();
    dispatch(applicationsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(applicationsFetchingError((error as Error).message));
  }
};

export const getApplications = () => (state: AppState) =>
  state.applications.applications;
