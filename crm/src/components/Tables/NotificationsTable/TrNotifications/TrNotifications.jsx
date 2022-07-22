import classes from "../../table.module.scss";
import styles from "./TrNotifications.module.scss";

export default function TrNotifications({ number, dateOfCreation, message, theme }) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <span className={styles.green}>{number}</span>
            <b>{dateOfCreation}</b>
          </td>

          <td>
            <span className={styles.bold}>{theme}</span>
          </td>

          <td>
            <span className={styles.message}>{message}</span>
          </td>
        </tr>
      </div>
    </div>
  );
}
