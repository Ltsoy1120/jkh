import styles from "./TaskTable.module.scss";
import classes from "../table.module.scss";
import TrTaskTable from "./TrTaskTable/TrTaskTable";
import Status from "../../Status/Status";
import { TaskIcon } from "../../TaskIcon/TaskIcon";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export const TaskTable = () => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Кем и когда создана</th>
          <th>Дедлайн</th>
          <th> Исполнитель</th>
          <th>Наблюдатель</th>
          <th>Тип/Название</th>
        </tr>
      </thead>
      <tbody>
        <TrTaskTable
          number="123456"
          date="27.08.21"
          time="в 12:09"
          status={<Status status="Новая" />}
          fullName="Зилипупкин А.В."
          profession="(Диспетчер)"
          executorOne="Гунькина Т.Б."
          executorOneProfession="(Инженер)"
          executorTwo="Росщепкин А.М."
          executorTwoProfession="(Инженер)"
          observer="Хрушкина П.П."
          observerProfession="(Инженер)"
          receptionTheme="Контроль"
          receptionName="Прокотролировать чтобы спилили ветки"
          more="Ещё"
          icon={<LocalFireDepartmentIcon />}
          priority="Высокий"
        />

        <TrTaskTable
          number="123456"
          date="27.08.21"
          time="в 12:09"
          status={<Status status="В работе" />}
          fullName="Зилипупкин А.В."
          profession="(Диспетчер)"
          executorOne="Гунькина Т.Б."
          executorOneProfession="(Инженер)"
          executorTwo="Росщепкин А.М."
          executorTwoProfession="(Инженер)"
          observer="Хрушкина П.П."
          observerProfession="(Инженер)"
          receptionTheme="Контроль"
          inboundTask="Задача по входящему"
          numberTask="№ 2 от 04.04.21 в 23:08"
          more="Ещё"
          deadlineStatus="Просрочена!!!"
          iconUsual={<TaskIcon />}
          usualText="Обычный"
        />

        <TrTaskTable
          number="123456"
          date="27.08.21"
          time="в 12:09"
          status={<Status status="Новая" />}
          fullName="Зилипупкин А.В."
          profession="(Диспетчер)"
          executorOne="Гунькина Т.Б."
          executorOneProfession="(Инженер)"
          executorTwo="Росщепкин А.М."
          executorTwoProfession="(Инженер)"
          observer="Хрушкина П.П."
          observerProfession="(Инженер)"
          receptionTheme="Задача по обращению"
          numberTask="№ 593 от 23.03.21 в 20:09"
          more="Ещё"
          icon={<LocalFireDepartmentIcon />}
          priority="Высокий"
        />

        <TrTaskTable
          number="123456"
          date="27.08.21"
          time="в 12:09"
          status={<Status status="Новая" />}
          fullName="Зилипупкин А.В."
          profession="(Диспетчер)"
          executorOne="Гунькина Т.Б."
          executorOneProfession="(Инженер)"
          executorTwo="Росщепкин А.М."
          executorTwoProfession="(Инженер)"
          observer="Хрушкина П.П."
          observerProfession="(Инженер)"
          receptionTheme="Жалоба на задау"
          numberTask="№ 1 от 23.03.21 в 20:09"
          more="Ещё"
          icon={<LocalFireDepartmentIcon />}
          priority="Высокий"
        />
      </tbody>
    </table>
  );
};
