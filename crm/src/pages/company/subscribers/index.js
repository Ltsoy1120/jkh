import Link from "next/link";
import React from "react";
import Button from "../../../components/Buttons/Button/Button";
import MainLayout from "../../../components/MainLayout/MainLayout";
import SubscriberTables from "../../../components/Tables/SubscriberTables/SubscriberTables";
import styles from "../../../styles/common.module.scss";
import Panel from "../../../ui/Panel/Panel";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import classes from "../../../styles/filter.module.scss";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Компания / Абоненты" title="Абоненты" mainTitle="Абоненты">
        <div className={styles.absoluteBtn}>
          <Link href="/company/subscribers/addSubscriber">
            <a>
              <Button>Добавить абонента</Button>
            </a>
          </Link>
        </div>
        <Panel>
          <div className={`flex`}>
            <InputLabel
              label="Фамилия, E-mail, телефон"
              type="text"
              id="fullName"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Лицевой счет"
              type="text"
              id="userType"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Номер дома"
              type="text"
              id="registrationDate"
              placeholder="Введите данные..."
              width={170}
            />
            <div className={classes.rightBlock}>
              <Button bcg={true}>Найти</Button>
              <ResetFilter />
            </div>
          </div>
        </Panel>
        <SubscriberTables />
      </MainLayout>
    </React.Fragment>
  );
}
