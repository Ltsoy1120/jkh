import { NextPage } from "next";
import MainLayout from "../../../components/MainLayout";
import { useRouter } from "next/router";
import TypesOfWorkForm from "../../../components/Forms/PageForms/ContractorForm/TypesOfWorkForm";
import { addTypesOfWork } from "../../../store/actions/contractorActions";

const AddTypesOfWork: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const contractorId = useRouter().query.contractorId.toString();
  const initTypesOfWork = [""];

  const addTypesOfWorkSubmit = async (typesOfWorkData: string[]) => {
    await addTypesOfWork(companyId, contractorId, typesOfWorkData);
  };

  return (
    <MainLayout
      title="Виды работ"
      mainTitle="Добавление видов работ подрядчика"
    >
      <TypesOfWorkForm
        initTypesOfWork={initTypesOfWork}
        onSubmit={addTypesOfWorkSubmit}
      />
    </MainLayout>
  );
};
export default AddTypesOfWork;
