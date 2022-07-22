import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import { DateSelect } from "../../../components/DateSelect/DateSelect";
import { SimpleInput } from "../../../components/Forms/SimpleInput/SimpleInput";
import Button from "../../../components/Buttons/Button/Button";
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
      <h2>Сбросить нумерацию обращений</h2>
      <div className={styles.dataNumber}>
        <DateSelect helperText="Дата с которой начать нумерацию" value={"12.04.2001"} onChange={() => ""} />
      </div>
      <div>
        <SimpleInput size="massive" label="Номер первого обращения" placeholder="Введите данные..." />
      </div>
      <div className={styles.btnBlock}>
        <Button bcg={true}>Сбросить</Button>
      </div>
    </MainLayout>
  );
}
