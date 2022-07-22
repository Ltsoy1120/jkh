import React, { useState } from "react";
import Link from "next/link";
import classes from "../../table.module.scss";
import styles from "./TrAdmissionTopicsTable.module.scss";
import ToggleSwitch from "../../../ToggleSwitch/ToggleSwitch";

export default function TrControlApplicationTypesTable({
  typeText,
  performersOne,
  performersOneWork,
  performersTwo,
  performersTwoWork,
  contractors,
}) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>
            <span className={styles.green}>{typeText}</span>
          </td>
          <td>
            <span className={styles.bold}>{performersOne}</span>
            <span>{performersOneWork}</span>
            <br />
            <span className={`${styles.bold}`}>{performersTwo}</span>
            <span>{performersTwoWork}</span>
          </td>

          <td>
            <span className={styles.bold}>{contractors}</span>
          </td>

          <td>
            <div className={`flex items-center ${styles.wrapSwitch}`}>
              <div className={styles.switch} onClick={() => updateSwitchActive(!switchActive)}>
                <ToggleSwitch />
              </div>
              {switchActive ? <span>Отключена</span> : <span>Активен</span>}
            </div>
          </td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btnControl}>
          <img src="../../table_icons/edit.svg" />
          <Link href="/">
            <a>Редактировать</a>
          </Link>
        </div>
        <div className={classes.btnControl}>
          <img src="../../table_icons/disable.svg" />
          <span>Отключить</span>
        </div>
      </div>
    </div>
  );
}
