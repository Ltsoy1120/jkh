import MainLayout from "../../../../components/MainLayout";
import { AccountClosingData, IAccount } from "../../../../models/IAccount";
import { GetServerSideProps, NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  closeAccount,
  deleteAccount,
  editAccount,
  getAccountsByCompany,
} from "../../../../store/actions/controlObjectActions";
import AccountForm from "../../../../components/Forms/PageForms/ControlObjects/AccountForm";
import { wrapper } from "../../../../store/store";
import getAccountById from "../../../api/getAccountById";
import Tabs from "../../../../components/Tabs";
import { settingsAccountLinks } from "../../../../components/Tabs/tabLinks";
import ButtonGroup from "../../../../components/Buttons/ButtonGroup";
import AccountTable from "../../../../components/Tables/ControlObjects/AccountsTable/AccountTable";
import CloseAccountForm from "../../../../components/Forms/PageForms/ControlObjects/AccountForm/CloseAccountForm";

export interface AccountProps {
  account: IAccount;
}

const CloseAccount: NextPage<AccountProps> = ({ account }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;

  const initAccountClosure = {
    closeDate: new Date(),
    reasonOfClosing: "",
    commentOfClosing: "",
  };
  const closeAccountSubmit = async (closingData: AccountClosingData) => {
    await closeAccount(account._id, closingData);
  };

  return (
    <MainLayout
      title="Лицевые счета"
      mainTitle={`Лицевой счет №${account.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(account._id)} />
      <AccountTable companyId={companyId} account={account} />
      <CloseAccountForm
        initAccountClosure={initAccountClosure}
        onSubmit={closeAccountSubmit}
      />
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

export default CloseAccount;
