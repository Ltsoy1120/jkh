import React, { useState } from "react";
import ScheduleInput from "../../Forms/ScheduleInput/ScheduleInput";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import styles from "./Day.module.scss";

export default function Day({ title }) {
  const [switchActive, updateSwitchActive] = useState(true);

  return (
    <div className={`flex flex-col items-center ${styles.wrapper}`}>
      <div className={`flex items-center ${styles.wrapSwitch}`}>
        <div onClick={() => updateSwitchActive(!switchActive)}>
          <ToggleSwitch />
        </div>
        <span>{title}</span>
      </div>

      <div className={`${styles.wrapInputs}`}>
        {switchActive ? (
          <div className={`h-full flex flex-col justify-between`}>
            <div>
              <ScheduleInput margin_bottom={10} />
              <ScheduleInput />
            </div>
            <div>
              <ScheduleInput margin_bottom={10} />
              <ScheduleInput />
            </div>{" "}
          </div>
        ) : (
          <div className={`h-full w-full flex items-center justify-center ${styles.noReception}`}>
            <span>Нет приема</span>
          </div>
        )}
      </div>
    </div>
  );
}
