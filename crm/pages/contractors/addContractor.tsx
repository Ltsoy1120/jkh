import { NextPage } from "next";
import AddContractorForm from "../../components/Forms/PageForms/ContractorForm/AddContractorForm";
import MainLayout from "../../components/MainLayout/MainLayout";
import { HeadData } from "../../models/IContractor";
import { addNewContractor } from "../../store/actions/companyActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const AddContractor: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company._id);
  const dispatch = useAppDispatch();
  const initContractor = {
    contractorName: "",
    address: "",
    phones: [],
    logo: "",
    isActive: false,
    companies: companyId ? [companyId] : [],
  };
  const initHead = {
    lastName: "",
    name: "",
    patronymic: "",
    email: "",
    phones: [],
    position: "Директор",
  };
  const addContractorSubmit = async (
    contractorData: FormData,
    head: HeadData
  ) => {
    await dispatch(addNewContractor(companyId, contractorData, head));
  };

  return (
    <MainLayout
      breadcrumbs="Компания / Подрядчики / Добавить нового подрядчика"
      title="Добавить подрядчика"
      mainTitle="Добавление нового подрядчика"
    >
      <AddContractorForm
        initContractor={initContractor}
        initHead={initHead}
        onSubmit={addContractorSubmit}
        companyId={companyId}
      />
    </MainLayout>
  );
};
export default AddContractor;
