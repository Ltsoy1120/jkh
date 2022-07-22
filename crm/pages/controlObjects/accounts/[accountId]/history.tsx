import MainLayout from "../../../../components/MainLayout";
import { IAccount } from "../../../../models/IAccount";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../store/store";
import getAccountById from "../../../api/getAccountById";
import Tabs from "../../../../components/Tabs";
import { settingsAccountLinks } from "../../../../components/Tabs/tabLinks";
import HistoryCard from "../../../../components/Cards/HistoryCard";
import { useEffect } from "react";
import {
  getAccountLogs,
  getAccountLogsByAccount,
} from "../../../../store/actions/controlObjectActions";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

export interface AccountProps {
  account: IAccount;
}

const History: NextPage<AccountProps> = ({ account }) => {
  const accountLogs = useAppSelector(getAccountLogs());
  console.log(accountLogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAccountLogsByAccount(account._id));
  }, [dispatch]);

  return (
    <MainLayout
      title="Лицевые счета"
      mainTitle={`Лицевой счет №${account.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(account._id)} />
      {accountLogs &&
        accountLogs.map((accountLog) => (
          <HistoryCard key={accountLog._id} accountLog={accountLog} />
        ))}
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

export default History;
