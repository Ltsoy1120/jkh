import styles from "./RegistrationTable.module.scss";
import classes from "../../table.module.scss";
import TrRegistrationTable from "./TrRegistrationTable/TrRegistrationTable";

export default function RegistrationTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable} `}>
      <thead>
        <tr>
          <th>Период владения</th>
          <th>Лицевой счет</th>
          <th>Адрес регистрации</th>
          <th>Статус регистрации</th>
        </tr>
      </thead>
      <tbody>
        <TrRegistrationTable
          period="21.09.1991 - "
          fullName="Добролюбов В. К."
          ls="1"
          status="Зарегестрирован по месту жительства"
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, кв. 23"
        />
      </tbody>
    </table>
  );
}
