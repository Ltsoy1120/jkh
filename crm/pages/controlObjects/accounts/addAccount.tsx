import { NextPage } from "next";
import AccountForm from "../../../components/Forms/PageForms/ControlObjects/AccountForm";
import MainLayout from "../../../components/MainLayout";
import { addAccount } from "../../../store/actions/controlObjectActions";
import { useAppSelector } from "../../../store/hooks";

const AddAccount: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const initAccount = {
    createDate: new Date(),
    number: "",
    address: "",
    numberOfApartment: "",
    accountBalance: "",
    totalArea: "",
    livingArea: "",
    heatedArea: "",
    numberOfContract: "",
    dateOfContract: null,
    docs: [],
    company: companyId,
  };
  const addAccountSubmit = async (accountData: FormData) => {
    await addAccount(companyId, accountData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Лицевые счета / Добавление нового лицевого счета"
      title="Объекты управления"
      mainTitle="Добавление нового лицевого счета"
    >
      <AccountForm initAccount={initAccount} onSubmit={addAccountSubmit} />
    </MainLayout>
  );
};

export default AddAccount;
