import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import TabsBusinessAccounts from "../../../components/Tabs/TabsBusinessAccounts/TabsBusinessAccounts";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import styles from "../../../styles/controlObjects/businessAccounts/index.module.scss";
import AddPlus from "../../../components/AddPlus/AddPlus";
import Button from "../../../components/Buttons/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout title="Лицевые счета" mainTitle="Лицевой счет №1234567">
        <TabsBusinessAccounts />

        <div className={styles.wrapper}>
          <div className={styles.wrapBtn}>
            <Link href="/">
              <a>
                <Button>Помещения</Button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Button>Список помещений</Button>
              </a>
            </Link>
          </div>
          <div className={styles.wrap}>
            <h2>Общая информация по счету</h2>
            <InputLabel
              margin_bottom={30}
              label="Название"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              width={265}
            />
            <div className={`flex ${styles.wrapName}`}>
              <InputLabel
                label="Название"
                type="text"
                id="nameCompany"
                placeholder="Введите данные..."
                margin_right={20}
                width={455}
              />
              <InputLabel label="Название" type="text" id="nameCompany" placeholder="Введите данные..." width={265} />
            </div>
            <InputLabel label="Название" type="text" id="nameCompany" placeholder="Введите данные..." width={265} />
          </div>

          <div className={styles.wrapTwo}>
            <h2>Площади по Л/С</h2>
            <div className={`flex`}>
              <InputLabel
                label="Название"
                type="text"
                id="nameCompany"
                placeholder="Введите данные..."
                margin_right={20}
                width={170}
              />
              <InputLabel
                label="Название"
                type="text"
                id="nameCompany"
                placeholder="Введите данные..."
                margin_right={20}
                width={170}
              />
              <InputLabel label="Название" type="text" id="nameCompany" placeholder="Введите данные..." width={170} />
            </div>
          </div>

          <div className={styles.wrapThree}>
            <h2>Документы</h2>
            <div className={`flex`}>
              <InputLabel
                label="Название"
                type="text"
                id="nameCompany"
                placeholder="Введите данные..."
                margin_right={20}
                width={360}
              />
              <InputLabel label="Название" type="text" id="nameCompany" placeholder="Введите данные..." width={170} />
            </div>
          </div>

          <AddPlus name="Добавить документы" href="/controlObjects/businessAccounts" />

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
