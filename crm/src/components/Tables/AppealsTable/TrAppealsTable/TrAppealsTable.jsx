import Link from "next/link";
import classes from "../../table.module.scss";
import styles from "./TrAppealsTable.module.scss";

export default function TrAppealsTable({
  number,
  date,
  time,
  status,
  fullName,
  observer,
  observerProfession,
  icon,
  priority,
  iconUsual,
  usualText,
  received,
  considerationPeriod,
  considered,
  minus,
  phone,
  address,
  personalAccount,
  complaint,
  subscriber,
  thirdPartyAppeal,
  application,
  numberApplication,
  linkNumber,
  priorityHigh,
  timeTerm,
  dispatcherName,
  dispatcherProfession,
  internalCirculation,
  starIcon,
  uniCode,
}) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <span className={styles.green}>{number}</span>
            <span className={styles.arrow}>{uniCode}</span>
            <span className={styles.linkNumber}>{linkNumber}</span>
            <br /> <span className={styles.newStatus}>{status}</span>
            <br /> <span className={styles.icon}>{icon}</span>
            <span className={styles.priority}>{priority}</span>
            <span className={styles.iconUsual}>{iconUsual}</span>
            <span className={styles.usualText}>{usualText}</span>
            <span className={styles.priorityHigh}>{priorityHigh}</span>
            <span className={styles.starIcon}>{starIcon}</span>
            <span className={styles.starIcon}>{starIcon}</span>
            <span className={styles.starIcon}>{starIcon}</span>
            <span className={styles.nostarIcon}>{starIcon}</span>
            <span className={styles.nostarIcon}>{starIcon}</span>
          </td>
          <td>
            <span>{received}</span>
            <br /> <span className={styles.bold}>{date}</span>
            <span className={`${styles.bold} ${styles.taskTime}`}>{time}</span>
            <br /> <span>{considerationPeriod}</span>
            <br /> <span className={styles.bold}>{date}</span>
            <span className={`${styles.bold} ${styles.taskTime}`}>{timeTerm}</span>
            <br /> {considered}
            <br /> {minus}
          </td>

          <td>
            <span className={styles.bold}>{fullName}</span>
            <br /> <span className={styles.phone}>{phone}</span>
            <br /> <span className={styles.address}>{address}</span>
            <br /> <span className={styles.personalAccount}>{personalAccount}</span>
            {/*{deadlineStatus && <span className={`${styles.bold} ${styles.deadlineStatus}`}>{deadlineStatus}</span>}*/}
          </td>

          <td>
            <span>{complaint}</span>
          </td>

          <td>
            <span className={styles.bold}>{subscriber}</span>
            <span>{dispatcherName}</span>
            <br /> <span>{dispatcherProfession}</span>
            <br /> {thirdPartyAppeal}
            <br /> <span>{internalCirculation}</span>
          </td>
          <td>
            <span className={styles.bold}>{observer}</span>
            <br /> <span>{observerProfession}</span>
          </td>
          <td>
            <span className={styles.bold}>{application}</span>
            <span className={styles.numberApplication}>{numberApplication}</span>
            <br /> <span className={styles.bold}>{application}</span>
            <span className={styles.numberApplication}>{numberApplication}</span>
          </td>
        </tr>
      </div>
    </div>
  );
}
