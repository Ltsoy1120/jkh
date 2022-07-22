import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Panel from "../../ui/Panel/Panel";
import Button from "../../components/Buttons/Button/Button";
import styles from "../../styles/common.module.scss";
import classes from "../../styles/control/control.module.scss";
import { SimpleInput } from "../../components/Forms/SimpleInput/SimpleInput";
import { DateSelect } from "../../components/DateSelect/DateSelect";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import { ResetFilter } from "../../components/Buttons/ResetFilter/ResetFilter";
import DebtorsTable from "../../components/Tables/Control/Requests/Requests";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Диспетчерская / Заявки" title="Диспетчерская" mainTitle="Диспетчерская">
        <div className={`${styles.absoluteBtn} ${classes.containerBtn}`}>
          <Button>Выгрузить в Exel</Button>
          <Link href={"/control/addApplication"}>
            <a>
              <Button>Добавить заявку</Button>
            </a>
          </Link>
        </div>
        <Panel>
          <div className={classes.containerInput}>
            <SimpleInput size="middle" label="Исполнитель" />
            <DateSelect helperText="Дата создания" />
            <DateSelect helperText="Дата выполнения" />
            <div className={styles.buttonsFilter}>
              <Button bcg={true}>Найти</Button>
              <ResetFilter />
            </div>
          </div>

          <div className={classes.containerInput}>
            <SimpleSelect title="Приоритет" placeholder="Выбирите из списка..." />
            <SimpleSelect title="Статус" placeholder="Выбирите из списка..." />
            <SimpleInput label="Улица" size="middle" placeholder="Введите данные..." />
          </div>

          <div className={classes.containerInput}>
            <SimpleInput label="Дом" placeholder="Введите данные..." />
            <SimpleInput label="Подъезд" placeholder="Введите данные..." />
            <SimpleInput label="Квартира" placeholder="Введите данные..." />
            <SimpleInput label="Лицевой счет, ФИО, номер тел.+7" placeholder="Введите данные..." />
          </div>

          <div className={classes.containerInput}>
            <SimpleSelect size="middle" title="Тип заявки" placeholder="Выбирите из списка..." />
            <SimpleSelect title="Результат работы" placeholder="Выбирите из списка..." />
            <SimpleInput label="Номер заявки" placeholder="Введите данные..." />
          </div>

          <div className={classes.containerInput}>
            <SimpleInput label="Кем создана" size="middle" placeholder="Введите данные..." />
            <SimpleSelect title="Вид оплаты" placeholder="Выбирите из списка..." />
          </div>
        </Panel>
        <DebtorsTable />
      </MainLayout>
    </React.Fragment>
  );
}
