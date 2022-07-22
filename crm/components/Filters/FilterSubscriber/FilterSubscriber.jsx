import React from "react";
import styles from "./FilterSubscriber.module.scss";
import classes from "../filter.module.scss";
import Button from "../../Buttons/Button/Button";
import Input from "../../Forms/Input";

export default function FilterSubscriber() {
  return (
    <div className={`${classes.wrapFilter} ${styles.wrapFilter}`}>
      <div className={`flex`}>
        <Input
          label="ФИО"
          type="text"
          id="fullName"
          placeholder="Введите данные..."
          margin_right={20}
          width={265}
        />
        <Input
          label="Тип пользователя"
          type="text"
          id="userType"
          placeholder="Введите данные..."
          margin_right={20}
          width={265}
        />
        <Input
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
