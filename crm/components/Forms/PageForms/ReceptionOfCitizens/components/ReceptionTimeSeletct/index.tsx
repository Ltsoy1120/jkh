import { useAppSelector } from "../../../../../../store/hooks";
import { getReceptions } from "../../../../../../store/actions/receptionActions";
import { useEffect, useState } from "react";
import { receptionTime } from "../../../../../../utils/constants";
import styles from "./style.module.scss";

interface propsTimeSelect {
  onChange: any;
  value?: string;
  date: string;
}
const ReceptionTimeSeletct = ({ onChange, value, date }: propsTimeSelect) => {
  const visits = useAppSelector(getReceptions());
  console.log("visits", visits);
  const [bisyTime, setBisyTime] = useState<string[]>([]);

  const getBisyTimeOnDate = () => {
    const timeArr: string[] = [];
    visits.forEach((visit) => {
      timeArr.push(visit.time);
    });
    setBisyTime(timeArr);
  };

  useEffect(() => {
    getBisyTimeOnDate();
  }, [visits]);

  const handlerSelectedTime = (e: React.MouseEvent<Element, MouseEvent>) => {
    const selectedTime = (e.target as HTMLElement).innerText;
    onChange(selectedTime);
  };

  return (
    <div className={styles.timeblock}>
      <h3>Свободное время {date}</h3>
      <div className={styles.timepicker}>
        {receptionTime.map((time) =>
          bisyTime.includes(time) ? (
            <button key={time} disabled className={styles.timeItem}>
              {time}
            </button>
          ) : (
            <button
              id={time}
              key={time}
              className={value === time ? styles.selected : styles.timeItem}
              onClick={(e) => handlerSelectedTime(e)}
            >
              {time}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default ReceptionTimeSeletct;
