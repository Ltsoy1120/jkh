import React, { useState } from "react";
import styles from "./style.module.scss";

type ToggleSwitchProps = {
  dayOfWeek?: string;
  checked: boolean;
  handleCheckedReception?: (dayOfWeek: string) => void;
  onChange?: () => void;
};

export default function ToggleSwitch({
  dayOfWeek,
  checked,
  handleCheckedReception,
  onChange,
}: ToggleSwitchProps) {
  return (
    <div
      className={`${styles.toggleSwitch} ${checked ? styles.active : ""}`}
      onClick={dayOfWeek ? () => handleCheckedReception(dayOfWeek) : onChange}
    >
      <div className={styles.circle} />
    </div>
  );
}
