import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { FinanceTable } from "../../components/Tables/FinanceTable/FinanceTable";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Финансы" title="Финансы" mainTitle="Финансы">
        <FinanceTable />
      </MainLayout>
    </React.Fragment>
  );
}
