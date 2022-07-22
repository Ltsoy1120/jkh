import React, { useState } from "react";
import styles from "./FilterJournals.module.scss";
import classes from "../filter.module.scss";
import Button from "../../Buttons/Button/Button";
import InputLabel from "../../Forms/InputLabel/InputLabel";

export default function FilterJournals() {
  const [rollUp, updateRollUp] = useState(false);

  return (
    <div
      className={`${classes.wrapFilter} ${rollUp ? classes.compressed : ""} ${
        styles.wrapFilter
      }`}
    >
     
        <div className={`flex flex-col`}>
          <div className={`flex`}>
            <InputLabel
              label="Услуга"
              type="text"
              id="journalFilterService"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Период"
              type="date"
              id="journalFilterPeriod"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Дом"
              type="text"
              id="journalFilterHouse"
              placeholder="Введите данные..."
              width={360}
            />
          </div>

          <div className={`flex ${classes.secondRow}`}>
            <InputLabel
              label="Номер помещения"
              type="text"
              id="journalFilterRoomNumber"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
          </div>
        </div>

        <div className={classes.rightBlock}>
          <Button bcg={true}>Найти</Button>
          <span>Сбросить фильтр</span>
        </div>

        <div className={classes.wrapBtn}>
          {rollUp ? (
            <div
              className={classes.wrapRollUp}
              onClick={() => updateRollUp(!rollUp)}
            >
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75026 10.75L11 0.736864L20.2497 10.75H1.75026Z"
                  fill="#1EA133"
                  stroke="white"
                />
              </svg>

              <span>Свернуть</span>
            </div>
          ) : (
            <div
              className={`flex flex-col items-center cursor-pointer absolute ${classes.wrapExpand}`}
              onClick={() => updateRollUp(!rollUp)}
            >
              <span>Развернуть</span>

              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 12L21.3923 0.75H0.607696L11 12Z" fill="#f9f9fa" />
              </svg>
            </div>
          )}
        </div>
      </div>
  );
}
