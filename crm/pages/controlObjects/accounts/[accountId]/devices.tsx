import MainLayout from "../../../../components/MainLayout";
import { IAccount } from "../../../../models/IAccount";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../store/store";
import getAccountById from "../../../api/getAccountById";
import Tabs from "../../../../components/Tabs";
import { settingsAccountLinks } from "../../../../components/Tabs/tabLinks";
import AddPlus from "../../../../components/AddPlus";
import DevicesTable from "../../../../components/Tables/ControlObjects/DevicesTable";
import TotalLine from "../../../../components/TotalLine";

export interface AccountProps {
  account: IAccount;
}

const Devices: NextPage<AccountProps> = ({ account }) => {
  const { devices } = account;
  console.log(account);
  return (
    <MainLayout
      title="Лицевые счета"
      mainTitle={`Лицевой счет №${account.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(account._id)} />
      <AddPlus
        name="Добавить прибор учета"
        href={`/controlObjects/accounts/${account._id}/addDevice`}
      />
      {devices[0] && <DevicesTable accountId={account._id} devices={devices} />}
      <TotalLine amount={devices.length} text="Приборов" />
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

export default Devices;
