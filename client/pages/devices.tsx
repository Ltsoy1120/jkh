import type { NextPage } from "next";
import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import { getDevices, getMyDevices } from "../src/store/actions/deviceActions";
import DevicesPage from "../src/pages/devices/devices-page";

const Devices: NextPage = () => {
  const devices = useAppSelector(getDevices());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyDevices());
  }, [dispatch]);

  return (
    <MainLayout title="Приборы учёта" mainTitle="Приборы учёта">
      <DevicesPage devices={devices} />
    </MainLayout>
  );
};

export default Devices;
