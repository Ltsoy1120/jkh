import Link from "next/link";
import classes from "../../table.module.scss";
import styles from "./TrTaskTable.module.scss";

export default function TrTaskTable({
  number,
  date,
  time,
  status,
  receptionTheme,
  fullName,
  profession,
  executorOne,
  executorOneProfession,
  executorTwo,
  executorTwoProfession,
  observer,
  observerProfession,
  receptionName,
  more,
  deadlineStatus,
  inboundTask,
  numberTask,
  icon,
  priority,
  iconUsual,
  usualText,
}) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <span className={styles.green}>{number}</span>
            <br /> <span className={styles.newStatus}>{status}</span>
            <br /> <span className={styles.icon}>{icon}</span>
            <span className={styles.priority}>{priority}</span>
            <span className={styles.iconUsual}>{iconUsual}</span>
            <span className={styles.usualText}>{usualText}</span>
          </td>
          <td>
            <span className={styles.bold}>{date}</span>
            <span className={`${styles.bold} ${styles.taskTime}`}>{time}</span>
            <span className={styles.bold}>{fullName}</span>
            <br /> {profession}
          </td>

          <td>
            <span className={styles.bold}>{date}</span>
            <span className={`${styles.bold} ${styles.taskTime}`}>{time}</span>
            {deadlineStatus && <span className={`${styles.bold} ${styles.deadlineStatus}`}>{deadlineStatus}</span>}
          </td>

          <td>
            <span className={styles.bold}>{executorOne}</span>
            <br /> {executorOneProfession}
            <br /> <span className={`${styles.bold} ${styles.executorTwo}`}>{executorTwo}</span>
            <br /> {executorTwoProfession}
            <br /> <a className={styles.more}>{more}</a>
          </td>

          <td>
            <span className={styles.bold}>{observer}</span>
            <br /> {observerProfession}
          </td>
          <td>
            <span className={styles.bold}>{receptionTheme}</span>
            <br /> <span className={styles.bold}>{receptionName}</span>
            <span className={styles.bold}>{inboundTask}</span>
            <span className={styles.numberTask}>{numberTask}</span>
          </td>
        </tr>
      </div>
    </div>
  );
}
