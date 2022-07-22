import React, { useState } from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import Link from "next/link";
import Button from "../../../components/Buttons/Button/Button";
import BtnWrapper from "../../../components/BtnWrapper/BtnWrapper";
import Panel from "../../../ui/Panel/Panel";
import { DateSelect } from "../../../components/DateSelect/DateSelect";
import { SimpleInput } from "../../../components/Forms/SimpleInput/SimpleInput";
import styles from "../../../styles/common.module.scss";
import classes from "../../../styles/filter.module.scss";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";
import { EmployeesTable } from "../../../components/Tables/EmployeesTable/EmployeesTable";

export default function Home() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <MainLayout
      breadcrumbs="Уведомления / Уведомления сотрудников"
      title="Уведомления сотрудников"
      mainTitle="Уведомления сотрудников"
    >
      <BtnWrapper>
        <Link href="/">
          <a>
            <Button>Создать новое уведомление</Button>
          </a>
        </Link>
      </BtnWrapper>

      <Panel>
        <div className={styles.wrapBlock}>
          <DateSelect helperText="Дата поступления" onChange={setValueDate} value={valueDate} />
          <SimpleInput label="Автор" placeholder="Введите данные..." size="object" />
          <SimpleInput label="Получатель" placeholder="Введите данные..." size="object" />
          <div className={classes.rightBlock}>
            <Button bcg={true}>Найти</Button>
            <ResetFilter />
          </div>
        </div>
      </Panel>
      <EmployeesTable />
    </MainLayout>
  );
}
