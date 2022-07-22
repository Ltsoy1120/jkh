import styles from "./ControlApplicationTypesTable.module.scss";
import classes from "../table.module.scss";
import TrControlApplicationTypesTable from "./TrControlApplicationTypesTable/TrControlApplicationTypesTable";

export const ControlApplicationTypesTable = () => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Тип заявки</th>
          <th>Исполнители </th>
          <th>Подрядчики</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <TrControlApplicationTypesTable
          typeText="Ремонт сантехники"
          performersOne="Иваньков А.Р."
          performersOneWork="(Инженер)"
          performersTwo="Пончиков Т.П."
          performersTwoWork="(Инженер)"
          contractors="ООО “Руки из плеч”"
        />
      </tbody>
    </table>
  );
};
