import React, { useEffect } from "react";
import MainLayout from "../../../../components/MainLayout";
import ReceptionsTable from "../../../../components/Tables/ReceptionsTable";
import { NextPage } from "next";
import AbsolutButton from "../../../../components/Buttons/AbsolutButton";
import ReceptionsFilter from "../../../../components/Filters/ReceptionsFilter";
import { useRouter } from "next/router";
import Panel from "../../../../components/Panel";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  getReceptions,
  getReceptionsByCompany,
} from "../../../../store/actions/receptionActions";

const ReceptionHistory: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.applications.isLoading);
  const receptions = useAppSelector(getReceptions());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReceptionsByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Прием граждан / История приема"
      title="История приема"
      mainTitle="История приема"
    >
      <AbsolutButton
        text="Записать жильца на прием"
        href="/receptionOfCitizens/addReception"
      />
      <Panel>
        <ReceptionsFilter companyId={companyId} mb={0} />
      </Panel>
      {!isLoading ? (
        <>
          {receptions.length ? (
            <ReceptionsTable receptions={receptions} />
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
export default ReceptionHistory;
