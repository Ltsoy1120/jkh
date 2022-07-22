import classes from "../../table.module.scss";
import styles from "./TrMap.module.scss";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import geo from "../../../../../public/table_icons/geo.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/system";

export default function TrMap({ date, fullName, personId, position, phoneNumber }) {
  const StyledVisibilyIcon = styled(VisibilityIcon)((props) => {
    return {
      color: "#C6D8E1",
      fontSize: "30px",
    };
  });

  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>
            <b>{date}</b>
          </td>

          <td className={styles.geo}>
            <Image alt="" src={geo} />
          </td>

          <td>
            <p className={styles.bold}>{fullName}</p>
            <p>{personId}</p>
          </td>

          <td>
            <p className={`${styles.map}, ${styles.bold}`}>{position}</p>
          </td>

          <td>
            <p className={styles.map}>{phoneNumber}</p>
            <p className={styles.map}>{phoneNumber}</p>
          </td>

          <td>
            <p className={styles.map}>
              <StyledVisibilyIcon />
            </p>
          </td>
        </tr>
      </div>
      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <img src="../../table_icons/edit.svg" />
          <Link href="/controlObjects/houses/editHouse">
            <a> Редактировать сотрудника</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
