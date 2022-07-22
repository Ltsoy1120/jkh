import moment from "moment";
import { apiURL } from "../../../config";
import { ICompany } from "../../../models/ICompany";
import InfoCard from "../InfoCard/InfoCard";
import styles from "./CompanyCard.module.scss";

interface CompanyCardProps {
  company: ICompany;
}
const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapAvatar}>
        <img src={apiURL + "/uploads/" + company.logo} />
        <p>Логотип компании</p>
      </div>
      <div className={styles.wrapInfo}>
        <InfoCard name="Адрес" value={company.address} width={550} />
        <InfoCard
          name="Дата добавления компании"
          value={moment(company.createDate).format("DD.MM.YYYY")}
          width={550}
        />
        <InfoCard name="Часовой пояс" value={company.timezone} width={550} />
        <InfoCard
          name="Контактные телефоны"
          // value={JSON.parse(company.phones[0])}
          value={company.phones}
        />
        <div className={styles.row}>
          <InfoCard name="Домен сайта" value={company.domen} width={265} />
          <InfoCard name="Адрес сайта" value={company.website} width={265} />
        </div>
      </div>
    </div>
  );
};
export default CompanyCard;
