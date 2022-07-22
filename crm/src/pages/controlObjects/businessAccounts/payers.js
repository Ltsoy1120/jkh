import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import TabsBusinessAccounts from "../../../components/Tabs/TabsBusinessAccounts/TabsBusinessAccounts";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import styles from "../../../styles/controlObjects/businessAccounts/index.module.scss";
import Button from "../../../components/Buttons/Button/Button";
import Plus from "../../../components/Buttons/CircleButtons/Plus/Plus";

export default function Payers() {
  return (
    <React.Fragment>
      <MainLayout title="Лицевые счета" mainTitle="Лицевой счет №1234567">
        <TabsBusinessAccounts />
        <div className={styles.wrapper}>
          <InputLabel
            margin_bottom={30}
            label="Название"
            type="text"
            id="nameCompany"
            placeholder="Введите данные..."
            width={360}
          />
          <div className={`flex ${styles.wrapInput}`}>
            <InputLabel
              label="Название"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel label="Название" type="text" id="nameCompany" placeholder="Введите данные..." width={265} />
          </div>
          <div className={`flex ${styles.wrapInput}`}>
            <InputLabel
              label="Название"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel label="Название" type="text" id="nameCompany" placeholder="Введите данные..." width={265} />
          </div>
          <InputLabel
            label="Название"
            type="text"
            id="nameCompany"
            placeholder="Введите данные..."
            margin_right={20}
            margin_bottom={30}
            width={265}
          >
            <Plus />
          </InputLabel>
          <InputLabel label="Название" type="text" id="nameCompany" placeholder="Введите данные..." width={265} />
          <div className={styles.wrapButtons}>
            <Button bcg={true} margin_right={18}>
              Помещение
            </Button>
            <Button>Отмена</Button>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
