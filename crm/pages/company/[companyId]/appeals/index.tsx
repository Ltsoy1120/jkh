import React, { useEffect } from "react";
import moment from "moment";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import ButtonGroup from "../../../../components/Buttons/ButtonGroup";
import Panel from "../../../../components/Panel";
import AppealsTable from "../../../../components/Tables/AppealsTable";
import {
  getAppeals,
  getAppealsByCompany,
} from "../../../../store/actions/appealActions";
import AppealsFilter from "../../../../components/Filters/AppealsFilter";
import { apiURL } from "../../../../config";

const Appeals: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.applications.isLoading);
  const appeals = useAppSelector(getAppeals());
  const today = moment().format("YYYY-MM-DD");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAppealsByCompany(companyId));
  }, [dispatch]);
  console.log("appeals", appeals);
  return (
    <MainLayout
      breadcrumbs="Обращения / Список обращений"
      title="Обращения"
      mainTitle="Список обращений"
    >
      <ButtonGroup
        absolute
        children1="Выгрузить в Exсel"
        children2="Добавить обращение"
        href1={apiURL + "/files/" + today + ".xlsx"}
        href2="/appeals/addAppeal"
        width1={170}
        width2={200}
      />
      <Panel>
        <AppealsFilter appeals={appeals} companyId={companyId} />
      </Panel>
      {!isLoading ? (
        <>
          {appeals.length ? (
            <AppealsTable companyId={companyId} appeals={appeals} />
          ) : (
            <h2>Обращения отсутствуют</h2>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export default Appeals;
