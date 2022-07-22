import moment from "moment";
import Link from "next/link";
import { apiURL } from "../../../config";
import { IApplication } from "../../../models/IApplication";
import { getShortFullName } from "../../../utils/functions";
import Button from "../../Buttons/Button";
import PriorityButton from "../../Buttons/PriorityButton";
import StatusButton from "../../Buttons/StatusButton";
import DocsInfo from "./components/DocsInfo";
import InfoCard from "./components/InfoCard";
import styles from "./style.module.scss";

interface ApplicationCardProps {
  application: IApplication;
}
const ApplicationCard: React.FC<ApplicationCardProps> = ({ application }) => {
  const {
    status,
    priority,
    type,
    text,
    address,
    numberOfEntrance,
    floor,
    numberOfApartment,
    phone,
    contractor,
    performer,
    result,
    resultComment,
    resultFiles,
    reasonForCancel,
    createDate,
  } = application;
  console.log("application", application);
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
          <InfoCard label="Тип" children={type} />
          <InfoCard
            label="Статус"
            children={<StatusButton status={status} />}
          />
          <InfoCard
            label="Приоритет"
            children={<PriorityButton priority={priority} />}
          />
        </div>
      </div>
      <div className={styles.wrapBlock}>
        <InfoCard
          label="Текст заявки"
          children={text}
          width={550}
          mb={40}
          bg={"#f9f9fa"}
          p={10}
        />
        <div className={styles.row}>
          <InfoCard label="Адрес" children={address} />
          <InfoCard label="Подъезд" children={numberOfEntrance} />
          <InfoCard label="Этаж" children={floor} />
          <InfoCard label="Квартира" children={numberOfApartment} />
        </div>
        <div className={styles.row}>
          <InfoCard
            label="ФИО или номер лицевого счета"
            children={"Петрова Ю.Б. (Л/С 12345)"}
          />
          <div style={{ color: "#E82F45", fontSize: "12px", width: 204 }}>
            Внимание!
            <br /> По данному лицевому счету имеется задолженность 100 руб
          </div>
        </div>
        <InfoCard label="Контактный телефон" children={phone} mb={40} />
        <InfoCard
          label="Исполнитель"
          children={
            performer && !contractor.contractorName ? (
              getShortFullName(performer)
            ) : contractor?.contractorName && performer ? (
              <>
                <span>Подрядчик: {contractor.contractorName}</span>
                <br />
                <span>Ответственный: {getShortFullName(performer)}</span>
              </>
            ) : (
              "Не выбран"
            )
          }
          mb={40}
        />
        {status === "Выполнена" && (
          <InfoCard
            label="Результат работы"
            children={
              <>
                <span>Результат: {result}</span>
                <br />
                <span>Комментарий: {resultComment}</span>
                <br />
                <div>Фотоотчет: {<DocsInfo files={resultFiles} />}</div>
              </>
            }
            mb={40}
          />
        )}
        {status !== "Отменена" ? (
          <Link href={`/control/${application._id}/editApplication`}>
            <a>
              <Button bg="green" width={200}>
                Редактировать
              </Button>
            </a>
          </Link>
        ) : (
          <InfoCard
            label="Причина отмены заявки"
            children={reasonForCancel}
            mb={40}
          />
        )}
      </div>
      <div className={styles.wrapBlock}>
        <div className={`${styles.content}`}>
          <p>Параллельно</p>
          <p style={{ marginBottom: 0 }}>Созданные заявки</p>
          <div style={{ marginTop: 15 }}>
            <a>1234</a>
            <div
              className={`${styles.contentText}`}
              style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}
            >
              {" "}
              от 20.02.2021 в 12:33{" "}
            </div>
            {/* <StyledButtonProgress>В работе</StyledButtonProgress> */}
          </div>
          <div style={{ marginTop: 15 }}>
            <a>1234</a>
            <div
              className={`${styles.contentText}`}
              style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}
            >
              {" "}
              от 20.02.2021 в 12:33{" "}
            </div>
            {/* <StyledButtonProgress>В работе</StyledButtonProgress> */}
          </div>
          <div style={{ marginTop: 15 }}>
            <a>1234</a>
            <div
              className={`${styles.contentText}`}
              style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}
            >
              {" "}
              от 20.02.2021 в 12:33{" "}
            </div>
            {/* <StyledButtonProgress>В работе</StyledButtonProgress> */}
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="/">
              <a style={{ fontSize: 12, color: "#1EA133" }}>Смотреть все</a>
            </Link>
          </div>

          <div style={{ marginTop: 30 }}>
            <Link href="/">
              <a style={{ textDecoration: "none", fontWeight: "bold" }}>
                Аварии
              </a>
            </Link>
          </div>
          <div style={{ marginTop: 15 }}>
            <a style={{ fontWeight: "bold", fontSize: 12 }}>Ремонт теплосети</a>
            <div style={{ fontWeight: 200, marginTop: 5, fontSize: 12 }}>
              с 20.02.2021 по 29.02.2021
            </div>
          </div>
          <div style={{ marginTop: 15 }}>
            <a style={{ fontWeight: "bold", fontSize: 12 }}>Ремонт теплосети</a>
            <div style={{ fontWeight: 200, marginTop: 5, fontSize: 12 }}>
              с 20.02.2021 по 29.02.2021
            </div>
          </div>
          <div style={{ marginTop: 15 }}>
            <a style={{ fontWeight: "bold", fontSize: 12 }}>Ремонт теплосети</a>
            <div style={{ fontWeight: 200, marginTop: 5, fontSize: 12 }}>
              с 20.02.2021 по 29.02.2021
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="/">
              <a style={{ fontSize: 12, color: "#1EA133" }}>Смотреть все</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicationCard;
