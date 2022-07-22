import Link from "next/link";
import classes from "../../table.module.scss";
import styles from "./TrReceptionOfCitizens.module.scss";

export default function TrReceptionOfCitizens({
  number,
  dateOfCreation,
  date,
  time,
  status,
  officeStatus,
  officeAdress,
  fullNameResident,
  residentPhoneNumber,
  residentAddress,
  personalAccountResident,
  responsibleReception,
  receptionTheme,
}) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <span className={styles.green}>{number}</span>
            <br /> {dateOfCreation}
          </td>
          <td>
            <span className={styles.bold}>{date}</span>
            <br /> <span className={`${styles.bold} ${styles.time}`}>{time}</span>
            <br /> {status}
          </td>

          <td>
            <span className={styles.bold}>{officeStatus}</span>
            <br /> {officeAdress}
          </td>

          <td>
            <span className={styles.bold}>{responsibleReception}</span>
          </td>

          <td>
            <span className={styles.bold}>{fullNameResident}</span>
            <br /> {residentPhoneNumber}
            <br /> {residentAddress}
            <br />{" "}
            <Link href="/">
              <a className={styles.green}>{personalAccountResident}</a>
            </Link>
          </td>
          <td>
            <span className={styles.bold}>{receptionTheme}</span>
          </td>
        </tr>
      </div>
    </div>
  );
}
