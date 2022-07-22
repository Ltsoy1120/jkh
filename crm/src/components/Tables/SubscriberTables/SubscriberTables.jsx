import styles from "./SubscriberTables.module.scss";
import classes from "../table.module.scss";
import TrContractor from "./TrSubscriber/TrSubscriber";

export default function SubscriberTables() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Л/С</th>
          <th>Контактный телефон</th>
          <th>E-mail</th>
          <th>Дата регистрации</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <TrContractor
          fullName="Петрова С.С."
          ls="12345678"
          numberOne="+7 (4732) 65-65-65"
          numberTwo="+7 (4732) 65-65-66"
          email="Canteh@mail.ru"
          date="21.09.2020"
        />
      </tbody>
    </table>
  );
}
