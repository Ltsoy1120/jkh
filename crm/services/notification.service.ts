import { AxiosResponse } from "axios";
import { INotification } from "../models/INotification";
import { NotificationsFilterData } from "../pages/notifications/notifications-filter/notifications-filter";
import http from "./http.service";

const notificationService = {
  getMyNotifications: async (): Promise<AxiosResponse<INotification[]>> => {
    const data = await http.get<INotification[]>("/notifications/my");
    return data;
  },
  getFilteredNotifications: async (
    filterData: NotificationsFilterData
  ): Promise<AxiosResponse<INotification[]>> => {
    return await http.post<INotification[]>(
      "/notifications/filter",
      filterData
    );
  }
};
export default notificationService;
