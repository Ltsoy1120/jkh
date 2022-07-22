import MainLayout from "../../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import DebtorsTable from "../../../../components/Tables/DebtorsTable/DebtorsTable";
import AbsolutButton from "../../../../components/Buttons/AbsolutButton";
import Panel from "../../../../components/Panel";
import DebtorsFilter from "../../../../components/Filters/DebtorsFilter";

const Finance: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();

  return (
    <MainLayout
      breadcrumbs="Должники / Список дел"
      title="Должники"
      mainTitle="Должники"
    >
      <AbsolutButton text="Экспорт" href="" />
      <Panel>
        <DebtorsFilter companyId={companyId} />
      </Panel>
      <DebtorsTable />
    </MainLayout>
  );
};
export default Finance;
