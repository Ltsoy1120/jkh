import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import TabsPassportOffice from "../../../../components/Tabs/TabsPassportOffice/TabsPassportOffice";
import AddPlus from "../../../../components/AddPlus/AddPlus";
import RegistrationTable from "../../../../components/Tables/PassportOfficeTables/RegistrationTable/RegistrationTable";

export default function Registration() {
  return (
    <React.Fragment>
      <MainLayout title="Новый субъект" mainTitle="Новый субъект">
        <TabsPassportOffice />
        <AddPlus name="Добавить регистрацию" href="/controlObjects/passportOffice/addSubject/addRegister" />
        <RegistrationTable />
      </MainLayout>
    </React.Fragment>
  );
}
