import { IContract } from "../../../../models/IContract";
import TrContract from "./TrContract";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface ContractsTableProps {
  companyId: string;
  contracts: IContract[];
}

const ContractsTable: React.FC<ContractsTableProps> = ({
  companyId,
  contracts,
}) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Название</th>
          <th>Статус</th>
          <th>Период действия</th>
          <th>Дата расторжения</th>
          <th>Объекты управления</th>
        </tr>
      </thead>
      <tbody>
        {contracts &&
          contracts.map((contract, index) => (
            <TrContract
              key={index}
              contract={contract}
              companyId={companyId}
              href={`/controlObjects/contracts/${contract._id}/editContract`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default ContractsTable;
