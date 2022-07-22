import React, { useState } from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import Button from "../../../components/Buttons/Button/Button";
import { SimpleInput } from "../../../components/Forms/SimpleInput/SimpleInput";
import { DateSelect } from "../../../components/DateSelect/DateSelect";
import TabsReceptionOfCitizens from "../../../components/Tabs/TabsReceptionOfCitizens/TabsReceptionOfCitizens";
import classes from "../../../styles/receptionOfCitizens/residentRecord.module.scss";

export default function Home() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Прием граждан / Настройки" title="Настройки" mainTitle="Настройки">
        <TabsReceptionOfCitizens />
        <h2>Сбросить нумерацию обращений</h2>
        <div className={classes.calendar}>
          <DateSelect helperText="Дата с которой начать нумерацию" onChange={setValueDate} value={valueDate} />
        </div>
        <div className={classes.numInput}>
          <SimpleInput size="object" label="Номер первого обращения" placeholder="Значение..." />
        </div>
        <Button bcg={true}>Сохранить</Button>
      </MainLayout>
    </React.Fragment>
  );
}
