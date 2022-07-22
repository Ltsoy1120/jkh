import styles from "./CountersTable.module.scss";
import classes from "../table.module.scss";
import TrCounters from "./TrCounters/TrCounters";

export default function CountersTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>
            Номер прибора /<br />
            Назначение
          </th>
          <th>
            Тип прибора /<br />
            Место установки
          </th>
          <th>Адрес</th>
          <th>Вид тарийфа</th>
          <th>
            Последние
            <br />
            показания
          </th>
          <th>Разница показаний</th>
        </tr>
      </thead>
      <tbody>
        <TrCounters
          deviceNumber="ЕН123445678909"
          purpose="Холодная вода"
          deviceType="ИПУ"
          installationLocation="Санузел"
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, 4этаж, офис.435"
          tariffType="Однотарифный"
          latestTestimony="123456"
          readingDifference="12"
        />
        <TrCounters
          deviceNumber="ЕН123445678909"
          purpose="Холодная вода"
          deviceType="ИПУ"
          installationLocation="Санузел"
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, 4этаж, офис.435"
          tariffType="Однотарифный"
          latestTestimony="123456"
          readingDifference="12"
        />
      </tbody>
    </table>
  );
}
