import styles from "./CheckBox.module.scss";
import React, { useState } from "react";

export default function CheckBox() {
  const [checkBoxActive, updateCheckBoxActive] = useState(true);
  return (
    <div className={styles.checkBox} onClick={() => updateCheckBoxActive(!checkBoxActive)}>
      {checkBoxActive ? (
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
          <path d="M1 9.91892L6.76923 16L16 1" stroke="#1EA133" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        ""
      )}
    </div>
  );
}
