import TrOffice from "./TrOffice/TrOffice";
import { IOffice } from "../../../models/IOffice";
import classes from "../table.module.scss";
import styles from "./OfficesTable.module.scss";

interface OfficeTableProps {
  offices: IOffice[];
  isAdmin: boolean;
  isHiddenBlock: boolean;
  companyId: string;
}

const OfficesTable: React.FC<OfficeTableProps> = ({
  offices,
  isAdmin,
  isHiddenBlock,
  companyId,
}) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Название</th>
          <th>Адрес</th>
          <th>Время работы</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {offices.map((office) => (
          <TrOffice
            key={office._id}
            office={office}
            isAdmin={isAdmin}
            isHiddenBlock={isHiddenBlock}
            href={`/company/${companyId}/settings/office/${office._id}`}
          />
        ))}
      </tbody>
    </table>
  );
};
export default OfficesTable;
