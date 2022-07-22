import React, { useState } from "react";
import AddAvatar from "../../../../components/AddAvatar/AddAvatar";
import Button from "../../../../components/Buttons/Button/Button";
import CheckMark from "../../../../components/Buttons/CircleButtons/CheckMark/CheckMark";
import Remove from "../../../../components/Buttons/CircleButtons/Remove/Remove";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import InputButton from "../../../../components/Forms/InputButton/InputButton";
import InputLabel from "../../../../components/Forms/InputLabel/InputLabel";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import TabsEmployee from "../../../../components/Tabs/TabsEmployee/TabsEmployee";
import ToggleSwitch from "../../../../components/ToggleSwitch/ToggleSwitch";
import styles from "../../../../styles/company/employees/addEmployee/index.module.scss";

export default function Home() {
  const [switchActive, updateSwitchActive] = useState(true);
  return (
    <React.Fragment>
      <MainLayout title="Личная информация" mainTitle="Сотрудники">
        <TabsEmployee />
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
            <h2>Общая информация о сотруднике</h2>
            <div className={styles.wrap}>
              <div className={`flex ${styles.wrapInput}`}>
                <InputLabel
                  label="Фамилия"
                  type="text"
                  id="surname"
                  placeholder="Введите данные..."
                  margin_right={20}
                  width={265}
                />
                <InputLabel label="Имя" type="text" id="name" placeholder="Введите данные..." width={265} />
              </div>
              <div className={`flex ${styles.wrapInput}`}>
                <InputLabel
                  label="Отчество"
                  type="text"
                  id="patronymic"
                  placeholder="Введите данные..."
                  margin_right={20}
                  width={265}
                />
                <InputLabel
                  label="Дата рождения"
                  type="text"
                  id="dateOfBirth"
                  placeholder="Введите данные..."
                  width={265}
                />
              </div>
              <div className={`flex ${styles.wrapInput}`}>
                <InputLabel
                  label="Контактный телефон"
                  type="number"
                  id="phoneNumber"
                  placeholder="+7 - ( _ _ _ ) - _ _ _ - _ _ - _ _"
                  margin_right={20}
                  width={265}
                />
                <InputLabel label="E-mail" type="text" id="email" placeholder="Введите данные..." width={265} />
              </div>
            </div>

            <h2>Должность</h2>
            <div className={styles.wrap}>
              <div className={`flex ${styles.wrapInput}`}>
                <InputLabel
                  label="Тип пользователя"
                  type="text"
                  id="userType"
                  placeholder="Введите данные..."
                  margin_right={20}
                  width={265}
                />
                <InputLabel label="Отдел" type="text" id="department" placeholder="Введите данные..." width={265} />
              </div>
            </div>

            <h2>Подчиненные струдники</h2>
            <div className={styles.wrap}>
              <InputLabel
                label="ФИО"
                type="text"
                id="fullName"
                placeholder="Введите данные..."
                margin_right={20}
                margin_bottom={30}
                width={455}
              >
                <CheckMark />
              </InputLabel>
              <InputButton type="text" placeholder="Введите данные..." margin_right={20} width={455}>
                <Remove />
              </InputButton>
              <InputButton type="text" placeholder="Введите данные..." margin_right={20} width={455}>
                <Remove />
              </InputButton>
            </div>
            <h2>Типы заявок </h2>
            <div className={styles.wrap}>
              <InputLabel
                label="Типы заявок"
                type="text"
                id="type"
                placeholder="Введите данные..."
                margin_right={20}
                margin_bottom={30}
                width={455}
              >
                <CheckMark />
              </InputLabel>
              <InputLabel
                label="Название"
                type="text"
                id="applicationName"
                placeholder="Введите данные..."
                margin_right={20}
                width={455}
              >
                <Remove />
              </InputLabel>
            </div>

            <div className={`flex items-center ${styles.wrapCheckBox}`}>
              <CheckBox />
              <span>Отправить на почту новый пароль</span>
            </div>

            <div className={styles.wrapButtons}>
              <Button bcg={true} margin_right={30}>
                Сохранить
              </Button>
              <Button>Отмена</Button>
            </div>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
