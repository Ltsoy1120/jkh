import React, { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/filter.module.scss";
import Link from "next/link";
import Button from "../../components/Buttons/Button/Button";
import BtnWrapper from "../../components/BtnWrapper/BtnWrapper";
import ReceptionOfCitizensTable from "../../components/Tables/ReceptionOfCitizensTable/ReceptionOfCitizensTable";
import Panel from "../../ui/Panel/Panel";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import { DateSelect } from "../../components/DateSelect/DateSelect";
import { ResetFilter } from "../../components/Buttons/ResetFilter/ResetFilter";
import InputLabel from "../../components/Forms/InputLabel/InputLabel";
import classes from "../../styles/common.module.scss";

const testData = [
  { text: "Офис1", id: 1 },
  { text: "Офис2", id: 2 },
  { text: "Офис3", id: 3 },
];

const testStatus = [
  { text: "Статус1", id: 1 },
  { text: "Статус2", id: 2 },
  { text: "Статус3", id: 3 },
];

const testTheme = [
  { text: "Тема1", id: 1 },
  { text: "Тема2", id: 2 },
  { text: "Тема3", id: 3 },
];

export default function Home() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Прием граждан / История приема" title="История приема" mainTitle="История приема">
        <BtnWrapper>
          <Link href="/receptionOfCitizens/residentRecord">
            <a>
              <Button>Записать жильца на прием </Button>
            </a>
          </Link>
        </BtnWrapper>

        <Panel>
          <div className={styles.wrapHistory}>
            <div className={`flex ${classes.containerInputs}`}>
              <SimpleSelect width={455} title="Офис" placeholder="Выбирите из списка..." data={testData} />
              <DateSelect helperText="Дата приема" onChange={setValueDate} value={valueDate} />
            </div>
            <div className={styles.rightBlock}>
              <Button bcg={true}>Найти</Button>
              <ResetFilter />
            </div>
          </div>

          <div className={`flex ${classes.containerInputs}`}>
            <InputLabel
              label="Ответственное лицо"
              type="text"
              id="responsibleRerson"
              placeholder="Введите данные..."
              width={265}
            />
            <SimpleSelect width={265} title="Статус" placeholder="Выбирите из списка..." data={testStatus} />
            <SimpleSelect width={265} title="Тема приёма" placeholder="Выбирите из списка..." data={testTheme} />
          </div>
        </Panel>

        <ReceptionOfCitizensTable />
      </MainLayout>
    </React.Fragment>
  );
}
