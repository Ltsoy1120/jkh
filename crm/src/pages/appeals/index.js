import React, { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/controlObjects/houses/houses.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import { AppealsTable } from "../../components/Tables/AppealsTable/AppealsTable";
import Panel from "../../ui/Panel/Panel";
import { DateSelect } from "../../components/DateSelect/DateSelect";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import InputLabel from "../../components/Forms/InputLabel/InputLabel";
import classes from "../../styles/filter.module.scss";
import { ResetFilter } from "../../components/Buttons/ResetFilter/ResetFilter";
import BtnWrapper from "../../components/BtnWrapper/BtnWrapper";

const testType = [
  { text: "Тип1", id: 1 },
  { text: "Тип2", id: 2 },
  { text: "Тип3", id: 3 },
];

export default function Home() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Обращения / Список обращений" title="Обращения" mainTitle="Обращения">
        <BtnWrapper>
          <Button>Экпорт</Button>
          <Link href="/appeals/newAppeal">
            <a>
              <Button>Добавить обращение</Button>
            </a>
          </Link>
        </BtnWrapper>

        <Panel>
          <div className={classes.wrapHistory}>
            <DateSelect helperText="Дата поступления" onChange={setValueDate} value={valueDate} />
            <SimpleSelect width={265} title="Тип обращения" placeholder="Выбирите из списка..." data={testType} />
            <InputLabel label="Отправитель ФИО" type="text" id="nameTask" placeholder="Введите данные..." width={265} />
            <div className={classes.rightBlock}>
              <Button bcg={true}>Найти</Button>
              <ResetFilter />
            </div>
          </div>

          <div className={`flex ${classes.secondRow} ${styles.secondRow}`}>
            <InputLabel
              label="Номер обращения"
              type="text"
              id="numberAppeals"
              placeholder="Введите данные..."
              width={265}
            />
          </div>
        </Panel>

        <AppealsTable />
      </MainLayout>
    </React.Fragment>
  );
}
