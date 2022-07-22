import React, { useState } from "react";
import classes from "../../table.module.scss";
import styles from "./TrRequests.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import { AppealsIcon } from "../../../AppealsIcon/AppealsIcon";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import FormHelperText from "@mui/material/FormHelperText";

export default function TrRequest({ number, created, citizen, typeRequest, executor, result }) {
  const [switchActive, updateSwitchActive] = useState(false);
  const statusProcessBcg = {
    new: "#DED6FD",
    progress: "#B8EEC1",
    canceled: "#FDD6DB",
    finish: "#C6D8E1",
  };
  const statusProcessTextColor = {
    new: "#7B61FF",
    progress: "#1EA133",
    canceled: "#EB5757",
    finish: "#6B8795",
  };

  const getPriorityButton = {
    critical: (
      <div className={styles.critical}>
        <RocketLaunchIcon />
        <p>Критический</p>
      </div>
    ),
    high: (
      <div className={styles.high}>
        <LocalFireDepartmentIcon />
        <p>Высокий</p>
      </div>
    ),
    middle: (
      <div className={styles.middle}>
        <AppealsIcon />
        <p>Средний</p>
      </div>
    ),
  };

  const StyledButton = styled(Button)((props) => {
    const { theme, ownerState } = props;
    return {
      background: statusProcessBcg[number.status],
      color: statusProcessTextColor[number.status],
      maxWidth: "170px",
      width: "fit-content",
      textTransform: "none",
      fontSize: "12px",
    };
  });

  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr className={styles.wrapTr}>
          <td>
            <div className={styles.td}>
              <a href="">
                {number.number}{" "}
                <span className={styles.arrowSpan}>
                  <span>&#x2190;</span> {number.number}
                </span>
              </a>
              <StyledButton>{number.statusText}</StyledButton>
              {getPriorityButton[number.priority]}
              <div className={styles.containerStar}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </td>

          <td>
            <p className={styles.grayText}>Поступила</p>
            <p className={`${styles.bold} ${styles.mb15}`}>{created.date}</p>
            <p>{created.ground}</p>
            <a href="">{created.groundCase}</a>
            <p>{created.person}</p>
          </td>

          <td>
            <p className={`${styles.bold} ${styles.mb15}`}>{citizen.person}</p>
            <p>{citizen.street}</p>
          </td>

          <td className={styles.bold}>{typeRequest}</td>

          <td>
            <p className={styles.bold}>{executor.person}</p>
            <p>{executor.work}</p>
          </td>

          <td>
            <div className={styles.td}>
              <p className={styles.grayText}>{result.status}</p>
              <p className={styles.bold}>{result.date}</p>
              <p>{result.problems}</p>
            </div>
          </td>
        </tr>
      </div>
    </div>
  );
}
