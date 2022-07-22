import styles from "./InputPhone.module.scss";
import React, { useState, useEffect, useRef } from "react";

export default function Input({ placeholder, id, width, margin_right, children, label, type }) {
  const [card, setCard] = useState();
  const inputCard = useRef();

  const handleChange = () => {
    const cardValue = inputCard.current.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    inputCard.current.value = !cardValue[2]
      ? cardValue[1]
      : `+${cardValue[1]} - (${cardValue[2]}${`${cardValue[3] ? `) - ${cardValue[3]}` : ""}`}${`${
          cardValue[4] ? `- ${cardValue[4]}` : ""
        }`}${`${cardValue[5] ? `- ${cardValue[5]}` : ""}`}`;
    const numbers = inputCard.current.value.replace(/(\D)/g, "");
    setCard(numbers);
  };

  return (
    <div className={`${styles.wrapLabel}`}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.wrapInput}>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          style={{ width: width, marginRight: margin_right }}
          ref={inputCard}
          onChange={handleChange}
        />
        {children}
      </div>
    </div>
  );
}
