import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import TabsPassportOffice from "../../../../components/Tabs/TabsPassportOffice/TabsPassportOffice";
import AddPlus from "../../../../components/AddPlus/AddPlus";
import OwnersTable from "../../../../components/Tables/PassportOfficeTables/OwnersTable/OwnersTable";

export default function Owners() {
  return (
    <React.Fragment>
      <MainLayout title="Новый субъект" mainTitle="Новый субъект">
        <TabsPassportOffice />
        <AddPlus name="Добавить собственность" href="/controlObjects/passportOffice/addSubject/addProperty/" />
        <OwnersTable />
      </MainLayout>
    </React.Fragment>
  );
}
