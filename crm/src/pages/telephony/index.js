import React, { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import TelephonyTables from "../../components/Tables/Telephony/TelephonyTables";
import Panel from "../../ui/Panel/Panel";
import { DateSelect } from "../../components/DateSelect/DateSelect";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import { SimpleInput } from "../../components/Forms/SimpleInput/SimpleInput";
import classes from "../../styles/filter.module.scss";
import styles from "../../styles/common.module.scss";
import Button from "../../components/Buttons/Button/Button";
import { ResetFilter } from "../../components/Buttons/ResetFilter/ResetFilter";

const testType = [
  { text: "Тип1", id: 1 },
  { text: "Тип2", id: 2 },
  { text: "Тип3", id: 3 },
];

const direction = [
  { text: "Все", id: 1 },
  { text: "Входящие", id: 2 },
  { text: "Исходящие", id: 3 },
  { text: "Внутренние", id: 4 },
];

export default function Home() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Телефония / Звонки" title="Телефония" mainTitle="Звонки">
        <Panel>
          <div>
            <div className={styles.containerInputs}>
              <DateSelect helperText="Дата приема" onChange={setValueDate} value={valueDate} />
              <SimpleSelect
                placeholder="Выбирите из списка..."
                title="Направление"
                defaultTitle="Выберите из списа"
                data={direction}
                size="small"
              />
              <SimpleInput label="Л/С, ФИО, номер тел.+7" placeholder="Введите данные..." />
              <div className={classes.buttonsFilter}>
                <Button bcg={true}>Найти</Button>
                <ResetFilter />
              </div>
            </div>
            <div className={styles.containerInputs}>
              <SimpleInput label="Сотрудник (Фамилия,email,телефон)" placeholder="Введите данные..." />
              <SimpleSelect title="Тип телефонии" placeholder="Выбирите из списка..." data={testType} />
            </div>
          </div>
        </Panel>
        <TelephonyTables />
      </MainLayout>
    </React.Fragment>
  );
}
