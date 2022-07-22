import Link from "next/link";
import React, { useState } from "react";
import ToggleSwitch from "../../../../ToggleSwitch/ToggleSwitch";
import classes from "../../../table.module.scss";
import styles from "./TrOwnersTable.module.scss";

export default function TrOwnersTable({ period, fullName, ls, address, status, shareOwnership }) {
  const [switchActive, updateSwitchActive] = useState(status);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>{period}</td>
          <td>
            <Link href="/">{fullName}</Link>
          </td>

          <td>
            {address}
            <br />
            <Link href="/">
              <a>Л/С №{ls}</a>
            </Link>
            <br />
          </td>
          <td>{shareOwnership}</td>
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
