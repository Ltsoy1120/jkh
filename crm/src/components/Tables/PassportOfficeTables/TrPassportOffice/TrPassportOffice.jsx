import Link from "next/link";
import React, { useState } from "react";
import ToggleSwitch from "../../../ToggleSwitch/ToggleSwitch";
import classes from "../../table.module.scss";
import styles from "./TrPassportOffice.module.scss";

export default function TrPassportOffice({ fullName, ls, address, status }) {
  const [switchActive, updateSwitchActive] = useState(status);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
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
