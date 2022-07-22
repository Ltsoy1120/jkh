import { getShortFullName } from "../../../../../utils/functions";
import Link from "next/link";
import { ITaskType } from "../../../../../models/ITask";
import HiddenBlock from "../../../../HiddenBlock";
import ToggleSwitch from "../../../../ToggleSwitch";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import styles from "./style.module.scss";
import { disableTaskType } from "../../../../../store/actions/taskActions";

interface TrAppealProps {
  taskType: ITaskType;
  href: string;
}

const TrTaskType: React.FC<TrAppealProps> = ({ taskType, href }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const { _id, name, isActive, performers } = taskType;

  const disableTaskTypeHandler = async () => {
    await disableTaskType(companyId, _id);
  };

  return (
    <tr className={!isActive ? styles.inactive : styles.wrapTr}>
      <td>
        {isActive ? (
          <Link href={`/tasks/settings/${_id}/editTaskType`}>
            <a>{name}</a>
          </Link>
        ) : (
          <span>{name}</span>
        )}
      </td>
      <td>
        {performers.map((performer) => (
          <p key={performer._id} className={styles.bold}>
            {getShortFullName(performer)}
            <span className={styles.grayText}> ({performer.position})</span>
          </p>
        ))}
      </td>
      <td className={styles.row}>
        <ToggleSwitch checked={isActive} />
        {isActive ? <span>Активна</span> : <span>Отключена</span>}
      </td>
      {isActive && (
        <td style={{ width: 0 }}>
          <HiddenBlock
            disableHandler={disableTaskTypeHandler}
            href={href}
            id={taskType._id}
            canDisable={true}
            canEdit={true}
          />
        </td>
      )}
    </tr>
  );
};
export default TrTaskType;
