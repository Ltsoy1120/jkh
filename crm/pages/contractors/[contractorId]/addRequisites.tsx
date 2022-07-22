import { NextPage } from "next";
import MainLayout from "../../../components/MainLayout";
import RequisitesForm from "../../../components/Forms/PageForms/RequisitesForm";
import { RequisitesData } from "../../../models/ICompany";
import { useRouter } from "next/router";
import { addRequisitesOfContractor } from "../../../store/actions/contractorActions";

const AddRequisites: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const contractorId = useRouter().query.contractorId.toString();
  const initRequisites = {
    ogrn: "",
    inn: "",
    kpp: "",
    bankName: "",
    bik: "",
    paymentAccount: "",
    correspondentAccount: "",
  };

  const addRequisitesSubmit = async (requisitesData: RequisitesData) => {
    await addRequisitesOfContractor(companyId, contractorId, requisitesData);
  };

  return (
    <MainLayout title="Реквизиты" mainTitle="Добавление реквизитов подрядчика">
      <RequisitesForm
        initRequisites={initRequisites}
        onSubmit={addRequisitesSubmit}
      />
    </MainLayout>
  );
};
export default AddRequisites;
