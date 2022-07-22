import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import CheckBox from "../../../components/CheckBox/CheckBox";
import classes from "../../../styles/receptionOfCitizens/residentRecord.module.scss";
import Button from "../../../components/Buttons/Button/Button";
import TabsReceptionOfCitizens from "../../../components/Tabs/TabsReceptionOfCitizens/TabsReceptionOfCitizens";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Прием граждан / Настройки" title="Настройки" mainTitle="Настройки">
        <TabsReceptionOfCitizens />
        <h2>Разрешить уведомления жителей по записи на прием</h2>
        <div className={`flex ${classes.wrapBlock}`}>
          <CheckBox />
          <span>Разрешить уведомление по СМС (СМС - платные)</span>
        </div>
        <Button bcg={true}>Сохранить</Button>
      </MainLayout>
    </React.Fragment>
  );
}
