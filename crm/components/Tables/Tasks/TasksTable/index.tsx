import { ITask } from "../../../../models/ITask";
import TrTask from "./TrTask";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface TasksTableProps {
  companyId?: string;
  tasks: ITask[];
}

const TasksTable: React.FC<TasksTableProps> = ({ companyId, tasks }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Кем и когда создана</th>
          <th>Дедлайн</th>
          <th>Исполнитель</th>
          <th>Наблюдатель</th>
          <th>Тип / Название</th>
        </tr>
      </thead>
      <tbody>
        {tasks &&
          tasks.map((task) => (
            <TrTask
              companyId={companyId}
              key={task._id}
              task={task}
              href={`/tasks/${task._id}`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default TasksTable;
