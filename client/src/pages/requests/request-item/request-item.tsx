import moment from "moment";
import Link from "next/link";
import React from "react";
import { IRequest } from "../../../models/IRequest";
import styles from "./request-item.module.scss";

interface RequestItemProps {
  request: IRequest;
}
const RequestItem: React.FC<RequestItemProps> = ({ request }) => {
  return (
    <div className={styles.tableitem}>
      <div className={styles.tnumber}>
        <span className={styles.number}>
          <Link href={`/request/${request.number}`}>
            <a>{request.number}</a>
          </Link>
        </span>
        <button
          className={
            request.status === "Новая"
              ? styles.new
              : request.status === "Выполнена"
              ? styles.done
              : styles.canceled
          }
        >
          {request.status}
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
        <span className={styles.createDateLabel}>Создана</span>
        <span style={{ marginBottom: "10px" }}>
          {moment(request.createDate).format("DD.MM.YYYY")} в{" "}
          {moment(request.createDate).format("HH.mm")}
        </span>
        <span className={styles.createDateLabel}>Срок исполнения</span>
        {request.workDate ? (
          <span>
            {moment(request.workDate).format("DD.MM.YYYY")} до{" "}
            {moment(request.workDate).format("HH.mm")}
          </span>
        ) : (
          <span>еще не назначен</span>
        )}
      </div>
      <div className={styles.ttext}>{request.text}</div>
      {request.perfomer ? (
        <div className={styles.tauthor}>
          <span className={styles.initials}>
            {request.perfomer.lastName} {request.perfomer.name}
          </span>
          <span className={styles.createDateLabel}>
            {request.perfomer.position}
          </span>
        </div>
      ) : (
        <div className={styles.tauthor}>
          <span className={styles.createDateLabel}>не назначен</span>
        </div>
      )}
      {request.doneDate ? (
        <div className={styles.tresult}>
          <span className={styles.createDateLabel}>Завершена</span>
          <span className={styles.initials}>
            {moment(request.doneDate).format("DD.MM.YYYY")} в{" "}
            {moment(request.doneDate).format("HH.mm")}
          </span>
          {/* <span className={styles.createDateLabel}>{request.result}</span> */}
        </div>
      ) : (
        <div className={styles.tresult}>
          <span className={styles.createDateLabel}>пока нет результата</span>
        </div>
      )}
    </div>
  );
};

export default RequestItem;
