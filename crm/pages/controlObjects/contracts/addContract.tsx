import { NextPage } from "next";
import ContractForm from "../../../components/Forms/PageForms/ControlObjects/ContractForm";
import MainLayout from "../../../components/MainLayout";
import { addContract } from "../../../store/actions/controlObjectActions";
import { useAppSelector } from "../../../store/hooks";

const AddContract: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const initContract = {
    number: "",
    status: "",
    name: "",
    startDate: null,
    endDate: null,
    controlObjects: [],
    scans: [],
    company: companyId,
  };
  const addContractSubmit = async (contractData: FormData) => {
    await addContract(companyId, contractData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Список домов / Добавить новое помещение"
      title="Добавить новое помещение"
      mainTitle="Добавить новое помещение"
    >
      <ContractForm initContract={initContract} onSubmit={addContractSubmit} />
    </MainLayout>
  );
};

export default AddContract;
