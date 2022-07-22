import MainLayout from "../../../../components/MainLayout";
import { IAccount, OwnerData } from "../../../../models/IAccount";
import { GetServerSideProps, NextPage } from "next";
import { useAppSelector } from "../../../../store/hooks";
import { addOwner } from "../../../../store/actions/controlObjectActions";
import { wrapper } from "../../../../store/store";
import getAccountById from "../../../api/getAccountById";
import Tabs from "../../../../components/Tabs";
import { settingsAccountLinks } from "../../../../components/Tabs/tabLinks";
import OwnerForm from "../../../../components/Forms/PageForms/ControlObjects/OwnerForm";

export interface AccountProps {
  account: IAccount;
}

const Payer: NextPage<AccountProps> = ({ account }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;

  const initOwner = {
    email: "",
    lastName: "",
    name: "",
    patronymic: "",
    dateOfBirth: null,
    phones: [],
    startDateOfOwnership: null,
    shareOfOwnership: "",
    statusOfOwnership: "",
    company: companyId,
  };

  const addOwnerSubmit = async (ownerData: OwnerData) => {
    await addOwner(account._id, ownerData);
  };

  return (
    <MainLayout
      title="Лицевые счета"
      mainTitle={`Лицевой счет №${account.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(account._id)} />

      <OwnerForm initOwner={initOwner} onSubmit={addOwnerSubmit} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const account = await getAccountById(ctx);
      return {
        props: account ? { account } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default Payer;
