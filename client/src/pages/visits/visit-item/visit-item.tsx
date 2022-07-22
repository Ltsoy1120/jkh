import Link from "next/link";
import { IVisit } from "../../../models/IVisit";
import styles from "./visit-item.module.scss";

interface VisitItemProps {
  visit: IVisit;
}

const VisitItem: React.FC<VisitItemProps> = ({ visit }) => {
  return (
    <div className={styles.tableitem}>
      <div className={styles.tperiod}>
        <Link href={`/visit/${visit.number}`}>
          <a>{visit.number}</a>
        </Link>
        <span className={styles.normal}>
          {visit.date} в {visit.time}
        </span>
      </div>
      <div className={styles.tdate}>
        <span className={styles.bold}>{visit.date}</span>
        <span className={styles.bold}>{visit.time}</span>
        <span
          className={
            visit.status === "Новое"
              ? styles.new
              : visit.status === "Выполнено"
              ? styles.done
              : styles.canceled
          }
        >
          {visit.status}
        </span>
      </div>
      <div className={styles.toffice}>
        <span className={styles.bold}>{visit.office}</span>
        <span className={styles.normal}>
          (г. Воронеж, ул. Кольцовская, д.40, офис 154)
        </span>
      </div>
      <div className={styles.ttopic}>
        <span className={styles.bold}>{visit.topic}</span>
      </div>
    </div>
  );
};
export default VisitItem;
