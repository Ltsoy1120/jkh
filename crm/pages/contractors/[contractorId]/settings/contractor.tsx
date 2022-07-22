import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../../../components/MainLayout";
import Tabs from "../../../../components/Tabs";
import { settingsContractorLinks } from "../../../../components/Tabs/tabLinks";
import { wrapper } from "../../../../store/store";
import { IContractor } from "../../../../models/IContractor";
import getContractorById from "../../../api/getContractorById";
import { editContractor } from "../../../../store/actions/contractorActions";
import ContractorForm from "../../../../components/Forms/PageForms/ContractorForm";

interface ContractorSettingsProps {
  contractor: IContractor;
}

const ContractorSettings: NextPage<ContractorSettingsProps> = ({
  contractor,
}) => {
  const companyId = useRouter().query.companyId.toString();
  const initContractor = contractor && {
    contractorName: contractor.contractorName,
    address: contractor.address,
    phones: contractor.phones,
    logo: contractor.logo,
    isActive: contractor.isActive,
    companies: contractor.companies,
  };

  const editContractorSubmit = async (contractorData: FormData) => {
    await editContractor(companyId, contractor._id, contractorData);
  };

  return (
    <MainLayout
      title="Подрядчики"
      mainTitle={`Настройка профиля подрядчика "${contractor.contractorName}"`}
    >
      <Tabs tabLinks={settingsContractorLinks(companyId, contractor._id)} />
      <ContractorForm
        initContractor={initContractor}
        onSubmit={editContractorSubmit}
        companyId={companyId}
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const contractor = await getContractorById(ctx);
      return {
        props: contractor ? { contractor } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default ContractorSettings;
