import React, { useState } from "react";
import ToggleSwitch from "../../../ToggleSwitch/ToggleSwitch";
import classes from "../../table.module.scss";
import styles from "./TrContractor.module.scss";

export default function TrContractor({ name, fullName, id, position, numberOne, numberTwo, email }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>
            <span>{name}</span>
          </td>
          <td>
            <span>{fullName} /</span>
            <br />
            {id}
          </td>
          <td>{position}</td>
          <td>
            <span>{numberOne}</span>
            <br />
            {numberTwo}
            <br />
          </td>
          <td>
            <span>{email}</span>
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
          <img src="../../table_icons/edit.svg" />
          <span>Редактировать</span>
        </div>
      </div>
    </div>
  );
}
