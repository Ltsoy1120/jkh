import React, { useState } from "react";
import RadioButton from "./RadioButton/RadioButton";
import InputLabel from "../Forms/InputLabel/InputLabel";
import styles from "./TariffSelection.module.scss";

export default function TariffSelection() {
  const [state, setState] = useState(1);
  return (
    <div className={styles.tariffSelectionWrap}>
      <h2>Выбирите тип тарифа</h2>

      <div className={`flex items-center`}>
        <div className={`flex flex-col justify-between ${styles.left}`}>
          <div onClick={() => setState(1)}>
            <RadioButton label="Однотарифный" state={state === 1 ? true : ""} />
          </div>
          <div onClick={() => setState(2)}>
            <RadioButton label="Двутарифный" state={state === 2 ? true : ""} />
          </div>
          <div onClick={() => setState(3)}>
            <RadioButton label="Многотарифный" state={state === 3 ? true : ""} />
          </div>
        </div>

        <div className={styles.right}>
          {state === 1 ? (
            <div>
              <InputLabel
                label="Начальные показания"
                type="number"
                id="initialReadings"
                placeholder="Введите данные..."
                width={265}
              />
            </div>
          ) : state === 2 ? (
            <div className={`flex`}>
              <InputLabel
                label="Начальные показания (День)"
                type="number"
                id="initialReadingsDay"
                placeholder="Введите данные..."
                margin_right={20}
                width={265}
              />
              <InputLabel
                label="Начальные показания (Ночь)"
                type="number"
                id="initialReadingsNight"
                placeholder="Введите данные..."
                width={265}
              />
            </div>
          ) : state === 3 ? (
            <div>
              <div className={`flex`}>
                <InputLabel
                  label="Начальные показания (Час пик - Т1)"
                  type="number"
                  id="initialReadingsRushHour"
                  placeholder="Введите данные..."
                  margin_right={20}
                  width={360}
                />
                <InputLabel
                  label="Начальные показания (Льготное время - Т2)"
                  type="number"
                  id="initialReadingsGraceTime"
                  placeholder="Введите данные..."
                  width={360}
                />
              </div>
              <InputLabel
                label="Начальные показания (Полульготное время  - Т3)"
                type="number"
                id="initialReadingsHalfTime"
                placeholder="Введите данные..."
                width={360}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
