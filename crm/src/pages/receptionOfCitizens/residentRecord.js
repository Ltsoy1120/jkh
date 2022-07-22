import React, { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/receptionOfCitizens/residentRecord.module.scss";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import { CustomDay } from "../../components/Forms/CustomDay/CustomDay";
import { SimpleTimePicker } from "../../components/Forms/SimpleTimePicker/SimpleTimePicker";
import InputLabel from "../../components/Forms/InputLabel/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Plus from "../../components/Buttons/CircleButtons/Plus/Plus";
import Button from "../../components/Buttons/Button/Button";
import { CustomTextArea } from "../../components/Forms/CustomTextArea/CustomTextArea";

const testOffice = [
  { text: "Офис1", id: 1 },
  { text: "Офис2", id: 2 },
  { text: "Офис3", id: 3 },
];

const testSign = [
  { text: "Тема приема1", id: 1 },
  { text: "Тема приема2", id: 2 },
  { text: "Тема приема3", id: 3 },
];

export default function ResidentRecord() {
  const [time, setTime] = useState(null);

  return (
    <React.Fragment>
      <MainLayout title="Запись жильца на прием" mainTitle="Запись жильца на прием">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2>Информация об офисе компании</h2>
            <SimpleSelect title="Офис" placeholder="Выберите из списка..." data={testOffice} width={455} />
          </div>

          <div className={`flex flex-col ${styles.wrapDadeAndTime}`}>
            <h2>
              Запись на <span className={styles.month}>МАЙ</span>
            </h2>
            <span className={styles.note}>
              *Приемные дни в данном месяце <br />
              выделены зеленым цветом
            </span>

            <div className={`flex items-center ${styles.wrapDay}`}>
              <CustomDay />
              <div className={styles.wrapTime}>
                <span>Свободное время</span>
                <div>
                  <SimpleTimePicker width={75} />
                </div>
                <div>
                  <SimpleTimePicker width={75} />
                </div>
                <div>
                  <SimpleTimePicker width={75} />
                </div>
                <div>
                  <SimpleTimePicker width={75} />
                </div>
                <div>
                  <SimpleTimePicker width={75} />
                </div>
                <div>
                  <SimpleTimePicker width={75} />
                </div>
              </div>
            </div>

            <div className={styles.signUp}>
              <h2>Записать на пятница 27.05.2021 в 11:30 </h2>
              <div className={styles.wrapSelect}>
                <SimpleSelect title="Тема приема" placeholder="Выбирите из списка..." data={testSign} width={265} />
              </div>
              <InputLabel
                label="ФИО посетителя"
                type="text"
                id="fullVisitor"
                placeholder="Введите данные..."
                margin_bottom={30}
                width={455}
              />
              <InputLabel
                label="Контактный телефон"
                type="number"
                id="contactPhone"
                placeholder="+7 - ( _ _ _ ) - _ _ _ - _ _ - _ _"
                margin_bottom={30}
                width={265}
              />
              <div className={`flex ${styles.wrapDadeAndTime}`}>
                <InputLabel
                  label="Адрес"
                  type="text"
                  id="address"
                  placeholder="Введите данные..."
                  margin_right={20}
                  width={455}
                />
                <InputLabel
                  label="ФИО собственника"
                  type="text"
                  id="fullNameVisitor"
                  placeholder="Введите данные..."
                  width={455}
                />
              </div>
              <div className={`flex ${styles.wrapTextAndPlus}`}>
                <FormControl>
                  <FormHelperText>Комментарий</FormHelperText>
                  <CustomTextArea />
                </FormControl>
                <div className={styles.addDoc}>
                  <span>Добавить документы</span>
                  <Plus />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.btnBlock}>
            <Button bcg={true}>Записать</Button>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
