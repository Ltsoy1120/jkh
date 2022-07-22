import React, { useEffect } from "react";
import moment from "moment";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import Panel from "../../../../components/Panel";
import AbsolutButton from "../../../../components/Buttons/AbsolutButton";
import {
  getReceipts,
  getReceiptsByCompany,
} from "../../../../store/actions/receiptActions";
import ReceiptsTable from "../../../../components/Tables/ReceiptsTable";
import ReceiptsFilter from "../../../../components/Filters/ReceiptsFilter";

const Receipts: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.applications.isLoading);
  const receipts = useAppSelector(getReceipts());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReceiptsByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Квартплата"
      title="Квартплата"
      mainTitle="Квартплата"
    >
      <AbsolutButton text="Скачать архив" href="" />
      <Panel>
        <ReceiptsFilter companyId={companyId} />
      </Panel>
      {!isLoading ? (
        <>
          {receipts.length ? (
            <ReceiptsTable receipts={receipts} />
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
export default Receipts;
