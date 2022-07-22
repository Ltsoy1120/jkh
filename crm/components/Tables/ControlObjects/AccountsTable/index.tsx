import { IAccount } from "../../../../models/IAccount";
import TrAccount from "./TrAccount";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface AccountsTableProps {
  companyId?: string;
  accounts: IAccount[];
}

const AccountsTable: React.FC<AccountsTableProps> = ({
  companyId,
  accounts: accounts,
}) => {
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
        {accounts &&
          accounts.map((account) => (
            <TrAccount
              companyId={companyId}
              key={account._id}
              account={account}
              editHhref={`/controlObjects/accounts/${account._id}/editAccount`}
              closeHref={`/controlObjects/accounts/${account._id}/closeAccount`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default AccountsTable;
