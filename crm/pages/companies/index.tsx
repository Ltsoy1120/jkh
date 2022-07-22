import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import Button from "../../components/Buttons/Button";
import MainLayout from "../../components/MainLayout";
import CompaniesTable from "../../components/Tables/CompaniesTable/CompaniesTable";
import { API_URL } from "../../config";
import { ICompany } from "../../models/ICompany";
import { wrapper } from "../../store/store";
import Link from "next/link";
import styles from "../../styles/companies.module.scss";
import getCompanies from "../api/getCompanies";
import { setCompaniesData } from "../../store/slices/companySlice";

interface CompaniesProps {
  companies: ICompany[];
}

const Companies: NextPage<CompaniesProps> = ({ companies }) => {
  console.log("companies", companies);
  return (
    <MainLayout title="Главная" mainTitle="Главная">
      <div className={styles.addCompany}>
        <Link href="/company/addCompany">
          <a>
            <Button width={200}>Добавить компанию</Button>
          </a>
        </Link>
      </div>
      {companies ? (
        <CompaniesTable companies={companies} />
      ) : (
        <h5>Данных о компаниях нет</h5>
      )}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const companies = await getCompanies(ctx);
      return {
        props: companies ? { companies } : null,
      };
    } catch (error) {
      console.log(error);
    }
  });
export default Companies;
