import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../styles/controlObjects/meteringDevices/coldWater.module.scss";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
export default function coldWater() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="приборы учета" title="Приборы учета" mainTitle="Приборы учета">
        <div className={styles.wrapper}>
          <h2>Подача показаний по прибору учета ЕН123445678909 (Холодная вода)</h2>

          <span className={styles.subTitle}>Август 2021 года</span>

          <div className={`flex`}>
            <InputLabel
              label="Показания прошлого месяца"
              type="text"
              id="lastMonth"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Текущие показания"
              type="text"
              id="currentReadings"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Дата  подачи показаний"
              type="text"
              id="dateOfApplication"
              placeholder="Введите данные..."
              width={265}
            />
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
