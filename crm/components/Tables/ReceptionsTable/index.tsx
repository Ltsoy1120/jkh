import TrReception from "./TrReception";
import { IReception } from "../../../models/IReception";
import classes from "../table.module.scss";
import styles from "./style.module.scss";

interface ReceptionOfCitizensTableProps {
  receptions: IReception[];
}

const ReceptionOfCitizensTable: React.FC<ReceptionOfCitizensTableProps> = ({
  receptions,
}) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>
            Номер /<br />
            Дата создания
          </th>
          <th>
            Дата /<br />
            Статус приема
          </th>
          <th>Офис приема</th>
          <th>
            Ответственный
            <br /> за прием
          </th>
          <th>Житель</th>
          <th>Тема приема</th>
        </tr>
      </thead>
      <tbody>
        {receptions &&
          receptions.map((reception) => (
            <TrReception key={reception._id} reception={reception} />
          ))}
      </tbody>
    </table>
  );
};
export default ReceptionOfCitizensTable;
