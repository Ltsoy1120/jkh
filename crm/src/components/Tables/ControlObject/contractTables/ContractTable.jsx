import styles from "./contractTable.module.scss";
import classes from "../../table.module.scss";
import TrHouses from "./TrContract";

export default function ContractTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Название</th>
          <th>Статус</th>
          <th>Период действия</th>
          <th>Дата расторжения</th>
          <th>Объекты управления</th>
        </tr>
      </thead>
      <tbody>
        <TrHouses
          number="1"
          name="Инженер"
          status="Действующий"
          validity={{ from: "с 23.03.21,", count: "12 месяцев" }}
          terminationDate="23.03.22"
          controlObjects="г. Воронеж, ул. Бульвар Фестивальный, д.13"
        />
        <TrHouses
          number="1"
          name="Инженер"
          status="Действующий"
          validity={{ from: "с 23.03.21,", count: "12 месяцев" }}
          terminationDate="23.03.22"
          controlObjects="г. Воронеж, ул. Бульвар Фестивальный, д.13"
        />
        <TrHouses
          number="1"
          name="Инженер"
          status="Действующий"
          validity={{ from: "с 23.03.21,", count: "12 месяцев" }}
          terminationDate="23.03.22"
          controlObjects="г. Воронеж, ул. Бульвар Фестивальный, д.13"
        />
      </tbody>
    </table>
  );
}
