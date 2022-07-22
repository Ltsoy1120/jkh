import React from "react";
import Link from "next/link";
import Button from "../../../../components/Buttons/Button/Button";
import AddPlus from "../../../../components/AddPlus/AddPlus";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import CountersTable from "../../../../components/Tables/CountersTable/CountersTable";
import TabsBusinessAccounts from "../../../../components/Tabs/TabsBusinessAccounts/TabsBusinessAccounts";
import styles from "../../../../styles/controlObjects/businessAccounts/index.module.scss";

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
          <AddPlus name="Добавить ИПУ" href="/controlObjects/businessAccounts/counters/addNewDevice" />
          <CountersTable />
          <div className={`w-full flex justify-end ${styles.total}`}>
            <span>Итого: 1 пробор учета</span>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
