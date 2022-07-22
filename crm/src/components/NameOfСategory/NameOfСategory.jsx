import React, { useState } from "react";
import DescriptionRight from "./DescriptionRight/DescriptionRight";
import styles from "./NameOfСategory.module.scss";

export default function NameOfСategory({ title }) {
  const [showRights, updateShowRights] = useState(true);
  return (
    <div className={`${styles.wrapper}  ${showRights ? styles.show : ""}`}>
      <div className={`flex items-center ${styles.titleWrap}`} onClick={() => updateShowRights(!showRights)}>
        <h2>{title}</h2>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M5 7.5L0.669872 0L9.33013 0L5 7.5Z" fill="#C6D8E1" />
        </svg>
      </div>

      <div className={`flex`}>
        <div className={`flex ${styles.left} ${styles.wrapIcons}`}>
          <div className={`w-1/2 flex items-center justify-center`}>
            <svg width="26" height="15" viewBox="0 0 26 15" fill="none">
              <path d="M13 0C8.03242 0 3.52756 2.63041 0.203437 6.90288C-0.0678122 7.25292 -0.0678122 7.74194 0.203437 8.09197C3.52756 12.3696 8.03242 15 13 15C17.9676 15 22.4724 12.3696 25.7966 8.09712C26.0678 7.74708 26.0678 7.25807 25.7966 6.90803C22.4724 2.63041 17.9676 0 13 0ZM13.3563 12.7814C10.0588 12.9822 7.33569 10.3518 7.54311 7.15511C7.71331 4.51956 9.92053 2.38332 12.6437 2.2186C15.9412 2.01784 18.6643 4.64825 18.4569 7.84489C18.2814 10.4753 16.0742 12.6115 13.3563 12.7814ZM13.1915 10.3415C11.4151 10.4496 9.94712 9.03397 10.0641 7.31469C10.1545 5.89396 11.3459 4.74605 12.8138 4.6534C14.5903 4.5453 16.0582 5.96088 15.9412 7.68017C15.8455 9.10604 14.6541 10.2539 13.1915 10.3415Z" />
            </svg>
          </div>
          <div className={`w-1/2 flex items-center justify-center`}>
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
              <rect x="16.5459" y="2.88672" width="16.0101" height="4.20624" transform="rotate(131 16.5459 2.88672)" />
              <path d="M2.08711 16.7545L2.51349 12.8827L5.72691 15.5643L2.08711 16.7545Z" />
            </svg>
          </div>
        </div>
        <div className={`flex ${styles.right}`}>
          <span>Наименование</span>
        </div>
      </div>

      <div className={styles.line} />

      <DescriptionRight />
      <DescriptionRight />
      <DescriptionRight />
      <DescriptionRight />
    </div>
  );
}
