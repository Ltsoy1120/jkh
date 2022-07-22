import classes from "../../table.module.scss";
import styles from "./style.module.scss";
import { ISubject } from "../../../../models/ISubject";
import TrSubject from "./TrSubject";

interface SubjectsTableProps {
  subjects: ISubject[];
}

const PassportOfficeTable: React.FC<SubjectsTableProps> = ({ subjects }) => {
  console.log("subjects", subjects);
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>ФИО / Название</th>
          <th>Собственность</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {subjects &&
          subjects.map((subject) => (
            <TrSubject key={subject._id} subject={subject} />
          ))}
      </tbody>
    </table>
  );
};
export default PassportOfficeTable;
