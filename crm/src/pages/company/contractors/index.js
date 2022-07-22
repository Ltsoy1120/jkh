import Link from "next/link";
import React from "react";
import Button from "../../../components/Buttons/Button/Button";
import MainLayout from "../../../components/MainLayout/MainLayout";
import ContractorsTables from "../../../components/Tables/ContractorsTables/ContractorsTables";
import styles from "../../../styles/common.module.scss";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import { SimpleSelect } from "../../../components/Forms/SimpleSelect/SimpleSelect";
import classes from "../../../styles/filter.module.scss";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";
import Panel from "../../../ui/Panel/Panel";

const testWork = [
  { text: "Работа1", id: 1 },
  { text: "Работа2", id: 2 },
  { text: "Работа3", id: 3 },
];

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Компания / Подрядчики" title="Подрядчики" mainTitle="Подрядчики">
        <div className={styles.absoluteBtn}>
          <Link href="/company/contractors/addContractor">
            <a>
              <Button>Добавить подрядчика</Button>
            </a>
          </Link>
        </div>
        <Panel>
          <div className={`flex`}>
            <InputLabel
              label="Название"
              type="text"
              id="fullName"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="ФИО"
              type="text"
              id="userType"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <SimpleSelect width={265} title="Тип работ" placeholder="Введите данные..." data={testWork} />
            <div className={classes.rightBlock}>
              <Button bcg={true}>Найти</Button>
              <ResetFilter />
            </div>
          </div>
        </Panel>
        <ContractorsTables />
      </MainLayout>
    </React.Fragment>
  );
}
