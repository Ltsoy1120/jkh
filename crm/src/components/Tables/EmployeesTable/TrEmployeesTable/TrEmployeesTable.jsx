import React, { useState } from "react";
import Link from "next/link";
import classes from "../../table.module.scss";
import styles from "./TrEmployeesTable.module.scss";
import ToggleSwitch from "../../../ToggleSwitch/ToggleSwitch";

export default function TrControlApplicationTypesTable({ typeText, data, tema, auth, authProf, recipients }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>
            <a className={styles.green}>{typeText}</a>
            <br />
            <br />
            <span>{data}</span>
          </td>
          <td>
            <a className={styles.tema}>{tema}</a>
          </td>

          <td>
            <span className={styles.bold}>{auth}</span>
            <br />
            <span>{authProf}</span>
          </td>

          <td>
            <span className={styles.bold}>{recipients}</span>
          </td>
        </tr>

        <div className={classes.hiddenBlock}>
          <div className={classes.btnControl}>
            <img src="../../table_icons/delete.svg" />
            <span>Отключить</span>
          </div>
        </div>
      </div>
    </div>
  );
}
