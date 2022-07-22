import React, { useState } from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import styles from "../../../../styles/receptionOfCitizens/residentRecord.module.scss";
import TabsReceptionOfCitizens from "../../../../components/Tabs/TabsReceptionOfCitizens/TabsReceptionOfCitizens";
import CheckMark from "../../../../components/Buttons/CircleButtons/CheckMark/CheckMark";
import { SimpleInput } from "../../../../components/Forms/SimpleInput/SimpleInput";
import Button from "../../../../components/Buttons/Button/Button";
import ToggleSwitch from "../../../../components/ToggleSwitch/ToggleSwitch";

export default function Home() {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Прием граждан / Настройки" title="Настройки" mainTitle="Настройки">
        <TabsReceptionOfCitizens />

        <div className={styles.topBlock}>
          <h2>Название</h2>
          <div className={styles.wrapSimpleInput}>
            <div className={styles.inputName}>
              <SimpleInput size="middle" title="Тема приема" type="text" id="name" placeholder="Введите данные..." />
            </div>
            <div className={styles.checkBtn}>
              <div className={`flex items-center ${styles.wrapSwitch}`}>
                <div className={styles.switch} onClick={() => updateSwitchActive(!switchActive)}>
                  <ToggleSwitch />
                </div>
                {switchActive ? <span>Неактивна</span> : <span>Активна</span>}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Сотрудники</h2>
          <div className={styles.wrapSimpleInput}>
            <div className={styles.inputName}>
              <SimpleInput size="middle" title="Сотрудники" type="text" id="name" placeholder="Введите данные..." />
            </div>
            <div className={styles.checkBtn}>
              <CheckMark />
            </div>
          </div>
        </div>

        <div className={styles.containerButtonsAddHouse}>
          <Button bcg>Создать</Button>
          <Button>Отмена</Button>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
