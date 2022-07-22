import styles from "./EmployeesTable.module.scss";
import classes from "../table.module.scss";
import TrEmployeesTable from "./TrEmployeesTable/TrEmployeesTable";

export const EmployeesTable = () => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер / Дата</th>
          <th>Тема</th>
          <th>Автор</th>
          <th>Получатели</th>
        </tr>
      </thead>
      <tbody>
        <TrEmployeesTable
          typeText="№123"
          data="21.05.2021 в 12:34"
          tema="Планерка"
          auth="Авосткина П.Р."
          authProf="(Диспетчер)"
          recipients="Бухгалтерия"
        />
      </tbody>
    </table>
  );
};
