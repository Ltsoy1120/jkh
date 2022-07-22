import moment from "moment";
import Link from "next/link";
import { ITask } from "../../../models/ITask";
import { getShortFullName } from "../../../utils/functions";
import Button from "../../Buttons/Button";
import PriorityButton from "../../Buttons/PriorityButton";
import StatusButton from "../../Buttons/StatusButton";
import DocsInfo from "./components/DocsInfo";
import InfoCard from "./components/InfoCard";
import styles from "./style.module.scss";

interface TaskCardProps {
  task: ITask;
}
const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const {
    createDate,
    basisForTask,
    numberOfBasis,
    taskName,
    priority,
    taskType,
    deadline,
    newDeadline,
    remindOfDeadline,
    remindWho,
    remindWhen,
    remindDays,
    address,
    numberOfApartment,
    text,
    files,
    dispatcher,
    performers,
    observers,
    status,
    resultComment,
    resultFiles,
    reasonForCancel,
  } = task;
  console.log("deadline", deadline);
  console.log("newDeadline", newDeadline);
  return (
    <div className={styles.wrapContent}>
      <div className={styles.wrapBlock}>
        <div className={styles.content}>
          <InfoCard
            label="Создано"
            children={`${moment(new Date(createDate)).format(
              "DD.MM.YYYY"
            )} в ${moment(new Date(createDate)).format("hh.mm")}`}
          />
          <InfoCard
            label="На основании"
            children={`${basisForTask} № ${numberOfBasis}`}
          />
          <InfoCard label="Тип" children={taskType} />
          <InfoCard
            label="Статус"
            children={<StatusButton status={status} />}
          />
          <InfoCard
            label="Приоритет"
            children={<PriorityButton priority={priority} />}
          />
          {newDeadline && (
            <InfoCard
              label="Дедлайн отложен"
              children={`${moment(new Date(newDeadline)).format(
                "DD.MM.YYYY"
              )} в ${moment(new Date(newDeadline)).format("hh.mm")}`}
            />
          )}
          {deadline && (
            <InfoCard
              label="Дедлайн"
              children={`${moment(new Date(deadline)).format(
                "DD.MM.YYYY"
              )} в ${moment(new Date(deadline)).format("hh.mm")}`}
            />
          )}
        </div>
      </div>
      <div className={styles.wrapBlock}>
        <InfoCard
          label="Автор"
          children={getShortFullName(dispatcher)}
          mb={40}
        />
        {remindOfDeadline ? (
          <InfoCard
            label="Напоминание о дедлайне"
            children={
              <>
                <span>{remindWho}</span>
                <br />
                {remindWhen && (
                  <div>{`${moment(new Date(remindWhen)).format(
                    "DD.MM.YYYY"
                  )} в ${moment(new Date(remindWhen)).format("hh.mm")}`}</div>
                )}
                {remindDays && <span>за {remindDays} до дедлайна</span>}
              </>
            }
            mb={40}
          />
        ) : (
          <InfoCard
            label="Напоминание о дедлайне"
            children={"не напоминать"}
            mb={40}
          />
        )}
        <InfoCard label="Название задачи" children={taskName} mb={40} />
        <InfoCard
          label="Адрес"
          children={`${address}, кв.${numberOfApartment}`}
          mb={40}
        />
        <InfoCard
          label="Текст заявки"
          children={text}
          width={550}
          mb={40}
          bg={"#f9f9fa"}
          p={10}
        />
        <InfoCard
          label="Добавленные файлы"
          children={<DocsInfo files={files} />}
          mb={40}
        />
        <div className={styles.row}>
          <InfoCard
            label="Исполнители"
            children={
              performers
                ? performers.map((performer) => (
                    <span key={performer._id}>
                      {getShortFullName(performer)} ({performer.position})
                    </span>
                  ))
                : "Не выбраны"
            }
          />
          <InfoCard
            label="Наблюдатели"
            children={
              observers
                ? observers.map((observer) => (
                    <span key={observer._id}>
                      {getShortFullName(observer)} ({observer.position})
                    </span>
                  ))
                : "Не выбраны"
            }
          />
        </div>
        <InfoCard
          label="Результат работы"
          children={
            status === "Выполнена" ? (
              <>
                <span>Результат: {resultComment}</span>
                <br />
                <div>Фотоотчет: {<DocsInfo files={resultFiles} />}</div>
              </>
            ) : (
              "Нет"
            )
          }
          mb={40}
        />
        {status !== "Отменена" ? (
          <Link href={`/tasks/${task._id}/editTask`}>
            <a>
              <Button bg="green" width={200}>
                Редактировать
              </Button>
            </a>
          </Link>
        ) : (
          <InfoCard
            label="Причина отмены задачи"
            children={reasonForCancel}
            mb={40}
          />
        )}
      </div>
    </div>
  );
};
export default TaskCard;
