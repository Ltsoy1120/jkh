import React, { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import NotificationsTable from "../../components/Tables/NotificationsTable/NotificationsTable";
import Panel from "../../ui/Panel/Panel";
import { DateSelect } from "../../components/DateSelect/DateSelect";
import Button from "../../components/Buttons/Button/Button";
import { ResetFilter } from "../../components/Buttons/ResetFilter/ResetFilter";
import styles from "../../styles/common.module.scss";

const pageTitle = "Уведомления сервиса";

export default function Notifications() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <MainLayout breadcrumbs="Уведомления / Уведомления сервиса " title={pageTitle} mainTitle={pageTitle}>
      <Panel>
        <div className={styles.containerInputs}>
          <DateSelect helperText="Дата создания" onChange={setValueDate} value={valueDate} />
          <div className={styles.buttonsFilter}>
            <Button bcg={true}>Найти</Button>
            <ResetFilter />
          </div>
        </div>
      </Panel>
      <NotificationsTable />
    </MainLayout>
  );
}
