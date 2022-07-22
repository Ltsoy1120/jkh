import moment from "moment";
import { getShortFullName } from "../../../../../utils/functions";
import PriorityButton from "../../../../Buttons/PriorityButton";
import StatusButton from "../../../../Buttons/StatusButton";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import styles from "./style.module.scss";
import { ITask } from "../../../../../models/ITask";

interface TrTaskProps {
  companyId?: string;
  task: ITask;
  href: string;
}

const TrTask: React.FC<TrTaskProps> = ({ companyId, task, href }) => {
  const {
    number,
    taskType,
    taskName,
    status,
    priority,
    createDate,
    deadline,
    newDeadline,
    dispatcher,
    performers,
    observers,
  } = task;
  console.log("task", task);
  return (
    <tr className={styles.wrapTr}>
      <td>
        <div className={styles.td}>
          <Link href={href}>
            <a>{number}</a>
          </Link>
          <StatusButton status={status} />
          <PriorityButton priority={priority} />
        </div>
      </td>
      <td>
        <p className={styles.bold}>
          {moment(new Date(createDate)).format("DD.MM.YYYY")} в{" "}
          {moment(new Date(createDate)).format("hh.mm")}
        </p>
        {dispatcher ? (
          <p>
            {getShortFullName(dispatcher)} ({dispatcher.position})
          </p>
        ) : (
          <p>-</p>
        )}
      </td>
      <td>
        {newDeadline ? (
          <p className={styles.bold}>
            {moment(new Date(newDeadline)).format("DD.MM.YYYY")} в{" "}
            {moment(new Date(newDeadline)).format("hh.mm")}
          </p>
        ) : (
          <p className={styles.bold}>
            {moment(new Date(deadline)).format("DD.MM.YYYY")} в{" "}
            {moment(new Date(deadline)).format("hh.mm")}
          </p>
        )}
      </td>
      <td>
        {performers ? (
          performers.map((performer) => (
            <div key={performer._id}>
              <p className={styles.bold}>{getShortFullName(performer)}</p>
              <p>{performer.position}</p>
            </div>
          ))
        ) : (
          <span className={styles.bold}>нет</span>
        )}
      </td>
      <td>
        {observers ? (
          observers.map((observer) => (
            <div key={observer._id}>
              <p className={styles.bold}>{getShortFullName(observer)}</p>
              <p>{observer.position}</p>
            </div>
          ))
        ) : (
          <span className={styles.bold}>нет</span>
        )}
      </td>
      <td className={styles.td}>
        <p className={styles.bold}>{taskType}</p>
        <p className={styles.bold}>{taskName}</p>
      </td>
    </tr>
  );
};
export default TrTask;
