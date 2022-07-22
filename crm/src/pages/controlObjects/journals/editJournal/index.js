import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import styles from "../../../../styles/controlObjects/journals/editJournal/index.module.scss";
import Link from "next/link";
import Button from "../../../../components/Buttons/Button/Button";
import Panel from "../../../../ui/Panel/Panel";
import EditJurnals from "../../../../components/Tables/JournalsTables/EditJurnals/EditJurnals";
import InputLabel from "../../../../components/Forms/InputLabel/InputLabel";
import { ResetFilter } from "../../../../components/Buttons/ResetFilter/ResetFilter";
import classes from "../../../../styles/filter.module.scss";

export default function Home() {
  const [valueDate, setValueDate] = React.useState(new Date());

  const addressArray = [
    "г. Воронеж, ул. Перхоровича д.11",
    "г. Воронеж, ул. Перхоровича д.12",
    "г. Воронеж, ул. Перхоровича д.12",
    "г. Воронеж, ул. Перхоровича д.12",
  ];
  return (
    <React.Fragment>
      <MainLayout title="Журналы" mainTitle="Журналы">
        <div className={styles.wrapper}>
          <div className={styles.wrapBtn}>
            <Link href="/controlObjects/journals/editJournal/addRecord">
              <a>
                <Button>Добавить новую запись</Button>
              </a>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Panel>
          <div className={`flex flex-col`}>
            <div className={`flex`}>
              <InputLabel
                label="Услуга"
                type="text"
                id="journalFilterService"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel
                label="Период"
                type="date"
                id="journalFilterPeriod"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel label="Дом" type="text" id="journalFilterHouse" placeholder="Введите данные..." width={360} />
              <div className={classes.rightBlock}>
                <Button bcg={true}>Найти</Button>
                <ResetFilter />
              </div>
            </div>

            <div className={`flex mt-8`}>
              <InputLabel
                label="Номер помещения"
                type="text"
                id="journalFilterRoomNumber"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
            </div>
          </div>
        </Panel>
        <EditJurnals
          number="Электроэнергия"
          address={addressArray}
          periodFrom="27.08.2021 в 12:00"
          periodTo="27.08.2021 в 18:00"
          reason="Обрыв сети"
          identified="Потребитель"
        />
      </MainLayout>
    </React.Fragment>
  );
}
