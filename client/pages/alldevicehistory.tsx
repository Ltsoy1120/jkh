import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import { API_URL } from "../src/config";
import { IDevice } from "../src/models/IDevice";
import DeviceHistoryPage from "../src/pages/devicehistory/devicehistory-page";
import {
  getDeviceData,
  getMyDeviceData
} from "../src/store/actions/devicedataActions";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import { wrapper } from "../src/store/store";

export interface DevicesProps {
  devices: IDevice[];
}

const Devices: NextPage<DevicesProps> = ({ devices }) => {
  const devicesData = useAppSelector(getDeviceData());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyDeviceData());
  }, [dispatch]);

  return (
    <MainLayout title="Приборы учёта" mainTitle="Приборы учёта">
      <DeviceHistoryPage devices={devices} devicesData={devicesData} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    const { accessToken } = parseCookies(ctx);
    const res = await fetch(`${API_URL}/devices/my`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const devices = await res.json();
    return {
      props: {
        devices
      }
    };
  });
export default Devices;
