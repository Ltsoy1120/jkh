import styles from "./OwnersTable.module.scss";
import classes from "../table.module.scss";
import TrOffice from "./TrOwner/TrOwner";

export default function OwnersTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Период владения</th>
          <th>Доля владения</th>
          <th>Статус владения</th>
        </tr>
      </thead>
      <tbody>
        <TrOffice
          fullName="Петрова С.С."
          periodOwnership="21.09.1991 - "
          shareOwnership="1/1"
          ownershipStatus="Собственник"
        />
        <TrOffice
          fullName="Петрова С.С."
          periodOwnership="21.09.1991 - "
          shareOwnership="1/1"
          ownershipStatus="Собственник"
        />
      </tbody>
    </table>
  );
}
