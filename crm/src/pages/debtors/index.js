import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Panel from "../../ui/Panel/Panel";
import { SimpleInput } from "../../components/Forms/SimpleInput/SimpleInput";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import Button from "../../components/Buttons/Button/Button";
import { ResetFilter } from "../../components/Buttons/ResetFilter/ResetFilter";
import styles from "../../styles/common.module.scss";
import classes from "../../styles/debtors/debtors.module.scss";
import DebtorsTable from "../../components/Tables/Debtors/Debtors/DebtorsTable";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Должники / Список дел" title="Должники" mainTitle="Должники">
        <div className={styles.absoluteBtn}>
          <Button>Экспорт</Button>
        </div>
        <Panel>
          <div className={styles.containerFilter}>
            <div className={classes.containerInput}>
              <SimpleSelect placeholder="Выбирите из списка..." size="middle" title="Дом" />
              <SimpleInput label="Номер помещения" placeholder="Введите данные..." />
              <SimpleInput size="massive" label="Фамилия, адрес, телефон" placeholder="Введите данные..." />
              <SimpleSelect size="massive" title="Статус" placeholder="Введите данные..." />
            </div>
            <div className={styles.buttonsFilter}>
              <Button bcg>Найти</Button>
              <ResetFilter />
            </div>
          </div>
        </Panel>
        <DebtorsTable />
      </MainLayout>
    </React.Fragment>
  );
}
