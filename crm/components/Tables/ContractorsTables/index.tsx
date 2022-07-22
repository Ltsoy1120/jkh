import styles from "./style.module.scss";
import classes from "../table.module.scss";
import TrContractor from "./TrContractor";
import { IContractor } from "../../../models/IContractor";

interface ContractorsTableProps {
  companyId: string;
  contractors: IContractor[];
}

const ContractorsTable: React.FC<ContractorsTableProps> = ({
  companyId,
  contractors,
}) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Название</th>
          <th>ФИО руководителя</th>
          <th>Статус</th>
          <th>Контактные телефоны</th>
          <th>E-mail</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {contractors &&
          contractors.map((contractor) => (
            <TrContractor
              companyId={companyId}
              key={contractor._id}
              contractor={contractor}
              href={`/company/${companyId}/contractors/${contractor._id}/settings/contractor`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default ContractorsTable;
