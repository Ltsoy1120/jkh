import Link from "next/link";
import moment from "moment";
import { INotification } from "../../../models/INotification";
import styles from "./notifications-item.module.scss";

interface NotificationsItemProps {
  notification: INotification;
}

const NotificationsItem: React.FC<NotificationsItemProps> = ({
  notification
}) => {
  return (
    <div className={styles.tableitem}>
      <div className={styles.tnumber}>
        <span className={styles.number}>
          <Link href={`/notification/${notification.number}`}>
            <a>{notification.number}</a>
          </Link>
        </span>
        <span style={{ marginBottom: "10px" }}>
          {moment(notification.createDate).format("DD.MM.YYYY")} в{" "}
          {moment(notification.createDate).format("HH.mm")}
        </span>
      </div>
      <div className={styles.ttheme}>
        <span>{notification.theme}</span>
      </div>
      <div className={styles.ttext}>
        <span>{notification.text}</span>
      </div>
    </div>
  );
};
export default NotificationsItem;
