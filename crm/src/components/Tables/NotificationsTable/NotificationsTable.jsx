import styles from "./NotificationsTable.module.scss";
import classes from "../table.module.scss";
import TrNotifications from "./TrNotifications/TrNotifications";

const mockData = [
  {
    number: "№123",
    dateOfCreation: "21.05.2021 в 12:34",
    message:
      "1) будет реализован перенос модуля и всех данных на отдельный микросервис (будет работать в разы быстрее и не нужно будет ...",
    theme: "Обновление раздела “Должники”",
  },
  {
    number: "№123",
    dateOfCreation: "21.05.2021 в 12:34",
    message:
      "1) будет реализован перенос модуля и всех данных на отдельный микросервис (будет работать в разы быстрее и не нужно будет ...",
    theme: "Обновление раздела “Должники”",
  },
  {
    number: "№123",
    dateOfCreation: "21.05.2021 в 12:34",
    message:
      "1) будет реализован перенос модуля и всех данных на отдельный микросервис (будет работать в разы быстрее и не нужно будет ...",
    theme: "Обновление раздела “Должники”",
  },
];

export default function NotificationsTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер / Дата</th>
          <th>Тема</th>
          <th>Сообщение</th>
        </tr>
      </thead>

      <tbody>{mockData.map(TrNotifications)}</tbody>
    </table>
  );
}
