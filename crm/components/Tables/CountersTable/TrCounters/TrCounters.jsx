import classes from "../../table.module.scss";
import styles from "./TrCounters.module.scss";

export default function TrCounters({
  deviceNumber,
  purpose,
  deviceType,
  installationLocation,
  address,
  tariffType,
  latestTestimony,
  readingDifference,
}) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <span className={styles.deviceNumber}>{deviceNumber}</span>
            <br /> <span className={styles.bold}>{purpose}</span>
          </td>
          <td>
            <span className={styles.bold}>{deviceType}</span>
            <br /> {installationLocation}
          </td>

          <td>
            <span className={styles.bold}>{address}</span>
          </td>

          <td>{tariffType}</td>
          <td>
            <span className={styles.bold}>{latestTestimony}</span>
          </td>
          <td>{readingDifference}</td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <img src="../../table_icons/delete.svg" />
          <span>Удалить</span>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/edit.svg" />
          <span>Редактировать</span>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/history.svg" />
          <span>История показаний</span>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/plus.svg" />
          <span>Подать показания</span>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/archive.svg" />
          <span>Архив показаний</span>
        </div>
      </div>
    </div>
  );
}
