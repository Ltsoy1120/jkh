import TrReceipt from "./TrReceipt";
import { IReceipt } from "../../../models/IReceipt";
import classes from "../table.module.scss";
import styles from "./style.module.scss";

interface ReceiptsTableProps {
  receipts: IReceipt[];
}

const ReceiptsTable: React.FC<ReceiptsTableProps> = ({ receipts }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Период</th>
          <th>Абонент / Адрес / Лицевой счет</th>
          <th>Ресурс / Тариф / Прибор учета</th>
          <th>Статус оплаты</th>
          <th>Квитанция</th>
        </tr>
      </thead>
      <tbody>
        {receipts &&
          receipts.map((receipt) => (
            <TrReceipt key={receipt._id} receipt={receipt} />
          ))}
      </tbody>
    </table>
  );
};
export default ReceiptsTable;
