import React, { useState } from "react";
import AddAvatar from "../../../components/AddAvatar/AddAvatar";
import Button from "../../../components/Buttons/Button/Button";
import Plus from "../../../components/Buttons/CircleButtons/Plus";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import MainLayout from "../../../components/MainLayout/MainLayout";
import TabsSettingCompany from "../../../components/Tabs/TabsSettingCompany/TabsSettingCompany";
import styles from "../../../styles/company/settings/index.module.scss";
import { SimpleSelect } from "../../../components/Forms/SimpleSelect/SimpleSelect";

const testData = [
  { text: "Часовой пояс1", id: 1 },
  { text: "Часовой пояс2", id: 2 },
  { text: "Часовой пояс3", id: 3 },
];

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        title="Данные о компании"
        mainTitle="Настройка профиля компании"
      >
        <TabsSettingCompany />
        <div className={styles.wrapper}>
          <div className={styles.wrapAvatar}>
            <AddAvatar />
            <span>Логотип компании</span>
          </div>
          <div className={styles.wrapForms}>
            <InputLabel
              label="Название компании"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              width={550}
              margin_bottom={30}
            />
            <InputLabel
              margin_bottom={30}
              label="Адрес"
              type="text"
              id="address"
              placeholder="Введите данные..."
              width={550}
            />
            <div className={styles.wrapSelect}>
              <SimpleSelect
                width={550}
                title="Часовой пояс"
                placeholder="Значение..."
                data={testData}
              />
            </div>
            <InputLabel
              label="Контактный телефон"
              type="number"
              id="contactNumber"
              placeholder="+7 - ( _ _ _ ) - _ _ _ - _ _ - _ _"
              margin_right={20}
              margin_bottom={30}
              width={265}
            >
              <Plus />
            </InputLabel>
            <div className="flex">
              <InputLabel
                label="Домент сайта"
                type="text"
                id="domen"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel
                label="Адрес сайта"
                type="text"
                id="websiteAddress"
                placeholder="Введите данные..."
                width={265}
              />
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
