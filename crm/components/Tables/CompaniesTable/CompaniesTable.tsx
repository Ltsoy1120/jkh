import moment from "moment";
import { ICompany } from "../../../models/ICompany";
import TrCompany from "./TrCompany";
import styles from "./CompaniesTable.module.scss";

interface CompaniesTableProps {
  companies: ICompany[];
}

const CompaniesTable: React.FC<CompaniesTableProps> = ({ companies }) => {
  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <span>Название</span>
        <span>Адрес</span>
        <span>Дата добавления</span>
        <span>Часовой пояс</span>
        <span>Адрес сайта</span>
        <span>Телефон</span>
      </div>
      <div className={styles.tbody}>
        {companies.map((company) => (
          <TrCompany
            key={company._id}
            id={company._id}
            name={company.name}
            address={company.address}
            timezone={company.timezone}
            website={company.website}
            createDate={moment(company.createDate).format("DD.MM.YYYY")}
            phones={company.phones}
          />
        ))}
      </div>
    </div>
  );
};
export default CompaniesTable;
