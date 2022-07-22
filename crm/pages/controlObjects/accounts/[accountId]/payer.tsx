import MainLayout from "../../../../components/MainLayout";
import { IAccount, PayerData } from "../../../../models/IAccount";
import { GetServerSideProps, NextPage } from "next";
import { useAppSelector } from "../../../../store/hooks";
import {
  addPayer,
  editPayer,
} from "../../../../store/actions/controlObjectActions";
import { wrapper } from "../../../../store/store";
import getAccountById from "../../../api/getAccountById";
import Tabs from "../../../../components/Tabs";
import { settingsAccountLinks } from "../../../../components/Tabs/tabLinks";
import PayerForm from "../../../../components/Forms/PageForms/ControlObjects/PayerForm";

export interface AccountProps {
  account: IAccount;
}

const Payer: NextPage<AccountProps> = ({ account }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const { payer } = account;

  let initPayer: PayerData;
  {
    !payer
      ? (initPayer = {
          email: "",
          lastName: "",
          name: "",
          patronymic: "",
          dateOfBirth: null,
          phones: [],
          typeOfPayer: "",
          company: companyId,
        })
      : (initPayer = {
          email: payer.email,
          lastName: payer.lastName,
          name: payer.name,
          patronymic: payer.patronymic,
          dateOfBirth: payer.dateOfBirth,
          phones: payer.phones,
          typeOfPayer: payer.typeOfPayer,
          company: payer.company,
        });
  }

  const addPayerSubmit = async (payerData: PayerData) => {
    await addPayer(account._id, payerData);
  };

  const editPayerSubmit = async (payerData: PayerData) => {
    await editPayer(account._id, payer._id, payerData);
  };

  return (
    <MainLayout
      title="Лицевые счета"
      mainTitle={`Лицевой счет №${account.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(account._id)} />

      <PayerForm
        initPayer={initPayer}
        onSubmit={payer ? editPayerSubmit : addPayerSubmit}
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

export default Payer;
