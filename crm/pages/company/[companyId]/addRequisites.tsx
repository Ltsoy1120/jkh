import { NextPage } from "next";
import MainLayout from "../../../components/MainLayout";
import RequisitesForm from "../../../components/Forms/PageForms/RequisitesForm";
import { addRequisitesCompany } from "../../../store/actions/companyActions";
import { RequisitesData } from "../../../models/ICompany";
import { useRouter } from "next/router";

const AddRequisites: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
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
    await addRequisitesCompany(companyId, requisitesData);
  };

  return (
    <MainLayout title="Реквизиты" mainTitle="Добавление реквизитов компании">
      <RequisitesForm
        initRequisites={initRequisites}
        onSubmit={addRequisitesSubmit}
      />
    </MainLayout>
  );
};
export default AddRequisites;
