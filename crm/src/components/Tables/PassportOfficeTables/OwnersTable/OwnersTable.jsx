import styles from "./OwnersTable.module.scss";
import classes from "../../table.module.scss";
import TrOwnersTable from "./TrOwnersTable/TrOwnersTable";

export default function OwnersTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable} `}>
      <thead>
        <tr>
          <th>Период владения</th>
          <th>Лицевой счет</th>
          <th>Адрес</th>
          <th>Доля владения</th>
        </tr>
      </thead>
      <tbody>
        <TrOwnersTable
          period="21.09.1991 - "
          fullName="Добролюбов В.К."
          ls="1"
          status={false}
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, кв. 23"
          shareOwnership="1 / 1"
        />
      </tbody>
    </table>
  );
}
