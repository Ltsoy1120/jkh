import React from "react";
import CheckBox from "../../../components/CheckBox/CheckBox";
import MainLayout from "../../../components/MainLayout/MainLayout";
import Button from "../../../components/Buttons/Button/Button";
import { FormControl, FormHelperText } from "@mui/material";
import { CustomTextArea } from "../../../components/Forms/CustomTextArea/CustomTextArea";
import styles from "../../../styles/appeals/appeals.module.scss";
import CustomTabs from "../../../components/Tabs/CustomTabs";

export default function Home() {
  return (
    <MainLayout breadcrumbs="Обращения / Настройки" title="Настройки" mainTitle="Настройки">
      <CustomTabs
        tabLinks={[
          { href: "/appeals/settings/alerts", name: "Оповещения" },
          { href: "/appeals/settings/numbering", name: "Нумерация" },
          { href: "/appeals/settings/types", name: "Типы обращений" },
        ]}
      />
      <div className={`flex ${styles.wrapCheck}`}>
        <h2>Оповещение жителей по ответам на обращение</h2>
        <div className={`flex ${styles.block}`}>
          <div className={`flex items-center justify-center ${styles.check}`}>
            <CheckBox />
          </div>
          <div className={`flex ${styles.text}`}>
            <span>Описание какого-то права доступа. К примеру, редактировать что-либо)</span>
          </div>
        </div>
      </div>
      <div className={`flex ${styles.wrapCheck}`}>
        <h2>Оповещение сотрудников по новым обращениям</h2>
        <div className={`flex ${styles.botBlock}`}>
          <div className={`flex items-center justify-center ${styles.check}`}>
            <CheckBox />
          </div>
          <div className={`flex ${styles.text}`}>
            <span>Разрешить уведомление по СМС (СМС - платные)</span>
          </div>
        </div>

        <div className={`flex`}>
          <div className={`flex items-center justify-center ${styles.check}`}>
            <CheckBox />
          </div>
          <div className={`flex ${styles.text}`}>
            <span>Разрешить уведомление по E-mail (указать адреса почты ниже через запятую)</span>
          </div>
        </div>
      </div>
      <div className={styles.areaBlock}>
        <FormControl>
          <FormHelperText>Е-mail</FormHelperText>
          <CustomTextArea placeholder="Перечислите адреса электронной почты тех сотрудников, которых необходимо оповещать по  E-mail о новых обращениях жильцов..." />
        </FormControl>
      </div>
      <div className={styles.btnBlock}>
        <Button bcg={true}>Cохранить</Button>
      </div>
    </MainLayout>
  );
}
