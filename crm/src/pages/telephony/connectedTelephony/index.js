import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import ConnectedTlpTables from "../../../components/Tables/Telephony/connectedTelephony/ConnectedTlpTables";
import Button from "../../../components/Buttons/Button/Button";
import classes from "../../../styles/common.module.scss";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Телефония / Подключенные телефонии"
        title="Подключенные телефонии"
        mainTitle="Подключенные телефонии"
      >
        <div className={classes.absoluteBtn}>
          <Button>Добавить телефонию</Button>
        </div>
        <ConnectedTlpTables />
      </MainLayout>
    </React.Fragment>
  );
}
