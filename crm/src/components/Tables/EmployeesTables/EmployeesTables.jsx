import styles from "./EmployeesTables.module.scss";
import classes from "../table.module.scss";
import TrEmployee from "./TrEmployee/TrEmployee";

export default function EmployeesTables() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Дата регистрации</th>
          <th>ФИО / ID</th>
          <th>Статус</th>
          <th>Контактный телефон</th>
          <th>E-mail</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <TrEmployee
          date="21.05.2021"
          name="Сантехников С.С."
          id="12345678"
          position="Инженер"
          numberOne="+7 (4732) 65-65-65"
          numberTwo="+7 (4732) 65-65-66"
          email="Canteh@mail.ru"
        />
        <TrEmployee
          date="21.05.2021"
          name="Сантехников С.С."
          id="12345678"
          position="Инженер"
          numberOne="+7 (4732) 65-65-65"
          numberTwo="+7 (4732) 65-65-66"
          email="Canteh@mail.ru"
        />
        <TrEmployee
          date="21.05.2021"
          name="Сантехников С.С."
          id="12345678"
          position="Инженер"
          numberOne="+7 (4732) 65-65-65"
          numberTwo="+7 (4732) 65-65-66"
          email="Canteh@mail.ru"
        />
      </tbody>
    </table>
  );
}
