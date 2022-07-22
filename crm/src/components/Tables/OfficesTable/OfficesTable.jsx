import styles from "./OfficesTable.module.scss";
import classes from "../table.module.scss";
import TrOffice from "./TrOffice/TrOffice";

export default function OfficesTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Название</th>
          <th>Адрес</th>
          <th>Время работы</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        <TrOffice
          name="Ленинский район"
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, 4этаж, офис.435"
          dateOfWork="Пн.-Пт."
          timeOfWork="с 10:00 до 19:00"
          numberOne="+7 (4732) 65-65-65"
          numberTwo="+7 (4732) 65-65-66"
        />
        <TrOffice
          name="Ленинский район"
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, 4этаж, офис.435"
          dateOfWork="Пн.-Пт."
          timeOfWork="с 10:00 до 19:00"
          numberOne="+7 (4732) 65-65-65"
          numberTwo="+7 (4732) 65-65-66"
        />
        <TrOffice
          name="Ленинский район"
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, 4этаж, офис.435"
          dateOfWork="Пн.-Пт."
          timeOfWork="с 10:00 до 19:00"
          numberOne="+7 (4732) 65-65-65"
          numberTwo="+7 (4732) 65-65-66"
        />
      </tbody>
    </table>
  );
}
