import moment from "moment";
import HiddenBlock from "../../../HiddenBlock";
import ToggleSwitch from "../../../ToggleSwitch";
import { IUser } from "../../../../models/IUser";
import { deleteEmployee } from "../../../../store/actions/userActions";
import { useAppSelector } from "../../../../store/hooks";
import styles from "./TrEmployee.module.scss";
import { useRouter } from "next/router";

export interface EmployeeProps {
  employee: IUser;
}

const TrEmployee: React.FC<EmployeeProps> = ({ employee }) => {
  const {
    _id,
    registerDate,
    lastName,
    name,
    position,
    phones,
    email,
    isActive,
  } = employee;
  const companyId = useRouter().query.companyId?.toString();
  const contractorId = useRouter().query.contractorId?.toString();
  const employeeId = employee._id;
  const userData = useAppSelector((state) => state.users.userData);
  const isLeader = userData?.role === "leader";
  const isAdmin = userData?.role === "admin";
  const deleteEmployeeHandler = async () => {
    await deleteEmployee(companyId, _id);
  };

  return (
    <tr className={`${styles.wrapTr} ${!isActive ? styles.inactive : ""}`}>
      <td>{moment(registerDate).format("DD.MM.YYYY")}</td>
      <td>
        <span>{`${lastName} ${name}`} /</span>
        <br />
        {_id}
      </td>
      <td>{position}</td>
      <td>{phones}</td>
      <td>{email}</td>
      <td>
        <div className={styles.wrapSwitch}>
          <ToggleSwitch checked={isActive} />
          {isActive ? <span>Активен</span> : <span>Неактивен</span>}
        </div>
      </td>
      <td style={{ width: 0 }}>
        {(isAdmin || isLeader) && (
          <HiddenBlock
            deleteHandler={deleteEmployeeHandler}
            href={
              !contractorId
                ? `/company/${companyId}/employees/editEmployee/${employee._id}`
                : `/company/${companyId}/contractors/${contractorId}/employees/${employeeId}/editEmployee`
            }
            id={_id}
            canDelete={true}
            canEdit={true}
            canCopyRights={true}
          />
        )}
      </td>
    </tr>
  );
};
export default TrEmployee;
