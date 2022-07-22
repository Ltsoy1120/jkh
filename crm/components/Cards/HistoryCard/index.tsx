import { IAccountLog } from "../../../models/IAccount";
import styles from "./style.module.scss";

interface HistoryCardProps {
  accountLog: IAccountLog;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ accountLog }) => {
  const { createDate, createTime, message, author } = accountLog;
  return (
    <div className={styles.wrapTr}>
      <span>
        {createDate} в {createTime}
      </span>
      <span>{message}</span>
      <span>{author}</span>
    </div>
  );
};
export default HistoryCard;
