import React, { useEffect } from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  getDevices,
  getDevicesByCompany,
} from "../../../../store/actions/controlObjectActions";
import Panel from "../../../../components/Panel";
import DevicesTable from "../../../../components/Tables/ControlObjects/DevicesTable";
import DevicesFilter from "../../../../components/Filters/ControlObjects/DevicesFilter";

const Devices: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.controlObjects.isLoading);

  const devices = useAppSelector(getDevices());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDevicesByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Объекты управления / Приборы учета"
      title="Объекты управления"
      mainTitle="Приборы учета"
    >
      {!isLoading ? (
        <>
          {devices.length ? (
            <>
              <Panel>
                <DevicesFilter devices={devices} companyId={companyId} mb={0} />
              </Panel>
              <DevicesTable devices={devices} />
            </>
          ) : (
            <h2>Приборы учета отсутствуют</h2>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export default Devices;
