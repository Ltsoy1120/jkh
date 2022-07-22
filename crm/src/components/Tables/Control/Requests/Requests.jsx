import styles from "./Request.module.scss";
import classes from "../../table.module.scss";
import TrRequest from "./TrRequest";

export default function DebtorsTable() {
  const numberData = {
    number: 123456,
    status: "new",
    statusText: "Новая",
    priority: "high",
    id: 1,
  };

  const result = {
    status: "Завершена",
    date: "27.08.2021 в 14:09",
    problems: "Неисправность на внешних сетях",
  };

  const mockData = [
    {
      number: numberData,
      created: {
        date: "27.08.2021 в 12:09",
        person: "Петрова Ю.Д. (Диспетчер)",
        ground: "на основании дела о задолженности",
        groundCase: "№1234 от 23.05.2021",
      },
      citizen: {
        person: "Петрова Ю.Д. (Диспетчер)",
        street: "Краснознаменная, д.12. кв 60",
      },
      typeRequest: "Ремонт сантехники",
      executor: {
        person: "Петрова Ю.Д.",
        work: "(Инжинер)",
      },
      result: result,
    },
  ];

  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Кем и когда создана</th>
          <th>Житель / Адрес </th>
          <th>Тип заявки</th>
          <th>Исполнитель</th>
          <th>Результат</th>
        </tr>
      </thead>
      <tbody>
        <tbody>{mockData.map(TrRequest)}</tbody>
      </tbody>
    </table>
  );
}
