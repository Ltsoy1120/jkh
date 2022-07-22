import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../styles/controlObjects/meteringDevices/coldWater.module.scss";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";

export default function electricity() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="приборы учета" title="Приборы учета" mainTitle="Приборы учета">
        <div className={styles.wrapper}>
          <h2>Подача показаний по прибору учета ЕН123445678909 (Электроэнергия)</h2>
          <span className={styles.subTitle}>Август 2021 года</span>
          <div className={`flex`}>
            <InputLabel
              label={
                <div>
                  Час пик - Т1 <br /> (Показания в прошлом месяце: 100 000)
                </div>
              }
              type="text"
              id="rushHour"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label={
                <div>
                  Льготное время - Т2 <br />
                  (Показания в прошлом месяце: 100 000)
                </div>
              }
              type="text"
              id="graceTime"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label={
                <div>
                  Ролульготное время - Т2 <br />
                  (Показания в прошлом месяце: 100 000)
                </div>
              }
              type="text"
              id="rollingTime"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <div className={styles.wrapLastInput}>
              <InputLabel
                label="Дата  подачи показаний"
                type="text"
                id="dateApplication"
                placeholder="Введите данные..."
                width={170}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
