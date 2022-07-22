import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import TabsPassportOffice from "../../../../components/Tabs/TabsPassportOffice/TabsPassportOffice";
import InputLabel from "../../../../components/Forms/InputLabel/InputLabel";
import styles from "../../../../styles/controlObjects/passportOffice/addSubject/index.module.scss";
import InputPhone from "../../../../components/Forms/InputPhone/InputPhone";
import AddPlus from "../../../../components/AddPlus/AddPlus";
import Button from "../../../../components/Buttons/Button/Button";
import { SimpleSelect } from "../../../../components/Forms/SimpleSelect/SimpleSelect";
import { DateSelect } from "../../../../components/DateSelect/DateSelect";
export default function Home() {
  const [valueDate, setValueDate] = React.useState(new Date());

  return (
    <React.Fragment>
      <MainLayout title="Новый субъект" mainTitle="Новый субъект">
        <TabsPassportOffice />
        <div className={styles.wrap}>
          <h2>Общая информация</h2>
          <br />
          <div className={`flex `}>
            <InputLabel
              label="Фамилия"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Имя"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel label="Отчество" type="text" id="nameCompany" placeholder="Введите данные..." width={265} />
          </div>
          <br />
          <br />
          <div className={`flex`}>
            <div className={`m-2`}>
              <DateSelect helperText="Дата рождения" onChange={setValueDate} value={valueDate} />
            </div>
            <SimpleSelect
              title="Пол"
              data={[
                { text: "Мужской", id: 2 },
                { text: "Женский", id: 4 },
              ]}
              type="list"
              id="nameCompany"
              placeholder="Введите данные..."
              width={265}
            />
          </div>
          <br />
          <br />
          <div className={`flex`}>
            <InputLabel
              label="Контактный телефон"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              width={265}
            >
              <AddPlus href="" />
            </InputLabel>
          </div>
          <InputLabel label="E-mail" type="email" id="nameCompany" placeholder="Введите данные..." width={265} />
          <br />
          <br />
          <div className={`flex`}>
            <InputLabel
              label="Место работы"
              type="email"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputPhone label="Рабочий телефон" type="email" id="nameCompany" width={265} mask="+7-(999)-999-99-99" />
          </div>
          <br />
          <h2>Паспортные данные</h2>
          <br />
          <div className={`flex`}>
            <InputLabel
              label="Серия"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
            />
            <InputLabel
              label="Номер"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
            />
            <InputLabel
              label="Код подразделения"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
            />
            <div className={`m-1`}>
              <DateSelect helperText="Дата выдачи" onChange={setValueDate} value={valueDate} />
            </div>
          </div>
          <br />
          <br />
          <InputLabel label="Кем выдан" type="text" id="nameCompany" placeholder="Введите данные..." width={550} />
          <div className={styles.wrapButtons} style={{ marginTop: 40 }}>
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
