import VisitItem from "./visit-item/visit-item";
import { IVisit } from "../../models/IVisit";
import styles from "./visits-page.module.scss";

export interface VisitsProps {
  visits: IVisit[];
}

const VisitsPage: React.FC<VisitsProps> = ({ visits }) => {
  return (
    <div className={styles.infoblock}>
      <div className={styles.table}>
        <div className={styles.tablehead}>
          <div className={styles.tperiod}>
            Номер / <br /> Дата создания
          </div>
          <div className={styles.tdate}>
            Дата/ <br />
            Статус приема
          </div>
          <div className={styles.toffice}>Офис приема</div>
          <div className={styles.ttopic}>Тема приема</div>
        </div>
        {visits &&
          visits.map(visit => <VisitItem key={visit._id} visit={visit} />)}
      </div>
    </div>
  );
};

export default VisitsPage;
