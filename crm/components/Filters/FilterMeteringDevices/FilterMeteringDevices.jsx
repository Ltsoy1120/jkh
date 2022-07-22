import React from "react";
import styles from "./FilterMeteringDevices.module.scss";
import classes from "../filter.module.scss";
import Button from "../../Buttons/Button/Button";
import InputLabel from "../../Forms/InputLabel/InputLabel";

export default function FilterMeteringDevices() {
  return (
    <div className={`${classes.wrapFilter} ${styles.wrapFilter}`}>
      <div className={`flex`}>
        <InputLabel
          label="ФИО"
          type="text"
          id="fullName"
          placeholder="Введите данные..."
          margin_right={20}
          width={265}
        />
        <InputLabel
          label="Тип пользователя"
          type="text"
          id="userType"
          placeholder="Введите данные..."
          margin_right={20}
          width={265}
        />
        <InputLabel
          label="Дата регистрации"
          type="text"
          id="registrationDate"
          placeholder="Введите данные..."
          width={265}
        />
      </div>

      <div className={classes.rightBlock}>
        <Button bcg={true}>Найти</Button>
        <span>Сбросить фильтр</span>
      </div>
    </div>
  );
}
