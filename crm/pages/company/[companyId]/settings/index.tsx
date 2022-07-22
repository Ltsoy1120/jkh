import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../../../../components/MainLayout";
import Tabs from "../../../../components/Tabs";
import { editCompany } from "../../../../store/actions/companyActions";
import CompanyForm from "../../../../components/Forms/PageForms/CompanyForm";
import { wrapper } from "../../../../store/store";
import getCompanyById from "../../../api/getCompanyById";
import { useAppSelector } from "../../../../store/hooks";
import { settingsCompanyLinks } from "../../../../components/Tabs/tabLinks";
import { CompanyProps } from "..";

const CompanySettings: NextPage<CompanyProps> = ({ company }) => {
  console.log("company", company);
  const userData = useAppSelector((state) => state.users.userData);
  const isLeader = company?.leader?._id === userData?._id;
  const isAdmin = userData?.role === "admin";
  const initCompany = company && {
    name: company.name,
    address: company.address,
    timezone: company.timezone,
    phones: company.phones,
    domen: company.domen,
    website: company.website,
    logo: company.logo,
  };

  const editCompanySubmit = async (companyData: FormData) => {
    await editCompany(company._id, companyData);
  };
  return (
    <>
      {company && (isLeader || isAdmin) ? (
        <MainLayout
          title="Данные о компании"
          mainTitle={`Настройка профиля компании  "${company.name}"`}
        >
          <Tabs tabLinks={settingsCompanyLinks(company._id)} />
          <CompanyForm
            initCompany={initCompany}
            company={company}
            onSubmit={editCompanySubmit}
          />
        </MainLayout>
      ) : (
        <h1>У вас отстустствует доступ к настройкам профиля компании</h1>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const company = await getCompanyById(ctx);
      return {
        props: company ? { company } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default CompanySettings;
