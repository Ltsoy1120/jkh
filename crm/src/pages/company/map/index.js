import React, { useState } from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import Panel from "../../../ui/Panel/Panel";
import { SimpleInput } from "../../../components/Forms/SimpleInput/SimpleInput";
import { SimpleSelect } from "../../../components/Forms/SimpleSelect/SimpleSelect";
import { DateSelect } from "../../../components/DateSelect/DateSelect";
import styles from "../../../styles/filter.module.scss";
import Button from "../../../components/Buttons/Button/Button";
import MapTable from "../../../components/Tables/MapTable/MapTable";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";

export default function Home() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Прием граждан / История приема" title="История приема" mainTitle="История приема">
        <Panel>
          <div className={styles.containerFilters}>
            <div className={styles.flexBox}>
              <SimpleSelect title="Тип поиска" placeholder="Сотрудники" />
              <SimpleInput label="ФИО, адрес" size="massive" placeholder="Введите данные..." />
              <div className={styles.rightBlock}>
                <Button bcg={true}>Найти</Button>
                <ResetFilter />
              </div>
            </div>
            <div className={styles.flexBox}>
              <SimpleSelect title="Должность" placeholder="Инженер" />
              <DateSelect helperText="Дата" onChange={setValueDate} value={valueDate} />
            </div>
          </div>
        </Panel>
        <div className={styles.map} />
        <MapTable />
      </MainLayout>
    </React.Fragment>
  );
}
