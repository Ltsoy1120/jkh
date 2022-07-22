import MainLayout from "../../../../components/MainLayout";
import { IAccount } from "../../../../models/IAccount";
import { GetServerSideProps, NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
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

export interface AccountProps {
  account: IAccount;
}

const EditAccount: NextPage<AccountProps> = ({ account }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const dispatch = useAppDispatch();

  const initAccount = {
    createDate: account.createDate,
    number: account.number,
    address: account.address,
    numberOfApartment: account.numberOfApartment,
    accountBalance: account.accountBalance ? account.accountBalance : "",
    totalArea: account.totalArea,
    livingArea: account.livingArea,
    heatedArea: account.heatedArea,
    numberOfContract: account.numberOfContract,
    dateOfContract: account.dateOfContract,
    docs: account.docs ? account.docs : [],
    closeDate: account.closeDate ? account.closeDate : null,
    reasonOfClosing: account.reasonOfClosing ? account.reasonOfClosing : "",
    company: account.company,
  };
  const editAccountSubmit = async (accountData: FormData) => {
    await editAccount(companyId, account._id, accountData);
  };

  const deleteAccountHandler = async () => {
    await deleteAccount(account._id, companyId);
    await dispatch(getAccountsByCompany(companyId));
  };

  return (
    <MainLayout
      title="Лицевые счета"
      mainTitle={`Лицевой счет №${account.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(account._id)} />
      {!account.closeDate && (
        <ButtonGroup
          absolute
          children1="Закрыть"
          href1={`/controlObjects/accounts/${account._id}/closeAccount`}
          width1={150}
          children2="Удалить"
          onClick2={deleteAccountHandler}
          width2={150}
        />
      )}
      <AccountForm
        initAccount={initAccount}
        onSubmit={editAccountSubmit}
        deleteAccountHandler={deleteAccountHandler}
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

export default EditAccount;
