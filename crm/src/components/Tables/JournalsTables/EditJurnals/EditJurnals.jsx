import styles from "./EditJurnals.module.scss";
import classes from "../../table.module.scss";
import TrJournal from "./TrEditJurnals/TrEditJurnals";
export default function EditJurnals({ number, address, periodFrom, periodTo, reason, identified }) {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable} `}>
      <thead>
        <tr>
          <th>Номер / Услуга</th>
          <th>Адрес</th>
          <th>Период</th>
          <th>Причина</th>
          <th>Кем выявлено</th>
        </tr>
      </thead>
      <tbody>
        <TrJournal
          number={number}
          address={address}
          periodFrom={periodFrom}
          periodTo={periodTo}
          reason={reason}
          identified={identified}
        />
      </tbody>
    </table>
  );
}
