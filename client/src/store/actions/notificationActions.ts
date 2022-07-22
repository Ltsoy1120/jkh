import { NotificationsFilterData } from "../../pages/notifications/notifications-filter/notifications-filter";
import notificationService from "../../services/notification.service";
import {
  notificationsFetching,
  notificationsFetchingError,
  notificationsFetchingSuccess
} from "../slices/notificationSlice";

import { AppDispatch, AppState } from "../store";

export const getFilteredNotifications =
  (filterData: NotificationsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(notificationsFetching());
      const response = await notificationService.getFilteredNotifications(
        filterData
      );
      dispatch(notificationsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(notificationsFetchingError((error as Error).message));
    }
  };

export const getMyNotifications = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(notificationsFetching());
    const response = await notificationService.getMyNotifications();
    dispatch(notificationsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(notificationsFetchingError((error as Error).message));
  }
};

export const getNotifications = () => (state: AppState) =>
  state.notifications.notifications;
