import moment from "moment";
import Link from "next/link";
import { IReception } from "../../../models/IReception";
import { getShortFullName } from "../../../utils/functions";
import Button from "../../Buttons/Button";
import StatusButton from "../../Buttons/StatusButton";
import DocsInfo from "./components/DocsInfo";
import InfoCard from "./components/InfoCard";
import styles from "./style.module.scss";

interface ReceptionCardProps {
  reception: IReception;
}
const ReceptionCard: React.FC<ReceptionCardProps> = ({ reception }) => {
  const {
    status,
    date,
    time,
    office,
    topic,
    text,
    visiterName,
    visiterPhone,
    address,
    numberOfApartment,
    account,
    responsiblePerson,
    files,
    resultComment,
    resultFiles,
    reasonForCancel,
    createDate,
  } = reception;
  console.log("office", office);
  console.log("account", account);
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
          <InfoCard label="Дата приема" children={`${date} в ${time}`} />
          <InfoCard
            label="Статус"
            children={<StatusButton status={status} />}
          />
        </div>
      </div>
      <div className={styles.wrapBlock}>
        <InfoCard
          label="Информация об офисе компании"
          children={office.name}
          mb={40}
        />
        <InfoCard label="Тема приема" children={topic} mb={40} />
        <InfoCard
          label="Комментарий"
          children={text}
          width={550}
          mb={40}
          bg={"#f9f9fa"}
          p={10}
        />
        <DocsInfo files={files} />
        <InfoCard label="ФИО посетителя" children={visiterName} mb={40} />
        <InfoCard label="Контактный телефон" children={visiterPhone} mb={40} />
        <InfoCard
          label="Адрес"
          children={`${address}, кв.${numberOfApartment}`}
          mb={40}
        />
        <InfoCard
          label="ФИО или номер лицевого счета"
          children={`${getShortFullName(account.payer)}  (Л/С №${
            account.number
          })`}
          mb={40}
        />
        <InfoCard
          label="Ответственный за прием"
          children={
            responsiblePerson
              ? getShortFullName(responsiblePerson)
              : "Не выбран"
          }
          mb={40}
        />
        {status === "Завершен" && (
          <InfoCard
            label="Результат приема"
            children={
              <>
                <span>Результат: {resultComment}</span>
                <br />
                <div>Фотоотчет: {<DocsInfo files={resultFiles} />}</div>
              </>
            }
            mb={40}
          />
        )}
        {status !== "Отменено" ? (
          <Link href={`/receptionOfCitizens/${reception._id}/editReception`}>
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
    </div>
  );
};
export default ReceptionCard;
