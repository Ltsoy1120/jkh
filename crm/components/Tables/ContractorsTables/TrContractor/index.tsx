import moment from "moment";
import { useRouter } from "next/router";
import { IContractor } from "../../../../models/IContractor";
import { addContractor } from "../../../../store/actions/companyActions";
import {
  deleteContractor,
  getContractorsByCompany,
} from "../../../../store/actions/contractorActions";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import HiddenBlock from "../../../HiddenBlock";
import ToggleSwitch from "../../../ToggleSwitch";
import styles from "./style.module.scss";

export interface TrContractorProps {
  companyId: string;
  contractor: IContractor;
  href: string;
}
const TrContractor: React.FC<TrContractorProps> = ({
  companyId,
  contractor,
  href,
}) => {
  const { pathname } = useRouter();
  const { contractorName, createDate, head, phones, isActive } = contractor;
  const { _id, lastName, name, email, position } = head;
  const userData = useAppSelector((state) => state.users.userData);
  const isHead =
    userData?.role === "head" && contractor?.head?._id === userData?._id;
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?.role === "leader";
  const dispatch = useAppDispatch();

  const deleteContractorHandler = async () => {
    await deleteContractor(companyId, contractor._id);
    await dispatch(getContractorsByCompany(companyId));
  };

  const addContractorHandler = async () => {
    await dispatch(addContractor(companyId, contractor._id));
  };

  return (
    <tr className={`${styles.wrapTr} ${!isActive ? styles.inactive : ""}`}>
      <td>
        <span>{contractorName}</span>
        {moment(createDate).format("DD.MM.YYYY")}
      </td>
      <td>
        <span>{`${lastName} ${name}`}</span>
        {_id}
      </td>
      <td>{position}</td>
      <td>
        {phones.map((phone) => (
          <span key={phone}>{phone}</span>
        ))}
        <br />
        <p>Тел.руководителя:</p>
        {head.phones.map((phone) => (
          <span key={phone}>{phone}</span>
        ))}
      </td>
      <td>{email}</td>
      <td className={styles.wrapSwitch}>
        <ToggleSwitch checked={isActive} />
        {isActive ? <span>Активен</span> : <span>Неактивен</span>}
      </td>
      <td style={{ width: 0 }}>
        {(isAdmin || isHead || isLeader) && (
          <HiddenBlock
            deleteHandler={deleteContractorHandler}
            addHandler={addContractorHandler}
            href={href}
            id={contractor._id}
            canAdd={(isAdmin || isLeader) && pathname === "/contractors/all"}
            canDelete={isAdmin}
            canEdit={isAdmin || isHead}
          />
        )}
      </td>
    </tr>
  );
};
export default TrContractor;
