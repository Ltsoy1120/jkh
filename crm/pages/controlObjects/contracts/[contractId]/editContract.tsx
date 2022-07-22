import { GetServerSideProps, NextPage } from "next";
import ContractForm from "../../../../components/Forms/PageForms/ControlObjects/ContractForm";
import MainLayout from "../../../../components/MainLayout";
import { IContract } from "../../../../models/IContract";
import { editContract } from "../../../../store/actions/controlObjectActions";
import { useAppSelector } from "../../../../store/hooks";
import { wrapper } from "../../../../store/store";
import getContractById from "../../../api/getContractById";

export interface ContractProps {
  contract: IContract;
}
const EditContract: NextPage<ContractProps> = ({ contract }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const initContract = {
    number: contract.number,
    status: contract.status ? contract.status : "",
    name: contract.name ? contract.name : "",
    startDate: contract.startDate,
    endDate: contract.endDate,
    controlObjects: contract.controlObjects ? contract.controlObjects : [],
    scans: contract.scans ? contract.scans : [],
    company: contract.company,
  };
  const editContractSubmit = async (contractData: FormData) => {
    await editContract(companyId, contract._id, contractData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Список домов / Добавить новое помещение"
      title="Добавить новое помещение"
      mainTitle="Добавить новое помещение"
    >
      <ContractForm initContract={initContract} onSubmit={editContractSubmit} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const contract = await getContractById(ctx);
      return {
        props: contract ? { contract } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditContract;
