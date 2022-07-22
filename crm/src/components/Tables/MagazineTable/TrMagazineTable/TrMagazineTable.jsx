import classes from "../../table.module.scss";
import styles from "./TrMagazineTable.module.scss";

export default function TrAppealsTable({
  number,
  date,
  time,
  received,
  considerationPeriod,
  address,
  timeTerm,
  timeTermDate,
  duration,
  description,
  addressTwo,
  minus,
}) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <span className={styles.number}>{number}</span>
          </td>
          <td>
            <span className={styles.date}>{received}</span>
            <br /> <span className={styles.bold}>{date}</span>
            <span className={`${styles.bold} ${styles.taskTime}`}>{time}</span>
            <br /> <span className={styles.date}>{considerationPeriod}</span>
            <br /> <span className={styles.bold}>{timeTermDate}</span>
            <span className={`${styles.bold} ${styles.taskTime}`}>{timeTerm}</span>
            <span>{minus}</span>
          </td>

          <td>
            <span>{duration}</span>
          </td>

          <td>
            <span>{addressTwo}</span>
            <span>{address}</span>
            <br />
            <br /> <span>{address}</span>
            <br />
            <br /> <span>{address}</span>
          </td>

          <td>
            <span>{description}</span>
          </td>
        </tr>
      </div>
    </div>
  );
}
