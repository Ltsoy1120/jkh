import styles from "./MagazineTable.module.scss";
import classes from "../table.module.scss";
import TrAppealsTable from "./TrMagazineTable/TrMagazineTable";
import Status from "../../Status/Status";
import { AppealsIcon } from "../../AppealsIcon/AppealsIcon";

export const MagazineTable = () => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Дата</th>
          <th>Длительность</th>
          <th>Дома</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        <TrAppealsTable
          number="3"
          received="Поступила"
          date="27.08.21"
          time="в 12:00"
          considerationPeriod="Устранена"
          timeTermDate="27.08.2021"
          timeTerm="в 18:00"
          duration="6 часов"
          address="г. Воронеж, ул. Путиловская д.17"
          description="Прорвало трубу во дворе 17 дома"
        />
        <TrAppealsTable
          number="2"
          received="Поступила"
          date="27.08.21"
          time="в 12:00"
          considerationPeriod="Устранена"
          timeTermDate="27.08.2021"
          timeTerm="в 18:00"
          duration="24 часа"
          addressTwo="г. Воронеж, ул. Генерала Перхоровичв д.11"
          description="Прорвало трубу в подвале"
        />

        <TrAppealsTable
          number="1"
          received="Поступила"
          date="27.08.21"
          time="в 12:00"
          minus="-"
          considerationPeriod="Устранена"
          duration="24 часа"
          addressTwo="Все дома в управлении"
          description="Обрыв кабеля"
        />
      </tbody>
    </table>
  );
};
