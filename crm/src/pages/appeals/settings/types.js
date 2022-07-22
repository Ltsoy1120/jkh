import React, { useState } from "react";
import { SimpleInput } from "../../../components/Forms/SimpleInput/SimpleInput";
import Plus from "../../../components/Buttons/CircleButtons/Plus";
import ToggleSwitch from "../../../components/ToggleSwitch/ToggleSwitch";
import Button from "../../../components/Buttons/Button/Button";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../components/Tables/SubscriberTables/TrSubscriber/TrSubscriber.module.scss";
import CustomTabs from "../../../components/Tabs/CustomTabs";

export default function Home() {
  const [switchActiveRecalculation, updateSwitchActiveRecalculation] =
    useState(false);
  const [switchActiveClaim, updateSwitchActiveClaim] = useState(false);
  const [switchActiveInquiry, updateSwitchActiveInquiry] = useState(false);
  const [switchActiveQuestion, updateSwitchActiveQuestion] = useState(false);
  return (
    <MainLayout
      breadcrumbs="Обращения / Настройки"
      title="Настройки"
      mainTitle="Настройки"
    >
      <CustomTabs
        tabLinks={[
          { href: "/appeals/settings/alerts", name: "Оповещения" },
          { href: "/appeals/settings/numbering", name: "Нумерация" },
          { href: "/appeals/settings/types", name: "Типы обращений" },
        ]}
      />
      <h2>Создайте новый тип обращения</h2>
      <div className={`flex ${styles.nemInput}`}>
        <SimpleInput
          size="massive"
          label="Тип обращения"
          placeholder="Введите данные..."
        />
        <Plus className={styles.plus} />
      </div>

      <div className={`flex ${styles.wrapperSwith}`}>
        <div className={`flex items-center ${styles.switchBlock}`}>
          <div
            className={styles.switch}
            onClick={() =>
              updateSwitchActiveRecalculation(!switchActiveRecalculation)
            }
          >
            <ToggleSwitch />
          </div>
          {switchActiveRecalculation ? (
            <span>Неактивен</span>
          ) : (
            <span>Перерасчет</span>
          )}
        </div>

        <div className={`flex items-center ${styles.switchBlock}`}>
          <div
            className={styles.switch}
            onClick={() => updateSwitchActiveInquiry(!switchActiveInquiry)}
          >
            <ToggleSwitch />
          </div>
          {switchActiveInquiry ? <span>Неактивен</span> : <span>Запрос</span>}
        </div>

        <div className={`flex items-center ${styles.switchBlock}`}>
          <div
            className={styles.switch}
            onClick={() => updateSwitchActiveClaim(!switchActiveClaim)}
          >
            <ToggleSwitch />
          </div>
          {switchActiveClaim ? <span>Неактивен</span> : <span>Притензия</span>}
        </div>

        <div className={`flex items-center ${styles.switchBlock}`}>
          <div
            className={styles.switch}
            onClick={() => updateSwitchActiveQuestion(!switchActiveQuestion)}
          >
            <ToggleSwitch />
          </div>
          {switchActiveQuestion ? <span>Неактивен</span> : <span>Вопрос</span>}
        </div>
      </div>
      <div className={styles.btnBlock}>
        <Button bcg={true}>Cохранить</Button>
      </div>
    </MainLayout>
  );
}
