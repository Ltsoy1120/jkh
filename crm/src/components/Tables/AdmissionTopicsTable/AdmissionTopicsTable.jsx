import styles from "./AdmissionTopicsTable.module.scss";
import classes from "../table.module.scss";
import TrAdmissionTopicsTable from "./TrAdmissionTopicsTable/TrAdmissionTopicsTable";

export const AdmissionTopicsTable = () => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Тип приема</th>
          <th>Исполнители</th>
          <th> </th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <TrAdmissionTopicsTable
          typeText="Ремонт сантехники"
          performersOne="Иваньков А.Р."
          performersOneWork="(Инженер)"
          performersTwo="Пончиков Т.П."
          performersTwoWork="(Инженер)"
          contractors="ООО “Руки из плеч”"
        />
        <TrAdmissionTopicsTable
          typeText="Уборка"
          performersOne="Иваньков А.Р."
          performersOneWork="(Инженер)"
          performersTwo="Пончиков Т.П."
          performersTwoWork="(Инженер)"
        />
        <TrAdmissionTopicsTable
          typeText="Контроль"
          performersOne="Иваньков А.Р."
          performersOneWork="(Инженер)"
          performersTwo="Пончиков Т.П."
          performersTwoWork="(Инженер)"
        />
      </tbody>
    </table>
  );
};
