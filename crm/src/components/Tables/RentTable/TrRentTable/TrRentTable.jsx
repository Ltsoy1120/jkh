import Link from "next/link";
import classes from "../../table.module.scss";
import styles from "./TrRentTable.module.scss";

export default function TrRentTable({
  number,
  status,
  fullName,
  phone,
  address,
  personalAccount,
  month,
  resourceName,
  resourceTariff,
  resourceNumber,
  receiptLink,
  receiptView,
  receiptIcon,
}) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <span className={styles.month}>{month}</span>
            <br /> <span className={styles.number}>{number}</span>
          </td>
          <td>
            <span className={styles.bold}>{fullName}</span>
            <br /> <span className={styles.phone}>{phone}</span>
            <br /> <span className={styles.address}>{address}</span>
            <br /> <span className={styles.personalAccount}>{personalAccount}</span>
          </td>

          <td>
            <span className={styles.bold}>{resourceName}</span>
            <br /> <span className={styles.phone}>{resourceTariff}</span>
            <br /> <span className={styles.address}>{resourceNumber}</span>
          </td>

          <td>
            <span>{status}</span>
          </td>

          <td>
            <a className={styles.receiptIcon}>{receiptIcon}</a>
            <br /> <a className={styles.green}>{receiptLink}</a>
            <br />
            <br /> <a className={styles.green}>{receiptView}</a>
          </td>
        </tr>
      </div>
    </div>
  );
}
