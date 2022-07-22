import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../../../components/MainLayout";
import { ICompany } from "../../../models/ICompany";
import { wrapper } from "../../../store/store";
import {
  companyFetching,
  companyFetchingError,
  companyFetchingSuccess,
} from "../../../store/slices/companySlice";
import Tabs from "../../../components/Tabs";
import { useAppSelector } from "../../../store/hooks";
import { deleteCompany } from "../../../store/actions/companyActions";
import CompanyInfo from "../../../components/Info/CompanyInfo/CompanyInfo";
import getCompanyById from "../../api/getCompanyById";
import { companyLinks } from "../../../components/Tabs/tabLinks";

export interface CompanyProps {
  company: ICompany;
}

const Company: NextPage<CompanyProps> = ({ company }) => {
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?._id === company?.leader?._id;

  const handleDeleteCompany = async () => {
    await deleteCompany(company._id);
  };

  return (
    <MainLayout title="Компания" mainTitle={`Компания "${company?.name}"`}>
      <Tabs tabLinks={companyLinks(company?._id)} />
      {company ? (
        <CompanyInfo
          company={company}
          isAdmin={isAdmin}
          isLeader={isLeader}
          handleDeleteCompany={handleDeleteCompany}
        />
      ) : (
        <h5>Данных о компании нет</h5>
      )}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      store.dispatch(companyFetching());
      const company = await getCompanyById(ctx);
      store.dispatch(companyFetchingSuccess(company));
      return {
        props: company ? { company } : {},
      };
    } catch (error) {
      store.dispatch(companyFetchingError((error as Error).message));
    }
  });

export default Company;
