import React, { useState } from "react";
import ToggleSwitch from "../../../ToggleSwitch/ToggleSwitch";
import classes from "../../table.module.scss";
import styles from "./TrEmployee.module.scss";

export default function TrEmployee({ date, name, id, position, numberOne, numberTwo, email }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>{date}</td>
          <td>
            <span>{name} /</span>
            <br />
            {id}
          </td>
          <td>{position}</td>
          <td>
            {numberOne}
            <br />
            {numberTwo}
            <br />
          </td>
          <td>{email}</td>
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
        <div className={classes.btn}>
          <img src="../../table_icons/copy.svg" />
          <span>Копировать права</span>
        </div>
      </div>
    </div>
  );
}
