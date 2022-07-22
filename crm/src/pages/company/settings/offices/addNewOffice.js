import React from "react";
import Button from "../../../../components/Buttons/Button/Button";
import Plus from "../../../../components/Buttons/CircleButtons/Plus";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import InputLabel from "../../../../components/Forms/InputLabel/InputLabel";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import Schedule from "../../../../components/Schedule/Schedule";
import TabsSettingCompany from "../../../../components/Tabs/TabsSettingCompany/TabsSettingCompany";
import styles from "../../../../styles/company/settings/addNewOffice.module.scss";

export default function AddNewOffice() {
  return (
    <React.Fragment>
      <MainLayout
        title="Добавить новый офис"
        mainTitle="Настройка профиля компании"
      >
        <TabsSettingCompany />
        <div className={`flex flex-col ${styles.wrapper}`}>
          <h2>Информация об офисе компании</h2>

          <div className={styles.wrapInputs}>
            <InputLabel
              label="Название офиса"
              type="text"
              id="nameOffice"
              placeholder="Введите данные..."
              width={550}
            />
            <InputLabel
              label="Адрес"
              type="text"
              id="address"
              placeholder="Введите данные..."
              width={550}
            />
            <InputLabel
              label="Время работы"
              type="text"
              id="workingHours"
              placeholder="Например:  пн. - пт. с 09:00 до 19:00"
              width={360}
            />
            <InputLabel
              label="Номер телефона"
              type="number"
              id="phoneNumber"
              placeholder="+7 - ( _ _ _ ) - _ _ _ - _ _ - _ _"
              margin_right={20}
              width={360}
            >
              <Plus />
            </InputLabel>
            <InputLabel
              label="Номер телефона"
              type="number"
              id="phoneNumberTwo"
              placeholder="+7 - ( _ _ _ ) - _ _ _ - _ _ - _ _"
              width={360}
            />
          </div>

          <h2>Информация о графике приема</h2>

          <div className={`flex items-center ${styles.wrapCheckBox}`}>
            <CheckBox />
            <span>Предварительная запись не требуется</span>
          </div>

          <Schedule />

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
