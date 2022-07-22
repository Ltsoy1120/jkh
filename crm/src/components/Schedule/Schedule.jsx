import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Day from "./Day/Day";
import Line from "./Line/Line";
import styles from "./Schedule.module.scss";

export default function Schedule() {
  return (
    <div className={styles.wrapper}>
      <div className={`flex flex-col justify-between ${styles.leftBlock}`}>
        <div>
          <div className={`flex items-center w-full ${styles.titleWrap} ${styles.titleWrapFirst}`}>
            <span>Начало</span>
          </div>
          <div className={`flex items-center w-full ${styles.titleWrap}`}>
            <span>Конец</span>
          </div>
        </div>
        <div>
          <div className={`flex items-center w-full ${styles.titleWrap} ${styles.titleWrapFirst}`}>
            <span>Начало</span>
          </div>
          <div className={`flex items-center w-full ${styles.titleWrap}`}>
            <span>Конец</span>
          </div>
        </div>
      </div>

      <div className={styles.daysWrapper}>
        <div className={`absolute left-0 right-0 ${styles.lineOne}`}>
          <Line />
        </div>
        <div className={`absolute left-0 right-0 ${styles.lineTwo}`}>
          <Line />
        </div>
        <div className={`absolute z-10 bottom-0 w-full flex justify-between`}>
          <Day title="Пн" />
          <Day title="Вт" />
          <Day title="Ср" />
          <Day title="Чт" />
          <Day title="Пт" />
          <Day title="Сб" />
          <Day title="Вс" />
        </div>
      </div>
    </div>
  );
}
