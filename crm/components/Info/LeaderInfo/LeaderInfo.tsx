import moment from "moment";
import Link from "next/link";
import { IUser } from "../../../models/IUser";
import Button from "../../Buttons/Button";
import InfoCard from "../../Cards/InfoCard";
import styles from "./LeaderInfo.module.scss";

interface LeaderInfoProps {
  leader: IUser;
  companyId: string;
  isAdmin: boolean;
  isLeader: boolean;
  handleDeleteLeader: () => Promise<void>;
}
const LeaderInfo: React.FC<LeaderInfoProps> = ({
  leader,
  companyId,
  isAdmin,
  isLeader,
  handleDeleteLeader,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <InfoCard name="Фамилия" value={leader.lastName} mr={20} width={265} />
        <InfoCard name="Имя" value={leader.name} mr={20} width={265} />
      </div>
      <div className={styles.row}>
        <InfoCard
          name="Отчество"
          value={leader.patronymic}
          mr={20}
          width={265}
        />
        <InfoCard
          name="Дата рождения"
          value={moment(leader.dateOfBirth).format("DD.MM.YYYY")}
          mr={20}
          width={265}
        />
      </div>
      <InfoCard name="Контактные телефоны" value={leader.phones} width={255} />
      <InfoCard name="E-mail" value={leader.email} width={265} />
      <InfoCard name="Должность" value={leader.position} width={550} />
      <InfoCard
        name="ФИО руководителя компании в родительном падеже"
        value={leader.fullnameInParent}
        width={550}
      />
      <InfoCard
        name="Основание назначения на должность"
        value={leader.basisForAppointment}
        width={550}
      />
      <div className={styles.wrapButtons}>
        {(isLeader || isAdmin) && (
          <Link href={`/company/${companyId}/settings/leader`}>
            <a>
              <Button bg="green" mr={20} width={200}>
                Редактировать
              </Button>
            </a>
          </Link>
        )}
        {isAdmin && (
          <Button width={200} onClick={handleDeleteLeader}>
            Удалить
          </Button>
        )}
      </div>
    </div>
  );
};
export default LeaderInfo;
