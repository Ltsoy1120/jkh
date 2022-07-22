import { GetServerSideProps, NextPage } from "next";
import { CompanyProps } from ".";
import AbsolutButton from "../../../components/Buttons/AbsolutButton";
import ContractorsFilter from "../../../components/Filters/ContractorsFilter";
import MainLayout from "../../../components/MainLayout";
import ContractorsTables from "../../../components/Tables/ContractorsTables";
import { useAppSelector } from "../../../store/hooks";
import { wrapper } from "../../../store/store";
import getCompanyWithContractors from "../../api/getCompanyWithContractors";

const Contractors: NextPage<CompanyProps> = ({ company }) => {
  const companyId = useAppSelector((state) => state.users.userData?.company);
  const contractors = company?.contractors;
  const isLoading = useAppSelector((state) => state.companies.isLoading);
  const userData = useAppSelector((state) => state.users.userData);
  const isLeader = userData?.role === "leader";
  const isAdmin = userData?.role === "admin";

  return (
    <MainLayout
      title="Подрядчики"
      mainTitle={`Подрядчики компании "${company.name}"`}
      breadcrumbs="Компания / Подрядчики"
    >
      <AbsolutButton
        text="Посмотреть всех подрядчиков"
        href={`/contractors`}
        right={40}
      />
      {(isLeader || isAdmin) && (
        <AbsolutButton
          text="Добавить нового подрядчика"
          href={`/contractors/addContractor`}
          right={300}
        />
      )}
      {!isLoading ? (
        <>
          {contractors?.length ? (
            <>
              <ContractorsFilter />
              <ContractorsTables
                companyId={companyId}
                contractors={contractors}
              />
            </>
          ) : (
            <>
              <h2>Подрядчиков нет</h2>
            </>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const company = await getCompanyWithContractors(ctx);
      return {
        props: company ? { company } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default Contractors;
