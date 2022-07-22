import Link from "next/link";
import classes from "../../table.module.scss";
import styles from "./TrFinanceTable.module.scss";

export default function TrAppealsTable({ managementCompanyName, sum, date, quantity, currentBalance }) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <span className={styles.bold}>{managementCompanyName}</span>
          </td>
          <td>
            <span className={styles.bold}>{date}</span>
          </td>
          <td>
            <span className={styles.bold}>{quantity}</span>
          </td>
          <td>
            <span className={styles.bold}>{sum}</span>
          </td>
          <td>
            <span className={styles.bold}>{currentBalance}</span>
          </td>
        </tr>
      </div>
    </div>
  );
}
