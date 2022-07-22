import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/controlObjects/houses/houses.module.scss";
import { SimpleInput } from "../../components/Forms/SimpleInput/SimpleInput";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { CustomTextArea } from "../../components/Forms/CustomTextArea/CustomTextArea";
import Plus from "../../components/Buttons/CircleButtons/Plus";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Buttons/Button/Button";

const testType = [
  { text: "Тема приема1", id: 1 },
  { text: "Тема приема2", id: 2 },
  { text: "Тема приема3", id: 3 },
];

export default function NewAppeal() {
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Обращение / Новое обращение"
        title="Новое обращение"
        mainTitle="Новое обращение"
      >
        <div className={styles.inputBlock}>
          <SimpleInput
            label="Номер входящего обращения"
            placeholder="Введите данные..."
            size="object"
          />
        </div>

        <div className={styles.inputBlock}>
          <SimpleSelect
            title="Тип обращения"
            placeholder="Выберите из списка..."
            data={testType}
            width={455}
          />
        </div>

        <div className={`flex ${styles.wrapTextAndPlus}`}>
          <FormControl>
            <FormHelperText>Комментарий</FormHelperText>
            <CustomTextArea placeholder="Введите данные..." />
          </FormControl>
          <div className={styles.addDoc}>
            <span>Добавить документы</span>
            <Plus />
          </div>
        </div>

        <div className={styles.inputBlock}>
          <SimpleInput
            label="Адрес"
            placeholder="Введите данные..."
            size="massive"
          />
        </div>

        <div className={`flex ${styles.wrapCheck}`}>
          <SimpleInput
            label="ФИО, лицевой счет или № квартиры"
            placeholder="Введите данные..."
            size="object"
          />
          <div className={styles.wrapSpan}>
            <CheckBox />
            <span>Заявитель не является собственником</span>
          </div>
        </div>

        <div className={`flex ${styles.wrapCheck} ${styles.botSpan}`}>
          <SimpleInput
            label="Контактный телефон"
            placeholder="+7 - ( _ _ _ ) - _ _ _ - _ _ - _ _"
            size="object"
          />
          <div className={styles.wrapSpan}>
            <CheckBox />
            <span>Привязать номер телефона к Л/С</span>
          </div>
        </div>

        <div className={styles.containerButtonsAddHouse}>
          <Button bcg>Создать</Button>
          <Button>Отмена</Button>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
