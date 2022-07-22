import React, { useState } from "react";
import classes from "../table.module.scss";
import styles from "./trDebtors.module.scss";
import Link from "next/link";

export default function TrDebtors({
  number,
  dateCreated,
  status,
  citizen,
  statusUtilities,
  debtStatus,
}) {
  const [switchActive, updateSwitchActive] = useState(false);

  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div
        className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}
      >
        <tr className={styles.wrapTr}>
          <td>
            <div className={styles.link}>
              <Link href="">
                <a>{number}</a>
              </Link>
            </div>

            <p>{dateCreated}</p>
          </td>

          <td className={styles.bold}>{status}</td>

          <td>
            <p className={styles.bold}>{citizen.citizen}</p>
            <p>{citizen.numberPhone}</p>
            <p>{citizen.street}</p>
            <div className={styles.link}>
              <Link href="">
                <a>{citizen.ls}</a>
              </Link>
            </div>
          </td>

          <td className={styles.bold}>{statusUtilities}</td>

          <td className={styles.bold}>{debtStatus}</td>
        </tr>
      </div>
    </div>
  );
}
