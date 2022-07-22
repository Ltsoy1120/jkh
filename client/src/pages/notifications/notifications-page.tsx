import { INotification } from "../../models/INotification";
import NotificationsFilter from "./notifications-filter";
import NotificationsItem from "./notifications-item";
import styles from "./notifications-page.module.scss";

export interface NotificationsProps {
  notifications: INotification[];
}
const NotificationsPage: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <div className={styles.content}>
      <div className={styles.titleblock}>
        <h1>Лента уведомлений</h1>
        <span className={styles.breadcrumbs}>
          Уведомления / Лента уведомлений
        </span>
      </div>
      <NotificationsFilter />
      <div className={styles.infoblock}>
        <div className={styles.table}>
          <div className={styles.tablehead}>
            <div className={styles.tnumber}>Номер / Дата</div>
            <div className={styles.ttheme}>Тема</div>
            <div className={styles.ttext}>Сообщение</div>
          </div>
          <div className={styles.tableinfo}>
            {notifications &&
              notifications.map(notification => (
                <NotificationsItem
                  key={notification._id}
                  notification={notification}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
