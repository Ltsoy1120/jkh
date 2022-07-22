import styles from "./debtors.module.scss";
import classes from "../table.module.scss";
import TrDebtors from "./TrDebtors";

export default function RequestTable() {
  const testData = {
    citizen: "Зелипупкин П.Л.",
    numberPhone: "+7 (900) 000-00-00",
    street: "Путиловская 14, кв 65",
    ls: "Л/С 12345",
    id: 1,
  };

  const mockData = [
    {
      number: "123457",
      dateCreated: "29.08.2021 в 19:30",
      status: "Судебный приказ вступил в силу",
      citizen: testData,
      statusUtilities: "Предоставляются",
      debtStatus: "34 080, 99",
    },
  ];
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер / Дата создания</th>
          <th>Статус </th>
          <th>Житель</th>
          <th>Статус коммунальных услуг</th>
          <th>Сумма задолженности, ₽</th>
        </tr>
      </thead>
      <tbody>
        <tbody>{mockData.map(TrDebtors)}</tbody>
      </tbody>
    </table>
  );
}
