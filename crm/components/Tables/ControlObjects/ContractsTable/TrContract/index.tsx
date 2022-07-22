import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import HiddenBlock from "../../../../HiddenBlock";
import {
  deleteContract,
  getContractsByCompany,
} from "../../../../../store/actions/controlObjectActions";
import { IContract } from "../../../../../models/IContract";
import { getPeriodInMonths } from "../../../../../utils/functions";
import styles from "./style.module.scss";

interface TrContractProps {
  companyId: string;
  contract: IContract;
  href: string;
}

const TrContract: React.FC<TrContractProps> = ({
  companyId,
  contract,
  href,
}) => {
  const { number, status, name, startDate, endDate, controlObjects } = contract;
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?.role === "leader";
  const dispatch = useAppDispatch();

  const deleteContractHandler = async () => {
    await deleteContract(contract._id, companyId);
    await dispatch(getContractsByCompany(companyId));
  };

  return (
    <tr className={styles.wrapTr}>
      <td>{number}</td>
      <td>{name}</td>
      <td>{status}</td>
      <td className={styles.column}>
        с {moment(new Date(startDate)).format("DD.MM.YYYY")}
        <span>{getPeriodInMonths(startDate, endDate)} </span>
      </td>
      <td>{moment(new Date(endDate)).format("DD.MM.YYYY")}</td>
      <td className={styles.column}>
        {controlObjects.map((controlObject, i) => (
          <span key={i}>{controlObject}</span>
        ))}
      </td>
      <td style={{ width: 0 }}>
        {(isAdmin || isLeader) && (
          <HiddenBlock
            deleteHandler={deleteContractHandler}
            href={href}
            id={number}
            canDelete={true}
            canEdit={true}
          />
        )}
      </td>
    </tr>
  );
};
export default TrContract;
