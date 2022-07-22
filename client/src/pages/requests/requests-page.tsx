import { IRequest } from "../../models/IRequest";
import RequestItem from "./request-item";
import styles from "./requests-page.module.scss";

export interface RequestsProps {
  requests: IRequest[];
}
const RequestsPage: React.FC<RequestsProps> = ({ requests }) => {
  return (
    <div className={styles.infoblock}>
      <div className={styles.table}>
        <div className={styles.tablehead}>
          <div className={styles.tnumber}>Номер</div>
          <div className={styles.tdate}>Дата</div>
          <div className={styles.ttext}>Текст заявки</div>
          <div className={styles.tauthor}>Исполнитель</div>
          <div className={styles.tres}>Результат</div>
        </div>
        {requests &&
          requests.map(request => (
            <RequestItem key={request._id} request={request} />
          ))}
      </div>
    </div>
  );
};

export default RequestsPage;
