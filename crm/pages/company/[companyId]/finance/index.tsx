import MainLayout from "../../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { FinanceTable } from "../../../../components/Tables/FinanceTable/FinanceTable";

const Finance: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();

  return (
    <MainLayout breadcrumbs="Финансы" title="Финансы" mainTitle="Финансы">
      <FinanceTable />
    </MainLayout>
  );
};
export default Finance;
