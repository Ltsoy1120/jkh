import React, { useState } from "react";
import classes from "../../table.module.scss";
import styles from "./TrConnectedTld.module.scss";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { SettingsWithKey } from "../../../../ui/Icons/SettingsWithKey";
import { Settings } from "../../../../ui/Icons/Settings";
import { styled } from "@mui/system";
import Link from "next/link";

export default function TrConnectedTlp({ who, url }) {
  const [switchActive, updateSwitchActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => {
    setIsPlaying(true);
  };

  const StyledListIcon = styled(ListAltIcon)((props) => {
    const { theme, ownerState } = props;
    return {
      color: theme.palette.info.main,
    };
  });

  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr className={styles.wrapTr}>
          <td className={styles.boldText}>{who}</td>
          <td>
            <span className={styles.boldText}>URL для события звонка: </span>
            <Link href="">
              <a href="">{url}</a>
            </Link>
          </td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={`${classes.btn} ${styles.btn}`}>
          <StyledListIcon />
          <Link href="/telephony/connectedTelephony/listOfAdded">
            <a>Список добавочных</a>
          </Link>
        </div>
        <div className={`${classes.btn} ${styles.btn} ${styles.unsetAlign}`}>
          <Settings />
          <Link href="/telephony/connectedTelephony/settings">
            <a>Настройки</a>
          </Link>
        </div>
        <div className={`${classes.btn} ${styles.btn} ${styles.unsetAlign}`}>
          <SettingsWithKey />
          <Link href="/telephony/connectedTelephony/settingsApi">
            <a>Настройка подключения API </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
