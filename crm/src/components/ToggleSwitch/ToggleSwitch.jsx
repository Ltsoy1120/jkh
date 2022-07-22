import React, { useState } from "react";
import styles from "./ToggleSwitch.module.scss";

export default function ToggleSwitch() {
  const [switchActive, updateSwitchActive] = useState(true);

  return (
    <div
      className={`${styles.toggleSwitch} ${switchActive ? styles.active : ""}`}
      onClick={() => updateSwitchActive(!switchActive)}
    >
      <div className={styles.circle} />
    </div>
  );
}
