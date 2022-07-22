import React from "react";
import Button from "../../../components/Buttons/Button/Button";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import MainLayout from "../../../components/MainLayout/MainLayout";
import TabsSettingCompany from "../../../components/Tabs/TabsSettingCompany/TabsSettingCompany";
import styles from "../../../styles/company/settings/requisites.module.scss";

export default function Requisites() {
  return (
    <React.Fragment>
      <MainLayout title="Реквизиты" mainTitle="Настройка профиля компании">
        <TabsSettingCompany />
        <div className={styles.wrapper}>
          <div className={`flex ${styles.wrapInput}`}>
            <InputLabel
              label="ОГРН"
              type="text"
              id="ogrn"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="ИНН"
              type="text"
              id="inn"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="КПП"
              type="text"
              id="kpp"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
          </div>
          <InputLabel
            margin_bottom={30}
            label="Наименовние банка"
            type="text"
            id="bankName"
            placeholder="Введите данные..."
            width={550}
          />
          <div className="flex">
            <InputLabel
              label="БИК"
              type="text"
              id="bik"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Рассчетный счет"
              type="text"
              id="paymentAccount"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Корреспондентский счет"
              type="text"
              id="correspondentAccount"
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
      </MainLayout>
    </React.Fragment>
  );
}
