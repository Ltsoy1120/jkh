import React, { useState } from "react";
import AddAvatar from "../../../../components/AddAvatar/AddAvatar";
import Button from "../../../../components/Buttons/Button/Button";
import CheckMark from "../../../../components/Buttons/CircleButtons/CheckMark/CheckMark";
import Remove from "../../../../components/Buttons/CircleButtons/Remove/Remove";
import InputLabel from "../../../../components/Forms/InputLabel/InputLabel";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import ToggleSwitch from "../../../../components/ToggleSwitch/ToggleSwitch";
import styles from "../../../../styles/company/contractors/addContractor.module.scss";

export default function Home() {
  const [switchActive, updateSwitchActive] = useState(true);
  return (
    <React.Fragment>
      <MainLayout title="Добавить абонента" mainTitle="Абоненты">
        <div className={styles.wrapper}>
          <div className={styles.wrapAvatar}>
            <AddAvatar />

            <div className={`flex flex-col items-center ${styles.wrap}`}>
              <div className={`flex items-center ${styles.wrapSwitch}`}>
                <div className={styles.switch} onClick={() => updateSwitchActive(!switchActive)}>
                  <ToggleSwitch />
                </div>
                {switchActive ? <span>Активен</span> : <span className={styles.inactive}>Неактивен</span>}
              </div>
            </div>
          </div>

          <div className={styles.wrapForms}>
            <div className={styles.wrap}>
              <h2>Общая информация об абоненте</h2>
              <InputLabel
                label="Название"
                type="text"
                id="name1"
                placeholder="Введите данные..."
                margin_right={20}
                width={455}
                margin_bottom={20}
              />

              <div className={`flex `}>
                <InputLabel
                  label="Название"
                  type="text"
                  id="name2"
                  placeholder="Введите данные..."
                  margin_right={20}
                  width={265}
                />
                <InputLabel label="Название" type="text" id="name3" placeholder="Введите данные..." width={265} />
              </div>
            </div>

            <div className={`${styles.wrapApplicationTypes}`}>
              <h2>Типы заявок</h2>
              <InputLabel
                label="Название"
                type="text"
                id="name4"
                placeholder="Введите данные..."
                margin_right={20}
                width={455}
              >
                <CheckMark />
              </InputLabel>
            </div>

            <h2>Сотрудники</h2>
            <div className={`flex ${styles.wrap}`}>
              <InputLabel
                label="Название"
                type="text"
                id="name5"
                placeholder="Введите данные..."
                margin_right={20}
                width={455}
              />
              <InputLabel
                label="Название"
                type="text"
                id="name6"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              >
                <CheckMark />
              </InputLabel>
            </div>
            <div className={`flex`}>
              <InputLabel
                label="Название"
                type="text"
                id="name7"
                placeholder="Введите данные..."
                margin_right={20}
                width={455}
              />
              <InputLabel
                label="Название"
                type="text"
                id="name8"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              >
                <Remove />
              </InputLabel>
            </div>

            <div className={styles.wrapButtons}>
              <Button bcg={true} margin_right={30}>
                Помещение
              </Button>
              <Button>Отмена</Button>
            </div>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
