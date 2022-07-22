import type { NextPage } from "next";
import { useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import NotificationsPage from "../src/pages/notifications/notifications-page";
import {
  getMyNotifications,
  getNotifications
} from "../src/store/actions/notificationActions";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";

const Notifications: NextPage = () => {
  const notifications = useAppSelector(getNotifications());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyNotifications());
  }, [dispatch]);

  return (
    <MainLayout title="Уведомления" mainTitle="Страница уведомлений">
      <NotificationsPage notifications={notifications} />
    </MainLayout>
  );
};

export default Notifications;
