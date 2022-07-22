import Link from "next/link";
import React, { useState } from "react";
import ToggleSwitch from "../../../ToggleSwitch/ToggleSwitch";
import classes from "../../table.module.scss";
import styles from "./TrJournal.module.scss";

export default function TrJournal({ title, text }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <p style={{ fontWeight: 900, fontSize: 13, marginTop: "10px" }}>{title}</p>
        <h5 style={{ fontWeight: 400, fontSize: 12 }}>{text}</h5>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <Link href="/controlObjects/journals/editJournal">
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
