import classes from "../table.module.scss";
import TrEmployee from "./TrEmployee/TrEmployee";
import { IUser } from "../../../models/IUser";
import styles from "./EmployeesTables.module.scss";

export interface EmployeeProps {
  employees: IUser[];
}

const EmployeesTables: React.FC<EmployeeProps> = ({ employees }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Дата регистрации</th>
          <th>ФИО / ID</th>
          <th>Должность</th>
          <th>Контактный телефон</th>
          <th>E-mail</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {employees &&
          employees.map((employee) => (
            <TrEmployee key={employee._id} employee={employee} />
          ))}
      </tbody>
    </table>
  );
};
export default EmployeesTables;
