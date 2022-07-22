import React from "react";
import MainLayout from "../../../../../components/MainLayout/MainLayout";
import styles from "../../../../../styles/controlObjects/journals/editJournal/index.module.scss";
import Link from "next/link";
import Button from "../../../../../components/Buttons/Button/Button";
import InputLabel from "../../../../../components/Forms/InputLabel/InputLabel";
import InputPhone from "../../../../../components/Forms/InputPhone/InputPhone";
import AddPlus from "../../../../../components/AddPlus/AddPlus";
import { SimpleSelect } from "../../../../../components/Forms/SimpleSelect/SimpleSelect";
export default function Home() {
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
        <div className={styles.wrapper}>
          <div className={styles.wrapBtn}>
            <Link href="">
              <a>
                <Button>Добавить новую запись</Button>
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.wrap}>
          <br />
          <br />
          <h2>Запись №1</h2>
          <br />
          <SimpleSelect
            title="Услуга"
            type="text"
            id="name1"
            placeholder="Введите данные..."
            margin_right={20}
            width={360}
          />
          <div className={`flex`}>
            <SimpleSelect
              title="Кем выявлено"
              type="text"
              data={[
                { text: "Ресурсоснабжающая организация", id: 1 },
                { text: "Управляющая компания (ТСЖ)", id: 2 },
                { text: "Потребитель", id: 3 },
              ]}
              id="name2"
              placeholder="Введите данные..."
              margin_right={20}
              width={360}
            />
            <div style={{ margin: 5 }}>
              <InputLabel
                label="РСО"
                type="text"
                id="name3"
                placeholder="Введите данные..."
                margin_right={20}
                width={360}
              />
            </div>
          </div>
          <p className={`mt-14 mb-6`}>Адрес</p>
          <div className={`flex`}>
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
          <br />
          <div className={`flex`}>
            <InputLabel
              label=""
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
              margin_bottom={0}
            />
            <InputLabel
              label=""
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
              margin_bottom={0}
            >
              <AddPlus href="" margin_bottom={0} />
            </InputLabel>
          </div>
          <div className={`flex`} style={{ margin: 0 }}>
            <InputLabel
              style={{ margin: 0 }}
              label=""
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
              margin_bottom={0}
            />
            <InputLabel
              style={{ margin: 0 }}
              label=""
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
              margin_bottom={0}
            >
              <AddPlus href="" margin_bottom={0} />
            </InputLabel>
          </div>
          <div className={`flex`}>
            <InputLabel
              label=""
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={455}
              margin_bottom={0}
            />
            <InputLabel
              label=""
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={170}
              margin_bottom={0}
            >
              <AddPlus href="" margin_bottom={0} />
            </InputLabel>
          </div>
          <p className={`mt-14 mb-6`}>Период и причина</p>
          <div className={`flex`}>
            <InputLabel
              label="Дата  и время начала "
              type="date"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Дата и время окончания "
              type="date"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />

            <InputLabel
              label="Отклонение"
              type="text"
              id="name3"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
          </div>
          <div className={`mt-6`}>
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
              <p className={`m-0 mt-2 ml-6`}>Добавить документы </p>
              <AddPlus href="" margin={0} />
            </InputLabel>
          </div>
          <div style={{ marginTop: 10, marginBottom: 60 }}>
            <Link href="">
              <a>
                <Button>Отправить уведомление жильцам</Button>
              </a>
            </Link>
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
