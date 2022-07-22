import React, { useState } from "react";
import classes from "../../table.module.scss";
import styles from "./TrHouses.module.scss";
import geo from "../../../../../public/table_icons/geo.svg";
import Link from "next/link";
import Image from "next/image";

export default function TrHouses({ address, id, fias, countLS, countPlaces }) {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>
            <Image alt="" src={geo} />
          </td>
          <td>
            <span>{address} /</span>
          </td>
          <td>{fias}</td>
          <td>{countLS}</td>
          <td>{countPlaces}</td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <img src="../../table_icons/edit.svg" />
          <Link href="/controlObjects/houses/editHouse">
            <a>Редактировать</a>
          </Link>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/delete.svg" />
          <span>Удалить</span>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/archive.svg" />
          <span>В архив</span>
        </div>
      </div>
    </div>
  );
}
