import React, { useState } from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { SimpleInput } from "../../../../components/Forms/SimpleInput/SimpleInput";
import { SimpleSelect } from "../../../../components/Forms/SimpleSelect/SimpleSelect";
import { DateSelect } from "../../../../components/DateSelect/DateSelect";
import Button from "../../../../components/Buttons/Button/Button";
import styles from "../../../../styles/controlObjects/houses/houses.module.scss";
import FormHelperText from "@mui/material/FormHelperText";

export default function AddHouse() {
  const [valueDate, setValueDate] = useState(new Date());
  const [switchActive, updateSwitchActive] = useState(true);
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Объекты управления / Дома / Список домов / Добавить новый дом"
        title="Добавить новый дом"
        mainTitle="Добавить новый дом"
      >
        <SimpleInput size="massive" label="Адрес" placeholder="Введите данные..." />
        <div className={styles.containerSelectsAddHouse}>
          <SimpleSelect size="massive" title="Тип управления" placeholder="Выбирите из списка..." />
          <SimpleInput size="massive" label="Основание управления" placeholder="Введите данные..." />
        </div>
        <div>
          <FormHelperText>Дата начала управления</FormHelperText>
          <DateSelect onChange={setValueDate} value={valueDate} />
        </div>
        <div className={styles.containerButtonsAddHouse}>
          <Button bcg>Создать</Button>
          <Button>Отмена</Button>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
