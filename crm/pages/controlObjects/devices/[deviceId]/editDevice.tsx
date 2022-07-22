import MainLayout from "../../../../components/MainLayout";
import { IAccount } from "../../../../models/IAccount";
import { GetServerSideProps, NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  deleteAccount,
  editAccount,
  editDevice,
  getAccountsByCompany,
} from "../../../../store/actions/controlObjectActions";
import AccountForm from "../../../../components/Forms/PageForms/ControlObjects/AccountForm";
import { wrapper } from "../../../../store/store";
import getAccountById from "../../../api/getAccountById";
import Tabs from "../../../../components/Tabs";
import { settingsAccountLinks } from "../../../../components/Tabs/tabLinks";
import ButtonGroup from "../../../../components/Buttons/ButtonGroup";
import getDeviceById from "../../../api/getDeviceById";
import { IDevice } from "../../../../models/IDevice";
import DeviceForm from "../../../../components/Forms/PageForms/ControlObjects/DeviceForm";

export interface DeviceProps {
  device: IDevice;
}

const EditDevice: NextPage<DeviceProps> = ({ device }) => {
  console.log(device);
  let initDevice;
  device.tariff === "Многотарифный"
    ? (initDevice = {
        address: device.address,
        numberOfApartment: device.numberOfApartment,
        number: device.number,
        type: device.type,
        manufacturer: device.manufacturer,
        model: device.model,
        location: device.location,
        isSeal: device.isSeal,
        installationDate: device.installationDate,
        dateOfSealing: device.dateOfSealing,
        commissioningDate: device.commissioningDate,
        periodOfCheck: device.periodOfCheck,
        checkDate: device.checkDate,
        assignment: device.assignment,
        tariff: device.tariff,
        firstDataT1: device.firstDataT1,
        firstDataT2: device.firstDataT2,
        firstDataT3: device.firstDataT3,
        lastDataT1: device.lastDataT1,
        lastDataT2: device.lastDataT2,
        lastDataT3: device.lastDataT3,
        differenceT1: device.differenceT1,
        differenceT2: device.differenceT2,
        differenceT3: device.differenceT3,
        docs: device.docs,
        account: device.account._id,
      })
    : device.tariff === "Двухтарифный"
    ? (initDevice = {
        address: device.address,
        numberOfApartment: device.numberOfApartment,
        number: device.number,
        type: device.type,
        manufacturer: device.manufacturer,
        model: device.model,
        location: device.location,
        isSeal: device.isSeal,
        installationDate: device.installationDate,
        dateOfSealing: device.dateOfSealing,
        commissioningDate: device.commissioningDate,
        periodOfCheck: device.periodOfCheck,
        checkDate: device.checkDate,
        assignment: device.assignment,
        tariff: device.tariff,
        firstDataDay: device.firstDataDay,
        firstDataNight: device.firstDataNight,
        lastDataDay: device.lastDataDay,
        lastDataNight: device.lastDataNight,
        differenceDay: device.differenceDay,
        differenceNight: device.differenceNight,
        docs: device.docs,
        account: device.account._id,
      })
    : (initDevice = {
        address: device.address,
        numberOfApartment: device.numberOfApartment,
        number: device.number,
        type: device.type,
        manufacturer: device.manufacturer,
        model: device.model,
        location: device.location,
        isSeal: device.isSeal,
        installationDate: device.installationDate,
        dateOfSealing: device.dateOfSealing,
        commissioningDate: device.commissioningDate,
        periodOfCheck: device.periodOfCheck,
        checkDate: device.checkDate,
        assignment: device.assignment,
        tariff: device.tariff,
        firstData: device.firstData,
        lastData: device.lastData,
        difference: device.difference,
        docs: device.docs,
        account: device.account._id,
      });

  const editDeviceSubmit = async (deviceData: FormData) => {
    await editDevice(device.account._id, device._id, deviceData);
  };

  return (
    <MainLayout
      title="Приборы учета"
      mainTitle={`Прибор учета №${device.number}`}
    >
      <Tabs tabLinks={settingsAccountLinks(device.account._id)} />
      <DeviceForm
        initDevice={initDevice}
        onSubmit={editDeviceSubmit}
        href={`/controlObjects/accounts/${device.account._id}/devices`}
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const device = await getDeviceById(ctx);
      return {
        props: device ? { device } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditDevice;
