import React, { useState } from "react";
import MainLayout from "../../../../../components/MainLayout";
import Tabs from "../../../../../components/Tabs";
import AddLogo from "../../../../../components/AddLogo";
import ToggleSwitch from "../../../../../components/ToggleSwitch";
import styles from "../../../../../styles/company/employees/addEmployee/accessRights.module.scss";
import Button from "../../../../../components/Buttons/Button";
import CheckBox from "../../../../../components/CheckBox";
import NameOfСategory from "../../../../../components/NameOfСategory/NameOfСategory";
import { employeesLinks } from "../../../../../components/Tabs/tabLinks";
import { useRouter } from "next/router";

export default function AccessRights() {
  const companyId = useRouter().query.companyId;
  const [switchActive, updateSwitchActive] = useState(true);
  const [switchRights, updateSwitchRights] = useState(true);
  return (
    <React.Fragment>
      <MainLayout title="Права доступа" mainTitle="Сотрудники">
        <Tabs tabLinks={employeesLinks(companyId)} />
        <div className={styles.wrapper}>
          <div className={styles.wrapAvatar}>
            <AddLogo logo="/avatar/avatar.png" />

            <div className={`flex flex-col items-center ${styles.wrap}`}>
              <span className={styles.span}>Id 12345678</span>
              <div className={`flex items-center ${styles.wrapSwitch}`}>
                <div
                  className={styles.switch}
                  onClick={() => updateSwitchActive(!switchActive)}
                >
                  <ToggleSwitch />
                </div>
                {switchActive ? (
                  <span>Активен</span>
                ) : (
                  <span className={styles.inactive}>Неактивен</span>
                )}
              </div>

              <span className={styles.span}>Зарегестрирован</span>
              <span className={styles.span}>23.08.2021</span>
            </div>
          </div>

          <div className={styles.rightBlock}>
            <div className={`flex ${styles.wrapBtn}`}>
              <Button margin_right={20}>Применить скопированные права</Button>
              <Button>Скопировать права</Button>
            </div>

            <h2>Перечь прав для просмотра редактирования программе CRM</h2>

            <div className={`flex items-center ${styles.wrapCheckBox}`}>
              <div onClick={() => updateSwitchRights(!switchRights)}>
                <CheckBox />
              </div>
              <span className={switchRights ? styles.active : ""}>
                Отправить на почту новый пароль
              </span>
            </div>

            <NameOfСategory title="Название категории" />
            <NameOfСategory title="Название категории" />

            <div className={styles.wrapButtons}>
              <Button bcg={true} margin_right={16}>
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
