import styles from "./housesTable.module.scss";
import classes from "../../Tables/table.module.scss";
import TrHouses from "./thHouses";

export default function HousesTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>
            Номер прибора / <br />
            Назначение
          </th>
          <th>Тип прибора / Место установки</th>
          <th>Вид тарифа</th>
          <th>Последние показания</th>
          <th>Разница показаний</th>
          <th>Дата следующей проверки</th>
        </tr>
      </thead>
      <tbody>
        <TrHouses
          number="ЕН123445678909"
          type="Холодная вода"
          devicetype="ИПУ"
          placeofattach="Санузел"
          tarifftype="Однотарифный"
          lastreading="123456"
          readingdifference="12"
          errordate="12.09.2021"
          errormessage="Требуется проверка"
        />
        <TrHouses
          number="ЕН123445678909"
          type="Горячая вода"
          devicetype="ИПУ"
          placeofattach="Санузел"
          tarifftype="Однотарифный"
          lastreading="123456"
          readingdifference="12"
          errordate="12.09.2021"
          errormessage=""
        />
        <TrHouses
          number="ЕН123445678909"
          type="Холодная вода"
          devicetype="ИПУ"
          placeofattach="Санузел"
          tarifftype="Многотарифный"
          lastreading="123456"
          readingdifference="12"
          errordate="12.09.2021"
          errormessage=""
        />
      </tbody>
    </table>
  );
}
