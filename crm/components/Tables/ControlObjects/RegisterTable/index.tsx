import TrRegister from "./TrRegister";
import classes from "../../table.module.scss";
import { ISubject } from "../../../../models/ISubject";
import styles from "./style.module.scss";

interface RegisterTableProps {
  subject: ISubject;
}

const RegisterTable: React.FC<RegisterTableProps> = ({ subject }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Период регистрации</th>
          <th>Лицевой счет</th>
          <th>Адрес регистрации</th>
          <th>Статус регистрации</th>
        </tr>
      </thead>
      <tbody>
        <TrRegister subject={subject} />
      </tbody>
    </table>
  );
};
export default RegisterTable;
