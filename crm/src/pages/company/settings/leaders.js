import React, { useState } from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import Button from "../../../components/Buttons/Button/Button";
import styles from "../../../styles/company/settings/leaders.module.scss";
import TabsSettingCompany from "../../../components/Tabs/TabsSettingCompany/TabsSettingCompany";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import Plus from "../../../components/Buttons/CircleButtons/Plus";
import { DateSelect } from "../../../components/DateSelect/DateSelect";

export default function Leader() {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <React.Fragment>
      <MainLayout title="Руководители" mainTitle="Настройка профиля компании">
        <TabsSettingCompany />
        <div className={styles.wrapper}>
          <div className={`flex ${styles.wrapInput}`}>
            <InputLabel
              label="Фамилия"
              type="text"
              id="surname"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Имя"
              type="text"
              id="name"
              placeholder="Введите данные..."
              width={265}
            />
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
            <DateSelect
              helperText="Дата рождения"
              onChange={setValueDate}
              value={valueDate}
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
          <InputLabel
            margin_bottom={30}
            label="E-mail"
            type="text"
            id="email"
            placeholder="Введите данные..."
            width={265}
          />
          <InputLabel
            margin_bottom={30}
            label="Должность"
            type="text"
            id="position"
            placeholder="Введите данные..."
            width={550}
          />
          <InputLabel
            label="ФИО руководителя компании в родительном падеже"
            type="text"
            id="fullNameOfTheHead"
            placeholder="Введите данные..."
            width={550}
            margin_bottom={30}
          />
          <InputLabel
            label="Основание назначения на должность"
            type="text"
            id="basisForAppointment"
            placeholder="Введите данные..."
            width={550}
          />
          <div className={styles.wrapButtons}>
            <Button bcg={true} margin_right={30}>
              Сохранить
            </Button>
            <Button>Отмена</Button>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
