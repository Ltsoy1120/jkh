import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../styles/controlObjects/passportOffice/index.module.scss";
import Link from "next/link";
import Button from "../../../components/Buttons/Button/Button";
import Panel from "../../../ui/Panel/Panel";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import PassportOfficeTables from "../../../components/Tables/PassportOfficeTables/PassportOfficeTables";
import classes from "../../../styles/filter.module.scss";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout title="Субъекты" mainTitle="Субъекты">
        <div className={styles.wrapper}>
          <div className={styles.wrapBtn}>
            <Link href="/controlObjects/passportOffice/addSubject">
              <a>
                <Button>Добавить новый субъект</Button>
              </a>
            </Link>
          </div>
        </div>

        <br />
        <br />
        <br />
        <Panel>
          <div className={`flex flex-col`}>
            <div className={`flex `}>
              <InputLabel
                label="Фамилия физического лица"
                type="text"
                id="surnameIndev"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel
                label="Название организации"
                type="text"
                id="organizationName"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel label="Дом" type="text" id="house" placeholder="Введите данные..." width={360} />{" "}
              <div className={classes.rightBlock}>
                <Button bcg={true}>Найти</Button>
                <ResetFilter />
              </div>
            </div>

            <div className={`flex mt-10`}>
              <InputLabel
                label="Номер помещения"
                type="text"
                id="roomNumber"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel
                label="Статус"
                type="text"
                id="status"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel label="Тип" type="text" id="type" placeholder="Введите данные..." width={265} />
            </div>
          </div>
        </Panel>
        <PassportOfficeTables />
      </MainLayout>
    </React.Fragment>
  );
}
