import Link from "next/link";
import React, { useState } from "react";
import ToggleSwitch from "../../../../ToggleSwitch/ToggleSwitch";
import classes from "../../../table.module.scss";
import styles from "./TrRegistrationTable.module.scss";

export default function TrRegistrationTable({ period, fullName, ls, address, status }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>
            <Link href="/">{period}</Link>
          </td>
          <td>
            {fullName}
            <br />
            <Link href="/">
              <a>Л/С №{ls}</a>
            </Link>
            <br />
          </td>

          <td>{address}</td>
          <td>{status}</td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <img src="../../../table_icons/delete.svg" />
          <span>Удалить</span>
        </div>
        <div className={classes.btn}>
          <img src="../../../table_icons/block.svg" />
          <span>Заблокировать</span>
        </div>
      </div>
    </div>
  );
}
