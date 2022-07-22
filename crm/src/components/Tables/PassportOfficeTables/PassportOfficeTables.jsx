import styles from "./PassportOfficeTables.module.scss";
import classes from "../table.module.scss";
import TrPassportOffice from "./TrPassportOffice/TrPassportOffice";

export default function PassportOfficeTables() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable} `}>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Собственность</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <TrPassportOffice
          fullName="Добролюбов В.К."
          ls="1"
          status={false}
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, кв. 23"
        />
      </tbody>
    </table>
  );
}
