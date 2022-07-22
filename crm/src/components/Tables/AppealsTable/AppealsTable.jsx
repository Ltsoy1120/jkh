import styles from "./AppealsTable.module.scss";
import classes from "../table.module.scss";
import TrAppealsTable from "./TrAppealsTable/TrAppealsTable";
import Status from "../../Status/Status";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { AppealsIcon } from "../../AppealsIcon/AppealsIcon";
import StarIcon from "@mui/icons-material/Star";

export const AppealsTable = () => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Дата</th>
          <th>Отправитель</th>
          <th>Тип</th>
          <th>Кем создано</th>
          <th>Исполнитель</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <TrAppealsTable
          number="123456"
          received="Поступило"
          date="27.08.21"
          time="в 12:09"
          considerationPeriod="Срок рассмотрения"
          timeTerm="до 19.00"
          considered="Рассмотрено"
          minus="-"
          status={<Status status="На рассмотрении" />}
          fullName="Зилипупкин А.В."
          phone="+7 (900) 000-00-00"
          address="Путиловская 17, кв 60"
          personalAccount="Л/С 12345"
          complaint="Жалоба"
          subscriber="Абонентом"
          thirdPartyAppeal="Сторонее обращение"
          observer="Хрушкина П.П."
          observerProfession="(Инженер)"
          icon={<AppealsIcon />}
          priority="Средний"
          application="Заявка"
          numberApplication="№123"
        />

        <TrAppealsTable
          uniCode="&#8592;"
          number="123456"
          linkNumber="123456"
          received="Поступило"
          date="27.08.21"
          time="в 12:09"
          considerationPeriod="Срок рассмотрения"
          timeTerm="до 19.00"
          considered="Рассмотрено"
          minus="-"
          status={<Status status="Новая" />}
          fullName="Зилипупкин А.В."
          phone="+7 (900) 000-00-00"
          address="Путиловская 17, кв 60"
          personalAccount="Л/С 12345"
          complaint="Жалоба"
          dispatcherName="Длинноголовый П.В"
          dispatcherProfession="(Диспетчер)"
          internalCirculation="Внутреннее обращение"
          observer="Хрушкина П.П."
          observerProfession="(Инженер)"
          icon={<LocalFireDepartmentIcon />}
          priorityHigh="Высокий"
        />

        <TrAppealsTable
          number="123456"
          linkNumber="123456"
          received="Поступило"
          date="27.08.21"
          time="в 12:09"
          considerationPeriod="Срок рассмотрения"
          timeTerm="до 19.00"
          considered="Рассмотрено"
          minus="-"
          status={<Status status="Рассмотрено" />}
          fullName="Зилипупкин А.В."
          phone="+7 (900) 000-00-00"
          address="Путиловская 17, кв 60"
          personalAccount="Л/С 12345"
          complaint="Жалоба"
          subscriber="Абонентом"
          thirdPartyAppeal="Сторонее обращение"
          observer="Хрушкина П.П."
          observerProfession="(Инженер)"
          application="Задача"
          numberApplication="№123"
          starIcon={<StarIcon />}
        />
      </tbody>
    </table>
  );
};
