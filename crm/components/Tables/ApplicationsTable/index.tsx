import { IApplication } from "../../../models/IApplication";
import TrApplication from "./TrApplication";
import classes from "../table.module.scss";
import styles from "./style.module.scss";

interface ApplicationsTableProps {
  companyId?: string;
  applications: IApplication[];
}

const ApplicationsTable: React.FC<ApplicationsTableProps> = ({
  companyId,
  applications,
}) => {
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
        {applications &&
          applications.map((application) => (
            <TrApplication
              companyId={companyId}
              key={application._id}
              application={application}
              href={`/control/applications/${application._id}/editApplication`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default ApplicationsTable;
