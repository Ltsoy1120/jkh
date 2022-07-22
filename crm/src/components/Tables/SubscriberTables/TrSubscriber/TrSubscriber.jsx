import Link from "next/link";
import React, { useState } from "react";
import ToggleSwitch from "../../../ToggleSwitch/ToggleSwitch";
import classes from "../../table.module.scss";
import styles from "./TrSubscriber.module.scss";

export default function TrSubscriber({ fullName, ls, numberOne, numberTwo, email, date, status }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>{fullName}</td>
          <td>
            <Link href="/controlObjects/businessAccounts">
              <a>{ls}</a>
            </Link>
          </td>
          <td>
            {numberOne}
            <br />
            {numberTwo}
            <br />
          </td>
          <td>{email}</td>
          <td>{date}</td>
          <td>
            <div className={`flex items-center ${styles.wrapSwitch}`}>
              <div className={styles.switch} onClick={() => updateSwitchActive(!switchActive)}>
                <ToggleSwitch />
              </div>
              {switchActive ? <span>Неактивен</span> : <span>Активен</span>}
            </div>
          </td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <img src="../../table_icons/delete.svg" />
          <span>Удалить</span>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/block.svg" />
          <span>Заблокировать</span>
        </div>
      </div>
    </div>
  );
}
