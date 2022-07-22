import styles from "./MapTable.module.scss";
import classes from "../table.module.scss";
import TrMap from "./TrMap/TrMap";

const mockData = [
  {
    date: "21.05.2021",
    fullName: "Сантехников С.С. /",
    personId: "12345678",
    position: "Инженер",
    phoneNumber: "+7 (900) 123-23-34",
  },
  {
    date: "21.05.2021",
    fullName: "Сантехников С.С. /",
    personId: "12345678",
    position: "Инженер",
    phoneNumber: "+7 (900) 123-23-34",
  },
  {
    date: "21.05.2021",
    fullName: "Сантехников С.С. /",
    personId: "12345678",
    position: "Инженер",
    phoneNumber: "+7 (900) 123-23-34",
  },
];

export default function MapTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Мсетонахождение</th>
          <th>ФИО / ID</th>
          <th>Должность</th>
          <th>Контактный телефон</th>
          <th>История </th>
        </tr>
      </thead>

      <tbody>{mockData.map(TrMap)}</tbody>
    </table>
  );
}
