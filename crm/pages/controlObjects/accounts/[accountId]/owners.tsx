import MainLayout from "../../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../store/store";
import Tabs from "../../../../components/Tabs";
import { settingsAccountLinks } from "../../../../components/Tabs/tabLinks";
import AddPlus from "../../../../components/AddPlus";
import OwnersTable from "../../../../components/Tables/ControlObjects/OwnersTable";
import { IProperty } from "../../../../models/IProperty";
import getAccountById from "../../../api/getAccountById";
import { IAccount } from "../../../../models/IAccount";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useEffect } from "react";
import {
  getProperties,
  getPropertiesByAccount,
} from "../../../../store/actions/controlObjectActions";

// export interface OwnersProps {
//   properties: IProperty[];
// }

export interface OwnersProps {
  account: IAccount;
}
const Owners: NextPage<OwnersProps> = ({ account }) => {
  const properties = useAppSelector(getProperties());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPropertiesByAccount(account._id));
  }, [dispatch]);

  return (
    <MainLayout
      title="Лицевые счета"
      mainTitle={`Лицевой счет №${account.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(account._id)} />
      <AddPlus
        name="Добавить собственника"
        href={`/controlObjects/passportOffice/addSubject`}
      />
      {account.owners[0] && <OwnersTable properties={properties} />}
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

export default Owners;
