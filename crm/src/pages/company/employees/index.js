import Link from "next/link";
import React, { useState } from "react";
import Button from "../../../components/Buttons/Button/Button";
import MainLayout from "../../../components/MainLayout/MainLayout";
import EmployeesTables from "../../../components/Tables/EmployeesTables/EmployeesTables";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import { SimpleSelect } from "../../../components/Forms/SimpleSelect/SimpleSelect";
import { DateSelect } from "../../../components/DateSelect/DateSelect";
import classes from "../../../styles/filter.module.scss";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";
import Panel from "../../../ui/Panel/Panel";
import BtnWrapper from "../../../components/BtnWrapper/BtnWrapper";
import styles from "../../../styles/common.module.scss";

const testUser = [
  { text: "Тема приема1", id: 1 },
  { text: "Тема приема2", id: 2 },
  { text: "Тема приема3", id: 3 },
];

export default function Home() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Компания / Сотрудники" title="Сотрудники" mainTitle="Сотрудники">
        <BtnWrapper>
          <Link href="/company/employees/addEmployee">
            <a>
              <Button>Добавить сотрудника</Button>
            </a>
          </Link>
        </BtnWrapper>

        <Panel>
          <div className={styles.containerInputs}>
            <InputLabel label="ФИО" type="text" id="fullName" placeholder="Введите данные..." s width={265} />
            <SimpleSelect title="Тип пользователя" placeholder="Выберите из списка..." data={testUser} width={265} />
            <DateSelect helperText="Дата регистрации" onChange={setValueDate} value={valueDate} />
            <div className={classes.rightBlock}>
              <Button bcg={true}>Найти</Button>
              <ResetFilter />
            </div>
          </div>
        </Panel>
        <EmployeesTables />
      </MainLayout>
    </React.Fragment>
  );
}
