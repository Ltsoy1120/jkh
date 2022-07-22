import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { SimpleInput } from "../../../../components/Forms/SimpleInput/SimpleInput";
import styles from "../../../../styles/TelephoneStyle.module.scss";
import Button from "../../../../components/Buttons/Button/Button";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Телефония / Подключенные телефонии / Настройка подключения API Ростелеком"
        title="Настройка подключения API Ростелеком"
        mainTitle="Настройка подключения API Ростелеком"
      >
        <div className={styles.PhoneInputFirst}>
          <SimpleInput size="middle" label={"Тип телефонии"} placeholder="Ростелеком" />
        </div>
        <div className={styles.PhoneGrid}>
          <div className={styles.PhoneInput}>
            <SimpleInput
              size="middle"
              label={"Уникальный код телефонии"}
              placeholder="5E61B2AB42BA100556C447F4BB8A572F"
            />
          </div>
          <div className={styles.PhoneInput}>
            <SimpleInput
              size="middle"
              label={"Уникальный ключ подписи"}
              placeholder="5E61B2AB42BA100556C447F4BB8A572F"
            />
          </div>
          <div className={styles.PhoneInput}>
            <SimpleInput size="middle" label={"Адрес API"} placeholder="https://api.cloudpbx.rt.ru5" />
          </div>
          <div className={styles.PhoneInput}>
            <SimpleInput size="middle" label={"Домен"} placeholder="SNovos2.20.rt.ru" />
          </div>
        </div>
        <div className={styles.ButtonPosition}>
          <Button bcg={true}>Сохранить</Button>
          <Button>Отмена</Button>
        </div>
        <div className={styles.DeliteButton}>
          <Button>Удалить телефонию</Button>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
