import React, { useState } from "react";
import classes from "../../table.module.scss";
import styles from "./TrTelephony.module.scss";
import { PlayIcon } from "./PlayIcon";
import { Box, Slider } from "@mui/material";
import { styled } from "@mui/system";

export default function TrTelephony({ timeCall, direction, whoCalled, statusAnswer, whomCalled, answerringPerson }) {
  const [switchActive, updateSwitchActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const statusAnswerClassName = {
    "Без ответа": "negative",
    Отвечен: "positive",
  };
  const stylesStatus = statusAnswerClassName[statusAnswer];

  const onPlay = () => {
    setIsPlaying(true);
  };

  const StyledSlider = styled(
    Slider,
    {}
  )(({ theme }) => ({
    "&": {
      width: "70vw",
    },
  }));

  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={`${classes.wrapTr} ${switchActive ? styles.inactive : ""}`}>
        <tr>
          <td>{timeCall}</td>
          <td className={styles.boldText}>
            {direction}
            <br />
            <span className={stylesStatus === "negative" ? styles.negative : styles.positive}>{statusAnswer}</span>
          </td>
          <td>
            <p className={styles.boldText}>{whoCalled}</p>
          </td>
          <td>
            <p className={styles.boldText}>{whomCalled.organization}</p>
            <p>{whomCalled.number}</p>
          </td>
          <td className={styles.boldText}>
            <p>{answerringPerson.person}</p>
            <p>{answerringPerson.work}</p>
          </td>
          <td>
            <div className={`flex items-center ${styles.wrapSwitch}`}>
              <PlayIcon onClick={onPlay} className={styles.iconPlay} />
            </div>
          </td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={!isPlaying ? classes.btn : styles.playing}>
          {isPlaying ? (
            <div className={styles.containerPlayer}>
              <PlayIcon onClick={onPlay} />
              <Box>
                <StyledSlider size="small" defaultValue={20} aria-label="Small" valueLabelDisplay="auto" />
              </Box>
            </div>
          ) : (
            <>
              <img src="../../table_icons/zip.svg" />
              <span>Прикрепить звонок</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
