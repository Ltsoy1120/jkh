import styles from "./ContractorsTables.module.scss";
import classes from "../table.module.scss";
import TrContractor from "./TrContractor/TrContractor";

export default function ContractorsTables() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Название</th>
          <th>ФИО / ID</th>
          <th>Тип работ</th>
          <th>Контактный телефон</th>
          <th>E-mail</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <TrContractor
          name="OOO “Сантехстрой”"
          fullName="Сантехников С.С."
          id="12345678"
          position="Инженер"
          numberOne="+7 (4732) 65-65-65"
          numberTwo="+7 (4732) 65-65-66"
          email="Canteh@mail.ru"
        />
        <TrContractor
          name="OOO “Сантехстрой”"
          fullName="Сантехников С.С."
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
