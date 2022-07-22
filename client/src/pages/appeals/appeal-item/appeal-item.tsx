import Link from "next/link";
import moment from "moment";
import { IAppeal } from "../../../models/IAppeal";
import styles from "./appeal-item.module.scss";

interface AppealItemProps {
  appeal: IAppeal;
}

const AppealItem: React.FC<AppealItemProps> = ({ appeal }) => {
  return (
    <div className={styles.tableitem}>
      <div className={styles.tnumber}>
        <span className={styles.number}>
          <Link href={`/appeal/${appeal.number}`}>
            <a>{appeal.number}</a>
          </Link>
        </span>
        <button
          className={
            appeal.status === "Новое"
              ? styles.new
              : appeal.status === "Выполнено"
              ? styles.done
              : styles.canceled
          }
        >
          {appeal.status}
        </button>
        <div className={styles.rating}>
          <div className={styles.fullstar}></div>
          <div className={styles.fullstar}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
      </div>
      <div className={styles.tdate}>
        <span className={styles.createDateLabel}>Создано</span>
        <span style={{ marginBottom: "10px" }}>
          {moment(appeal.createDate).format("DD.MM.YYYY")} в{" "}
          {moment(appeal.createDate).format("HH.mm")}
        </span>
        <span className={styles.createDateLabel}>Срок исполнения</span>
        {appeal.workDate ? (
          <span>
            {moment(appeal.workDate).format("DD.MM.YYYY")} до{" "}
            {moment(appeal.workDate).format("HH.mm")}
          </span>
        ) : (
          <span>еще не назначен</span>
        )}
      </div>
      <div className={styles.ttype}>
        <span>{appeal.type}</span>
      </div>
      <div className={styles.ttext}>{appeal.text}</div>
      {appeal.perfomer ? (
        <div className={styles.tauthor}>
          <span className={styles.initials}>
            {appeal.perfomer.lastName} {appeal.perfomer.name}
          </span>
          <span className={styles.createDateLabel}>
            {appeal.perfomer.position}
          </span>
        </div>
      ) : (
        <div className={styles.tauthor}>
          <span className={styles.createDateLabel}>не назначен</span>
        </div>
      )}
      {appeal.doneDate ? (
        <div className={styles.tresult}>
          <span className={styles.createDateLabel}>Завершена</span>
          <span className={styles.initials}>
            {moment(appeal.doneDate).format("DD.MM.YYYY")} в{" "}
            {moment(appeal.doneDate).format("HH.mm")}
          </span>
          {/* <span className={styles.createDateLabel}>{appeal.result}</span> */}
        </div>
      ) : (
        <div className={styles.tresult}>
          <span className={styles.createDateLabel}>пока нет результата</span>
        </div>
      )}
    </div>
  );
};
export default AppealItem;
