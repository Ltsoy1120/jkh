import { IAppeal } from "../../models/IAppeal";
import AppealItem from "./appeal-item/appeal-item";
import styles from "./appeals-page.module.scss";

export interface AppealsProps {
  appeals: IAppeal[];
}

const AppealsPage: React.FC<AppealsProps> = ({ appeals }) => {
  return (
    <div className={styles.infoblock}>
      <div className={styles.table}>
        <div className={styles.tablehead}>
          <div className={styles.tnumber}>Номер</div>
          <div className={styles.tdate}>Дата</div>
          <div className={styles.ttype}>Тип обращения</div>
          <div className={styles.ttext}>Текст обращения</div>
          <div className={styles.tauthor}>Исполнитель</div>
          <div className={styles.tres}>Результат</div>
        </div>
        {appeals &&
          appeals.map(appeal => (
            <AppealItem key={appeal._id} appeal={appeal} />
          ))}
      </div>
    </div>
  );
};

export default AppealsPage;
