import Link from "next/link";
import React, { useState } from "react";
import ToggleSwitch from "../../../../ToggleSwitch/ToggleSwitch";
import classes from "../../../table.module.scss";
import styles from "./TrEditJurnals.module.scss";

export default function TrEditJurnals({ number, address, periodFrom, periodTo, reason, identified }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          ƒ{" "}
          <td>
            <Link href="/">1</Link>
            <br />
            <Link href="/">
              <h4>{number} </h4>
            </Link>
          </td>
          <td>
            <h4>{address[0]}</h4>
            <h4>{address[1]}</h4>
            <Link href="/">
              <a>+ еще {address.length - 2} адрес</a>
            </Link>
          </td>
          <td>
            <p style={{ margin: 0 }}>Поступила</p>
            <h3 style={{ marginTop: 0 }}>{periodFrom}</h3>
            <p style={{ margin: 0 }}>Устранена</p>
            <h3 style={{ margin: 0 }}>{periodTo}</h3>
          </td>
          <td>
            <h4>{reason}</h4>
          </td>
          <td>
            <h4>{identified}</h4>
          </td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <Link href="/controlObjects/journals/editJournal/editRecord">
            <a>
              <img src="../../table_icons/edit.svg" />
              <span>Редактировать</span>
            </a>
          </Link>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/delete.svg" />
          <span>Удалить</span>
        </div>
      </div>
    </div>
  );
}
