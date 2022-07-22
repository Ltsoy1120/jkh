import { IAccount } from "../../../../../models/IAccount";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import HiddenBlock from "../../../../HiddenBlock";
import {
  deleteAccount,
  getAccountsByCompany,
} from "../../../../../store/actions/controlObjectActions";
import styles from "./style.module.scss";
import { getFullName } from "../../../../../utils/functions";
import Link from "next/link";

interface TrAccountProps {
  companyId?: string;
  account: IAccount;
  editHhref?: string;
  closeHref?: string;
  withoutHidden?: boolean;
}

const TrAccount: React.FC<TrAccountProps> = ({
  companyId,
  account,
  editHhref,
  closeHref,
  withoutHidden,
}) => {
  const {
    _id,
    number,
    address,
    numberOfApartment,
    accountBalance,
    totalArea,
    livingArea,
    payer,
  } = account;
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?.role === "leader";
  const dispatch = useAppDispatch();

  const deleteAccountHandler = async () => {
    await deleteAccount(_id, companyId);
    await dispatch(getAccountsByCompany(companyId));
  };

  return (
    <tr className={styles.wrapTr}>
      <td>
        <Link href={`/controlObjects/accounts/${account._id}/editAccount`}>
          <a>{number}</a>
        </Link>
      </td>
      <td className={styles.address}>
        <span>{address}</span>
        <span>Помещение: {numberOfApartment}</span>
      </td>
      <td>{payer ? getFullName(payer) : "нет данных"}</td>
      <td>{accountBalance ? accountBalance : "нет данных"}</td>
      <td className={styles.area}>
        <span>
          Общая площадь: <b>{totalArea}м²</b>
        </span>
        <span>
          Жилая площадь: <b>{livingArea}м²</b>
        </span>
      </td>
      <td style={{ width: 0 }}>
        {(isAdmin || isLeader) && !withoutHidden && (
          <HiddenBlock
            deleteHandler={deleteAccountHandler}
            href={editHhref}
            closeHref={closeHref}
            id={account._id}
            canClose={true}
            canDelete={true}
            canEdit={true}
          />
        )}
      </td>
    </tr>
  );
};
export default TrAccount;
