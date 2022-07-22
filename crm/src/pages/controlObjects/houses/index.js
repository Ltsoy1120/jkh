import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import HousesTable from "../../../components/Tables/ControlObject/housesTables/HousesTable";
import { Button } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/controlObjects/houses/houses.module.scss";
import classes from "../../../styles/common.module.scss";
import Panel from "../../../ui/Panel/Panel";
import { SimpleInput } from "../../../components/Forms/SimpleInput/SimpleInput";
import { SimpleSelect } from "../../../components/Forms/SimpleSelect/SimpleSelect";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";
import { testData } from "../../../utils/constants";

const pathnameList = {
  home: "/ Дома",
  listHome: "/ Список домов",
};

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Объекты управления / Дома / Список домов"
        title="Объекты управления"
        mainTitle="Список домов"
      >
        <div className={styles.containerButtons}>
          <Button>Экпорт</Button>
          <Link href="/controlObjects/houses/addHouse">
            <a href="">
              <Button>Добавить новый дом</Button>
            </a>
          </Link>
        </div>

        <Panel>
          <div className={styles.containerForms}>
            <SimpleInput size="middle" placeholder="Введите данные..." label="Адрес" />
            <SimpleInput size="small" placeholder="Введите данные..." label="ФИАС" />
            <SimpleSelect size="small" title="Тип управления" placeholder="Выберите из списка..." data={testData} />
            <div className={classes.buttonsFilter}>
              <Button bcg>Найти</Button>
              <ResetFilter />
            </div>
          </div>
        </Panel>
        <HousesTable />
      </MainLayout>
    </React.Fragment>
  );
}
