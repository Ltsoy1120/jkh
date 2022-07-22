import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import Button from "../../../../components/Buttons/Button/Button";
import { SimpleInput } from "../../../../components/Forms/SimpleInput/SimpleInput";
import styles from "../../../../styles/SettingsPhone.module.scss";
import Plus from "../../../../components/Buttons/CircleButtons/Plus/Plus";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Телефония / Подключенные телефонии / Настройки Ростелеком"
        title="Настройки Ростелеком"
        mainTitle="Настройки Ростелеком"
      >
        <div className={styles.settingsMarginTop}>
          <h1 className={styles.h1Custom}>Сотрудники с доступом к просмотру всех звонков</h1>
          <div className={styles.PlusFlex}>
            <SimpleInput size="exclusive" label={"Добавить сотрудника"} placeholder="Введите данные..." />
            <Plus className={styles.PlusReset} />
          </div>
          <div className={styles.settingsMarginTop}>
            <div className={styles.PlusFlex}>
              <SimpleInput size="exclusive" label={"Закрепленный сотрудник"} placeholder="Введите данные..." />
              <Plus className={styles.PlusReset} />
            </div>
            <div className={styles.PlusFlex}>
              <SimpleInput size="exclusive" placeholder="Введите данные..." />
              <Plus className={styles.PlusReset} />
            </div>
            <div className={styles.PlusFlex}>
              <SimpleInput size="exclusive" placeholder="Введите данные..." />
              <Plus className={styles.PlusReset} />
            </div>
          </div>
        </div>
        <div className={styles.settingsMarginTop}>
          <h1 className={styles.h1Custom}>Компании с боступом просмотра всех звонков</h1>
          <div className={styles.PlusFlex}>
            <SimpleInput size="exclusive" label={"Добавить компанию"} placeholder="Введите данные..." />
            <Plus className={styles.PlusReset} />
          </div>
          <div className={styles.settingsMarginTop}>
            <div className={styles.PlusFlex}>
              <SimpleInput size="exclusive" label={"Компания (Название, ИНН)"} placeholder="Введите данные..." />
              <Plus className={styles.PlusReset} />
            </div>
          </div>
        </div>
        <div className={styles.settingsMarginTop}>
          <h1 className={styles.h1Custom}>Добавленные номера</h1>
          <div className={styles.settingsMarginTop}>
            <div className={styles.PlusFlex}>
              <SimpleInput size="exclusive" label={"Номера"} placeholder="Введите данные..." />
              <Plus className={styles.PlusReset} />
            </div>
          </div>
          <div className={styles.PlusFlex}>
            <SimpleInput size="exclusive" placeholder="Введите данные..." />
            <Plus className={styles.PlusReset} />
          </div>
        </div>
        <div className={styles.ButtonSettings}>
          <Button bcg={true}>Сохранить</Button>
          <Button>Отмена</Button>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
