import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import AddPlus from "../../../../components/AddPlus/AddPlus";
import OfficesTable from "../../../../components/Tables/OfficesTable/OfficesTable";
import TabsSettingCompany from "../../../../components/Tabs/TabsSettingCompany/TabsSettingCompany";
import styles from "../../../../styles/company/settings/offices.module.scss";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout title="Офисы компании" mainTitle="Настройка профиля компании">
        <TabsSettingCompany />
        <div className={styles.wrapper}>
          <AddPlus name="Добавить новый офис" href="/company/settings/offices/addNewOffice" />
          <OfficesTable />
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
