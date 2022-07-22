import { GetServerSideProps, NextPage } from "next";
import { settingsAccountLinks } from "../../../../components/Tabs/tabLinks";
import { IAccount } from "../../../../models/IAccount";
import { wrapper } from "../../../../store/store";
import MainLayout from "../../../../components/MainLayout";
import {
  addDevice,
  getError,
} from "../../../../store/actions/controlObjectActions";
import DeviceForm from "../../../../components/Forms/PageForms/ControlObjects/DeviceForm";
import getAccountById from "../../../api/getAccountById";
import Tabs from "../../../../components/Tabs";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

export interface AccountProps {
  account: IAccount;
}

const AddDevice: NextPage<AccountProps> = ({ account }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const dispatch = useAppDispatch();
  const initDevice = {
    address: account.address,
    numberOfApartment: account.numberOfApartment,
    number: "",
    type: "",
    manufacturer: "",
    model: "",
    location: "",
    isSeal: false,
    installationDate: null,
    dateOfSealing: null,
    commissioningDate: null,
    periodOfCheck: "",
    checkDate: null,
    assignment: "",
    firstData: "",
    firstDataDay: "",
    firstDataNight: "",
    firstDataT1: "",
    firstDataT2: "",
    firstDataT3: "",
    docs: [],
    tariff: "Однотарифный",
    account: account._id,
    company: companyId,
  };
  const addDeviceSubmit = async (deviceData: FormData) => {
    await dispatch(addDevice(account._id, deviceData));
  };

  return (
    <MainLayout
      title="Лицевые счета"
      mainTitle={`Лицевой счет №${account.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(account._id)} />

      <DeviceForm
        initDevice={initDevice}
        onSubmit={addDeviceSubmit}
        href={`/controlObjects/accounts/${account._id}/devices`}
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
export default AddDevice;
