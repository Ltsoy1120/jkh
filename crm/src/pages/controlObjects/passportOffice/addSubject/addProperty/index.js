import React from "react";
import MainLayout from "../../../../../components/MainLayout/MainLayout";
import TabsPassportOffice from "../../../../../components/Tabs/TabsPassportOffice/TabsPassportOffice";
import InputLabel from "../../../../../components/Forms/InputLabel/InputLabel";
import styles from "../../../../../styles/controlObjects/passportOffice/addSubject/addProperty/index.module.scss";
import InputPhone from "../../../../../components/Forms/InputPhone/InputPhone";
import AddPlus from "../../../../../components/AddPlus/AddPlus";
import Button from "../../../../../components/Buttons/Button/Button";
import { DateSelect } from "../../../../../components/DateSelect/DateSelect";
export default function Home() {
  const [valueDate, setValueDate] = React.useState(new Date());

  return (
    <React.Fragment>
      <MainLayout title="Новый субъект" mainTitle="Новый субъект">
        <TabsPassportOffice />
        <div className={styles.wrap}>
          <h2>Добавить новую собственность</h2>
          <br />
          <div className={`flex`}>
            <div className={`mr-5`}>
              <DateSelect helperText="Дата начала владения" onChange={setValueDate} value={valueDate} />
            </div>
            <DateSelect helperText="Дата окончания владения" onChange={setValueDate} value={valueDate} />
          </div>
          <br />
          <br />
          <InputLabel
            label="Регистрационный номер"
            type="text"
            id="nameCompany"
            placeholder="Введите данные..."
            margin_right={20}
            width={360}
          />
          <br />
          <br />
          <div className={`flex`}>
            <InputLabel
              label="ФИО"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Л/С"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Доля собственности"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              width={170}
            />
          </div>
          <br />
          <br />
          <div className={`flex`}>
            <InputLabel
              label="Комментарии"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
              height={82}
              textAlign={"start"}
              style={{ height: 82 }}
            >
              <AddPlus href="" margin={0} />
            </InputLabel>
          </div>
          <div className={styles.wrapButtons} style={{ marginTop: 10 }}>
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
