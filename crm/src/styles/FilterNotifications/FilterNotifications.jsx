import React from "react";
import styles from "./FilterNotifications.module.scss";
import classes from "../filter.module.scss";
import Button from "../../Buttons/Button/Button";
import InputLabel from "../../Forms/InputLabel/InputLabel";
import Calendar from "../../Calendar/Calendar";

export default function FilterNotifications() {
  return (
    <div className={`${classes.wrapFilter}`}>
      <div className={`flex flex-col`}>
        <div className={`flex`}>
          <InputLabel
            label="Дата создания"
            type="date"
            id="createDate"
            width={170}
          />
        </div>

        <div className={`flex ${classes.secondRow}`}>
          <InputLabel
            label="Статус"
            type="text"
            id="status"
            placeholder="Введите данные..."
            margin_right={20}
            width={265}
          />
          <InputLabel
            label="Тема приема"
            type="text"
            id="receptionTheme"
            placeholder="Введите данные..."
            width={265}
          />
        </div>
      </div>

      <div className={classes.rightBlock}>
        <Button bcg={true}>Найти</Button>
        <span>Сбросить фильтр</span>
      </div>

    </div>
  );
}
