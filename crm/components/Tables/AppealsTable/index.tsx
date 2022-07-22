import TrAppeal from "./TrAppeal";
import { IAppeal } from "../../../models/IAppeal";
import classes from "../table.module.scss";
import styles from "./style.module.scss";

interface AppealsTableProps {
  companyId?: string;
  appeals: IAppeal[];
}

const AppealsTable: React.FC<AppealsTableProps> = ({ companyId, appeals }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Кем и когда создана</th>
          <th>Житель / Адрес </th>
          <th>Тип заявки</th>
          <th>Исполнитель</th>
          <th>Результат</th>
        </tr>
      </thead>
      <tbody>
        {appeals &&
          appeals.map((appeal) => (
            <TrAppeal
              companyId={companyId}
              key={appeal._id}
              appeal={appeal}
              href={`/appeals/${appeal._id}/editAppeal`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default AppealsTable;
