import React, { useState } from "react";
import classes from "../../Tables/table.module.scss";
import styles from "./TrHouses.module.scss";
import Link from "next/link";
import Image from "next/image";
import Add from '../../../ui/icons/add';
import Sandwatch from '../../../ui/icons/sandwatch';
import Warning from '../../../ui/icons/warning';

export default function TrHouses({ number, type, devicetype, placeofattach, tarifftype, lastreading, readingdifference, errordate, errormessage }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>
            <div className={styles.tnumber}>
                <span className={styles.number}>{number}</span>
                <span>{type}</span>
            </div>
          </td>
          <td>
            <div className={styles.tdate}>
              <span className={styles.marg}>{devicetype}</span>
              <span className={styles.createDateLabel}>{placeofattach}</span>
            </div>
          </td>
          <td>
              <div className={styles.ttype}>
                <span className={styles.createDateLabel}>{tarifftype}</span>
              </div>  
          </td>

          <td>
          <div className={styles.ttext}>
            <span>{lastreading}</span>
          </div>
          </td>
          <td>
            <div className={styles.tauthor}>
              <span>{readingdifference}</span>
            </div>
          </td>
          <td>
            <div className={styles.tres}>
              <span className={styles.errorText}>{errordate} <br /></span>
              <div className={styles.errorTextt}><Warning viewBox="0 0 15 15" className={styles.warning} /> {errormessage}</div>
            </div>
          </td>

        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <Add viewBox="0 0 15 15" />
          <Link href="/newdataelect">
            <a>Подать показания</a>
          </Link>
        </div>
        <div className={classes.btn}>
          <Sandwatch viewBox="0 0 15 15" />
          <Link href="/deviceshistory">
          <span>История показаний</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
