import { IAccount } from "../../../../models/IAccount";
import TrAccount from "./TrAccount";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface AccountTableProps {
  companyId?: string;
  account: IAccount;
}

const AccountTable: React.FC<AccountTableProps> = ({ companyId, account }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер Л/С</th>
          <th>Адрес / Помещение</th>
          <th>Плательщик</th>
          <th>Баланс Л/С</th>
          <th>Площадь</th>
        </tr>
      </thead>
      <tbody>
        <TrAccount companyId={companyId} account={account} withoutHidden />
      </tbody>
    </table>
  );
};
export default AccountTable;
