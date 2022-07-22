import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/controlObjects/houses/houses.module.scss";
import { Button } from "@mui/material";
import Panel from "../../ui/Panel/Panel";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import { SimpleInput } from "../../components/Forms/SimpleInput/SimpleInput";
import { RentTable } from "../../components/Tables/RentTable/RentTable";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Кварплата" title="Квартплата" mainTitle="Квартплата">
        <div className={styles.containerButtons}>
          <Button>Скачать архив</Button>
        </div>
        <Panel>
          <div className={`flex ${styles.wrapContent}`}>
            <SimpleSelect width={265} title="Месяц" placeholder="Выбирите из списка..." />
            <SimpleSelect width={265} title="Год" placeholder="Выбирите из списка..." />
            <SimpleInput label="Л/С" size="object" placeholder="Выбирите из списка..." />
          </div>
          <div className={`flex ${styles.wrapContent} ${styles.secondRow}`}>
            <SimpleInput label="Улица" size="middle" placeholder="Выбирите из списка..." />
            <SimpleInput label="Дом" size="object" placeholder="Выбирите из списка..." />
          </div>
          <div className={`flex ${styles.wrapContent}`}>
            <SimpleInput label="Собственник" size="middle" placeholder="Выбирите из списка..." />
            <SimpleSelect width={265} title="Ресурс" placeholder="Выбирите из списка..." />
          </div>
        </Panel>
        <RentTable />
      </MainLayout>
    </React.Fragment>
  );
}
