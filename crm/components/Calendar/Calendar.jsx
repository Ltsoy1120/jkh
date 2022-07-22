import styles from "./Calendar.module.scss";

export default function Calendar() {
  const Days = function () {
    for (let i = 1; i <= 31; i++) {
      <li key={i}>{i}</li>;
    }
  };
  return (
    <div className={styles.calendar}>
      <h2>Май 2021</h2>
      <div className={`flex`}>
        <ul className={`flex justify-between w-full ${styles.daysOfWeek}`}>
          <li>пн</li>
          <li>вт</li>
          <li>ср</li>
          <li>чт</li>
          <li>пт</li>
          <li>сб</li>
          <li>вс</li>
        </ul>

        <ul>{Days}</ul>
      </div>
    </div>
  );
}
