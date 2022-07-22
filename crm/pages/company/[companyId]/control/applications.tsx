import React, { useEffect } from "react";
import moment from "moment";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import ButtonGroup from "../../../../components/Buttons/ButtonGroup";
import {
  getApplications,
  getApplicationsByCompany,
} from "../../../../store/actions/applicationActions";
import ApplicationsTable from "../../../../components/Tables/ApplicationsTable";
import { apiURL, API_URL } from "../../../../config";
import ApplicationsFilter from "../../../../components/Filters/ApplicationsFilter";
import Panel from "../../../../components/Panel";

const Applications: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.applications.isLoading);
  const applications = useAppSelector(getApplications());
  const today = moment().format("YYYY-MM-DD");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getApplicationsByCompany(companyId));
  }, [dispatch]);
  return (
    <MainLayout
      breadcrumbs="Диспетчерская / Заявки"
      title="Диспетчерская"
      mainTitle="Диспетчерская"
    >
      <ButtonGroup
        absolute
        children1="Выгрузить в Exсel"
        children2="Добавить заявку"
        href1={apiURL + "/files/" + today + ".xlsx"}
        href2="/control/addApplication"
        width1={170}
        width2={170}
      />
      <Panel>
        <ApplicationsFilter applications={applications} companyId={companyId} />
      </Panel>
      {!isLoading ? (
        <>
          {applications.length ? (
            <ApplicationsTable
              companyId={companyId}
              applications={applications}
            />
          ) : (
            <h2>Заявки отсутствуют</h2>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export default Applications;
