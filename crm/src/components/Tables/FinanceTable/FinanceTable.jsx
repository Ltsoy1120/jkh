import styles from "./FinanceTable.module.scss";
import classes from "../table.module.scss";
import TrAppealsTable from "./TrFinanceTable/TrFinanceTable";
import Status from "../../Status/Status";

export const FinanceTable = () => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Управляющая компания</th>
          <th>Дата регистрации</th>
          <th>Количество Л/С</th>
          <th>Сумма ежемесячного платежа</th>
          <th>Текущий баланс</th>
        </tr>
      </thead>
      <tbody>
        <TrAppealsTable
          managementCompanyName="ООО “Супер управляшка”"
          sum="1 300 ₽"
          date="21.04.2020"
          quantity="300"
          currentBalance="0 ₽"
        />
      </tbody>
    </table>
  );
};
