import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import TabsBusinessAccounts from "../../../../components/Tabs/TabsBusinessAccounts/TabsBusinessAccounts";
import InputLabel from "../../../../components/Forms/InputLabel/InputLabel";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import styles from "../../../../styles/controlObjects/businessAccounts/counters/addNewDevice.module.scss";
import TariffSelection from "../../../../components/TariffSelection/TariffSelection";
import AddPlus from "../../../../components/AddPlus/AddPlus";
import Button from "../../../../components/Buttons/Button/Button";
import Link from "next/link";

export default function AddNewDevice() {
  return (
    <React.Fragment>
      <MainLayout title="Лицевые счета" mainTitle="Новый прибор учета">
        <TabsBusinessAccounts />
        <div className={styles.wrapper}>
          <div className={styles.wrapBtn}>
            <Link href="/">
              <a>
                <Button>Помещения</Button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Button>Список помещений</Button>
              </a>
            </Link>
          </div>
          <div>
            <div className={`flex`}>
              <InputLabel
                label="Дом"
                type="text"
                id="home"
                placeholder="Введите данные..."
                margin_right={20}
                width={455}
              />
              <InputLabel label="Помещение" type="text" id="room" placeholder="Введите данные..." width={170} />
            </div>

            <div className={`flex`}>
              <InputLabel
                label="Номер придора учета"
                type="text"
                id="deviceNumber"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel label="Тип прибора" type="text" id="deviceType" placeholder="Введите данные..." width={265} />
            </div>
            <div className={`flex`}>
              <InputLabel
                label="Производитель"
                type="text"
                id="manufacturer"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel label="Модель" type="text" id="model" placeholder="Введите данные..." width={265} />
            </div>
            <InputLabel
              label="Место установки"
              type="text"
              id="installationLocation"
              placeholder="Введите данные..."
              width={550}
            />
          </div>

          <div className={`flex items-center ${styles.wrapCheckBox}`}>
            <CheckBox />
            <span>Наличие антимагнитной пломбы</span>
          </div>

          <div>
            <div className={`flex`}>
              <InputLabel
                label="Дата установки"
                type="text"
                id="installationDate"
                placeholder="Введите данные..."
                margin_right={20}
                width={170}
              />
              <InputLabel
                label="Дата опломбирования"
                type="text"
                id="dateOfSealing"
                placeholder="Введите данные..."
                margin_right={20}
                width={170}
              />
              <InputLabel
                label="Дата ввода в эксплуатацию"
                type="text"
                id="commissioningDate"
                placeholder="Введите данные..."
                width={170}
              />
            </div>
            <div className={`flex`}>
              <InputLabel
                label="Межпроверочный интервал"
                type="text"
                id="сalibrationInterval"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel
                label="Дата следующей поверки"
                type="text"
                id="dateNextVerification"
                placeholder="Введите данные..."
                width={170}
              />
            </div>
          </div>

          <InputLabel
            label="Ресурс учета"
            type="text"
            id="accountingResource"
            placeholder="Введите данные..."
            width={265}
          />

          <TariffSelection />

          <div className={styles.wrapAddPlus}>
            <AddPlus name="Добавить документы" href="/controlObjects/businessAccounts/counters/addNewDevice" />
          </div>

          <div className={`flex`}>
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
