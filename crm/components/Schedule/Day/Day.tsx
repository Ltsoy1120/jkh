import { DayOfReceipt } from "../../../models/IOffice";
import TimeInput from "../../Forms/ComponentForms/TimeInput";
import ToggleSwitch from "../../ToggleSwitch";
import styles from "./Day.module.scss";

interface DayProps {
  dayOfWeek: string;
  label: string;
  dayOfSchedule: DayOfReceipt;
  handleChangeSchedule: (
    name: string,
    value: string,
    time: string,
    dayOfWeek: string
  ) => void;
  handleCheckedReception: (dayOfWeek: string) => void;
}

const Day: React.FC<DayProps> = ({
  dayOfWeek,
  label,
  dayOfSchedule,
  handleChangeSchedule,
  handleCheckedReception,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapSwitch}>
        <ToggleSwitch
          dayOfWeek={dayOfWeek}
          checked={dayOfSchedule.isReception}
          handleCheckedReception={handleCheckedReception}
        />
        <span>{label}</span>
      </div>

      <div className={styles.wrapInputs}>
        {dayOfSchedule.isReception ? (
          <div className={styles.reception}>
            <div>
              <TimeInput
                name={"start"}
                value={dayOfSchedule.timeOne.start}
                dayOfWeek={dayOfWeek}
                time={"timeOne"}
                handleChangeSchedule={handleChangeSchedule}
              />
              <TimeInput
                name={"end"}
                value={dayOfSchedule.timeOne.end}
                dayOfWeek={dayOfWeek}
                time={"timeOne"}
                handleChangeSchedule={handleChangeSchedule}
              />
            </div>
            <div>
              <TimeInput
                name={"start"}
                value={dayOfSchedule.timeTwo.start}
                dayOfWeek={dayOfWeek}
                time={"timeTwo"}
                handleChangeSchedule={handleChangeSchedule}
              />
              <TimeInput
                name={"end"}
                value={dayOfSchedule.timeTwo.end}
                dayOfWeek={dayOfWeek}
                time={"timeTwo"}
                handleChangeSchedule={handleChangeSchedule}
              />
            </div>{" "}
          </div>
        ) : (
          <div className={styles.noReception}>
            <span>Нет приема</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Day;
