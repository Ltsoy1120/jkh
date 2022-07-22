import React, { useEffect } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import MainLayout from "../../components/MainLayout/MainLayout";
import {
  getDeviceData,
  getDeviceDataByDevice
} from "../../src/store/actions/devicedataActions";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";
import DevicePage from "../../src/pages/device/device-page";
import { wrapper } from "../../src/store/store";
import { API_URL } from "../../src/config";
import { IDevice } from "../../src/models/IDevice";

interface DeviceProps {
  device: IDevice;
}

const DeviceHistory: NextPage<DeviceProps> = ({ device }) => {
  const deviceData = useAppSelector(getDeviceData());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDeviceDataByDevice(device._id));
  }, [dispatch]);

  return (
    <MainLayout title="Приборы учёта" mainTitle="Приборы учёта">
      {deviceData ? (
        <DevicePage device={device} deviceData={deviceData} />
      ) : (
        "Loading..."
      )}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    const { accessToken } = parseCookies(ctx);
    const res = await fetch(`${API_URL}/device/${ctx.query.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const device = await res.json();
    return {
      props: {
        device
      }
    };
  });
export default DeviceHistory;
