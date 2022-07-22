import { DaysOfReceipt } from "../../models/IOffice";
import Day from "./Day";
import Line from "./Line";
import styles from "./Schedule.module.scss";

interface ScheduleProps {
  schedule: DaysOfReceipt;
  handleChangeSchedule: (
    name: string,
    value: string,
    time: string,
    dayOfWeek: string
  ) => void;
  handleCheckedReception: (dayOfWeek: string) => void;
}

const Schedule: React.FC<ScheduleProps> = ({
  schedule,
  handleChangeSchedule,
  handleCheckedReception,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBlock}>
        <div>
          <div className={styles.titleWrap}>
            <span>Начало</span>
          </div>
          <div className={styles.titleWrap}>
            <span>Конец</span>
          </div>
        </div>
        <div>
          <div className={styles.titleWrap}>
            <span>Начало</span>
          </div>
          <div className={styles.titleWrap}>
            <span>Конец</span>
          </div>
        </div>
      </div>

      <div className={styles.daysWrapper}>
        <div className={styles.lineOne}>
          <Line />
        </div>
        <div className={styles.lineTwo}>
          <Line />
        </div>
        <div className={styles.rightBlock}>
          <Day
            dayOfWeek="Mo"
            label="Пн"
            dayOfSchedule={schedule.Mo}
            handleChangeSchedule={handleChangeSchedule}
            handleCheckedReception={handleCheckedReception}
          />
          <Day
            dayOfWeek="Tu"
            label="Вт"
            dayOfSchedule={schedule.Tu}
            handleChangeSchedule={handleChangeSchedule}
            handleCheckedReception={handleCheckedReception}
          />
          <Day
            dayOfWeek="We"
            label="Ср"
            dayOfSchedule={schedule.We}
            handleChangeSchedule={handleChangeSchedule}
            handleCheckedReception={handleCheckedReception}
          />
          <Day
            dayOfWeek="Th"
            label="Чт"
            dayOfSchedule={schedule.Th}
            handleChangeSchedule={handleChangeSchedule}
            handleCheckedReception={handleCheckedReception}
          />
          <Day
            dayOfWeek="Fr"
            label="Пт"
            dayOfSchedule={schedule.Fr}
            handleChangeSchedule={handleChangeSchedule}
            handleCheckedReception={handleCheckedReception}
          />
          <Day
            dayOfWeek="Sa"
            label="Сб"
            dayOfSchedule={schedule.Sa}
            handleChangeSchedule={handleChangeSchedule}
            handleCheckedReception={handleCheckedReception}
          />
          <Day
            dayOfWeek="Su"
            label="Вс"
            dayOfSchedule={schedule.Su}
            handleChangeSchedule={handleChangeSchedule}
            handleCheckedReception={handleCheckedReception}
          />
        </div>
      </div>
    </div>
  );
};
export default Schedule;
