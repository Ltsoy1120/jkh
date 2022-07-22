import moment from "moment";
import Link from "next/link";
import { apiURL } from "../../../config";
import { IAppeal } from "../../../models/IAppeal";
import { IApplication } from "../../../models/IApplication";
import { getShortFullName } from "../../../utils/functions";
import Button from "../../Buttons/Button";
import PriorityButton from "../../Buttons/PriorityButton";
import StatusButton from "../../Buttons/StatusButton";
import DocsInfo from "./components/DocsInfo";
import InfoCard from "./components/InfoCard";
import styles from "./style.module.scss";

interface AppealCardProps {
  appeal: IAppeal;
}
const AppealCard: React.FC<AppealCardProps> = ({ appeal }) => {
  const {
    status,
    priority,
    type,
    text,
    address,
    numberOfApartment,
    phone,
    account,
    contractor,
    performer,
    result,
    resultComment,
    resultFiles,
    reasonForCancel,
    createDate,
  } = appeal;
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
        <InfoCard
          label="Адрес"
          children={`${address}, кв.${numberOfApartment}`}
          mb={40}
        />
        <div className={styles.row}>
          <InfoCard
            label="ФИО или номер лицевого счета"
            children={`${getShortFullName(account.payer)}  (Л/С №${
              account.number
            })`}
          />
          <div style={{ color: "#E82F45", fontSize: "12px", width: 204 }}>
            Внимание!
            <br /> По данному лицевому счету имеется задолженность 100 руб
          </div>
        </div>
        <InfoCard label="Контактный телефон" children={phone} mb={40} />
        <InfoCard
          label="Исполнитель"
          children={performer ? getShortFullName(performer) : "Не выбран"}
          mb={40}
        />
        {status === "Выполнено" && (
          <InfoCard
            label="Результат работы"
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
          <Link href={`/appeals/${appeal._id}/editAppeal`}>
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
export default AppealCard;
