import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { SimpleInput } from "../../../../components/Forms/SimpleInput/SimpleInput";
import Plus from "../../../../components/Buttons/CircleButtons/Plus/Plus";
import styles from "../../index.module.scss";
import Button from "../../../../components/Buttons/Button/Button";
import LockIcon from "@mui/icons-material/Lock";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Телефония / Подключенные телефонии / Список добавочных Ростелеком"
        mainTitle="Список добавочных Ростелеком"
      >
        <div className={styles.mainBlock}>
          <div className={styles.wrapContent}>
            <div className={styles.lockBlock}>
              <SimpleInput label="Номер" placeholder="901" size="tinyPlus" />
              <LockIcon className={styles.lock} />
            </div>
            <SimpleInput label="Добавить сотрудника" placeholder="Введите данные..." size="middle" />
            <Plus className={styles.plus} />
          </div>

          <div className={styles.botBlock}>
            <div className={`${styles.wrapInput}`}>
              <div className={styles.wrapContent}>
                <SimpleInput label="Закрепленный сотрудник" placeholder="Введите данные..." size="middle" />
                <Plus className={styles.plus} />
              </div>
              <div className={styles.wrapContent}>
                <SimpleInput placeholder="Введите данные..." size="middle" />
                <Plus className={styles.plus} />
              </div>
              <div className={styles.wrapContent}>
                <SimpleInput placeholder="Введите данные..." size="middle" />
                <Plus className={styles.plus} />
              </div>
            </div>
          </div>

          <div className={styles.botBlock}>
            <div className={`${styles.wrapBlock} ${styles.wrapContent}`}>
              <div className={styles.lockBlock}>
                <SimpleInput label="Номер" placeholder="902" size="tinyPlus" />
                <LockIcon className={styles.lock} />
              </div>
              <SimpleInput label="Добавить сотрудника" placeholder="Введите данные..." size="middle" />
              <Plus className={styles.plus} />
            </div>
            <div className={`${styles.wrapInput}`}>
              <div className={styles.wrapContent}>
                <SimpleInput label="Закрепленный сотрудник" placeholder="Введите данные..." size="middle" />
                <Plus className={styles.plus} />
              </div>
              <div className={styles.wrapContent}>
                <SimpleInput placeholder="Введите данные..." size="middle" />
                <Plus className={styles.plus} />
              </div>
              <div className={styles.wrapContent}>
                <SimpleInput placeholder="Введите данные..." size="middle" />
                <Plus className={styles.plus} />
              </div>
            </div>
          </div>

          <div className={styles.wrapButtons}>
            <Button bcg={true} margin_right={30}>
              Сохранить
            </Button>
            <Button>Отмена</Button>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
