import TrTaskType from "./TrTaskType";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";
import { ITaskType } from "../../../../models/ITask";

interface TaskTypesTableProps {
  taskTypes: ITaskType[];
}

const TaskTypesTable: React.FC<TaskTypesTableProps> = ({ taskTypes }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Тип задачи</th>
          <th>Исполнители</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {taskTypes &&
          taskTypes.map((taskType) => (
            <TrTaskType
              key={taskType._id}
              taskType={taskType}
              href={`/tasks/${taskType._id}/editTaskType`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default TaskTypesTable;
