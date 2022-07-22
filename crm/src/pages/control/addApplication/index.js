import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import TabsPassportOffice from "../../../components/Tabs/TabsPassportOffice/TabsPassportOffice";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import styles from "../../../styles/control/addapplication/addApplication.module.scss";
import InputPhone from "../../../components/Forms/InputPhone/InputPhone";
import AddPlus from "../../../components/AddPlus/AddPlus";
import Button from "../../../components/Buttons/Button/Button";
import { SimpleSelect } from "../../../components/Forms/SimpleSelect/SimpleSelect";
import { DateSelect } from "../../../components/DateSelect/DateSelect";
import CheckBox from "../../../components/CheckBox/CheckBox";
export default function Home() {
  const [valueDate, setValueDate] = React.useState(new Date());

  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Диспетчерская / Заявки / Новая заявка" title="новая заявка" mainTitle="новая заявка">
        <div className={styles.wrapper}>
          <div className={`${styles.wrapInput} flex `}>
            <SimpleSelect
              title="Тип заявки"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={360}
            />
          </div>

          <div className={`${styles.wrapInput} flex `}>
            <InputLabel
              label="Место работы"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
              height={82}
            >
              <p>Добавить документы</p>
              <AddPlus href="" margin_bottom={0} />
            </InputLabel>
          </div>
          <div className={`${styles.wrapInput} flex`}>
            <InputLabel
              label="Адрес"
              type="text"
              id="adress"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
            />
            <InputLabel
              label="Подъезд"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
            />
            <InputLabel
              label="Этаж"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
            />
          </div>
          <div className={`${styles.wrapInput} flex`}>
            <InputLabel
              label="ФИО или номер лицевого счета"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
            />
          </div>

          <div className={`${styles.wrapInput} flex`}>
            <InputLabel
              label="Контактный телефон"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <div className={`${styles.wrapCheckBox} flex items-center`} style={{ marginTop: "25px" }}>
              <CheckBox />
              <span>Отправить на почту новый пароль</span>
            </div>
          </div>

          <div style={{ marginTop: 50 }}>
            <Button bcg={true} margin_right={30}>
              Создать
            </Button>
            <Button>Отмена</Button>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
