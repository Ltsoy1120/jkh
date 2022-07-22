import React from "react";
import MainLayout from "../../../../../components/MainLayout/MainLayout";
import styles from "../../../../../styles/controlObjects/journals/editJournal/index.module.scss";
import Link from "next/link";
import Button from "../../../../../components/Buttons/Button/Button";
import InputLabel from "../../../../../components/Forms/InputLabel/InputLabel";
import InputPhone from "../../../../../components/Forms/InputPhone/InputPhone";
import AddPlus from "../../../../../components/AddPlus/AddPlus";
import { SimpleSelect } from "../../../../../components/Forms/SimpleSelect/SimpleSelect";
import { DateSelect } from "../../../../../components/DateSelect/DateSelect";
export default function Home() {
  const [valueDate, setValueDate] = React.useState(new Date());

  const addressArray = [
    "г. Воронеж, ул. Перхоровича д.11",
    "г. Воронеж, ул. Перхоровича д.12",
    "г. Воронеж, ул. Перхоровича д.12",
    "г. Воронеж, ул. Перхоровича д.12",
  ];
  return (
    <React.Fragment>
      <MainLayout
        title="Журнал регистрации фактов 
предоставления коммунальных услуг 
ненадлежащего качества"
        mainTitle="Журнал регистрации фактов 
предоставления коммунальных услуг 
ненадлежащего качества"
      >
        <div className={styles.wrap}>
          <h2>Запись №2</h2>
          <div className={`mt-8`}>
            <SimpleSelect
              title="Услуга"
              type="text"
              id="name1"
              placeholder="Введите данные..."
              margin_right={20}
              width={360}
            />
          </div>
          <div className={`flex mt-8`}>
            <div className={`mr-4`}>
              <SimpleSelect
                title="Кем выявлено"
                data={[
                  { text: "Ресурсоснабжающая организация", id: 1 },
                  { text: "Управляющая компания (ТСЖ)", id: 2 },
                  { text: "Потребитель", id: 3 },
                ]}
                type="text"
                id="name2"
                placeholder="Введите данные..."
                margin_right={20}
                width={360}
              />
            </div>
            <InputLabel
              label="РСО"
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={360}
            />
          </div>
          <div className={`mt-20`}>Адрес</div>
          <div className={`flex mt-8`}>
            <InputLabel
              label="Дом"
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
            />
            <InputLabel
              label="Помещение"
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
            >
              <AddPlus href="" margin_bottom={0} />
            </InputLabel>
          </div>
          <div className={`mt-20`}>Период и причина</div>
          <div className={`flex mt-8`}>
            <div className={`mr-5`}>
              <DateSelect helperText="Дата  и время начала " onChange={setValueDate} value={valueDate} />
            </div>
            <div className={`mr-5`}>
              <DateSelect helperText="Дата и время окончания" onChange={setValueDate} value={valueDate} />
            </div>

            <InputLabel
              label="Отклонение"
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
          </div>

          <div className={`mt-16`}>
            <InputLabel
              label="Причина"
              type="text"
              id="nameCompany"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
              height={82}
              textAlign={"start"}
              style={{ height: 82 }}
            >
              <p style={{ marginTop: 8, marginLeft: 10 }}>Добавить документы </p>
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
