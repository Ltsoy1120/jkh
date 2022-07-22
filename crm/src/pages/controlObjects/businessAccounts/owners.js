import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import OwnersTable from "../../../components/Tables/OwnersTable/OwnersTable";
import TabsBusinessAccounts from "../../../components/Tabs/TabsBusinessAccounts/TabsBusinessAccounts";
import styles from "../../../styles/controlObjects/businessAccounts/index.module.scss";

export default function Owners() {
  return (
    <React.Fragment>
      <MainLayout title="Лицевые счета" mainTitle="Лицевой счет №1234567">
        <TabsBusinessAccounts />
        <OwnersTable />
      </MainLayout>
    </React.Fragment>
  );
}
