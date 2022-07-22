import React, { useState } from "react";
import classes from "../../table.module.scss";
import styles from "./TrContract.module.scss";

export default function TrContract({ number, id, name, status, validity, terminationDate, controlObjects }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>
            <span className="text-green-600">{number}</span>
          </td>
          <td>{name}</td>
          <td>{status}</td>
          <td>
            <p className="font-bold">{validity.from}</p>
            <p>{validity.count}</p>
          </td>
          <td className="font-bold">{terminationDate}</td>
          <td className="font-bold">{controlObjects}</td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <img src="../../table_icons/edit.svg" />
          <span>Редактировать</span>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/delete.svg" />
          <span>Удалить</span>
        </div>
      </div>
    </div>
  );
}
