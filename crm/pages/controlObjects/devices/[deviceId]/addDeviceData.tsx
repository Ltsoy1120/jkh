import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../store/store";
import getDeviceById from "../../../api/getDeviceById";
import { DeviceProps } from "./editDevice";
import MainLayout from "../../../../components/MainLayout";
import { TypeDeviceData } from "../../../../models/IDeviceData";
import DeviceDataForm from "../../../../components/Forms/PageForms/ControlObjects/DeviceDataForm";
import { addDeviceData } from "../../../../store/actions/controlObjectActions";
import MultiTariffForm from "../../../../components/Forms/PageForms/ControlObjects/DeviceDataForm/MultiTariffForm";

const AddDeviceData: NextPage<DeviceProps> = ({ device }) => {
  let initDeviceData;
  device.tariff === "Многотарифный"
    ? (initDeviceData = {
        createDate: new Date(),
        tariff: "Многотарифный",
        lastDataT1: device.lastDataT1,
        lastDataT2: device.lastDataT2,
        lastDataT3: device.lastDataT3,
        currentDataT1: "",
        currentDataT2: "",
        currentDataT3: "",
        device: device._id,
        account: device.account._id,
      })
    : device.tariff === "Двухтарифный"
    ? (initDeviceData = {
        createDate: new Date(),
        tariff: "Двухтарифный",
        lastDataDay: device.lastDataDay,
        lastDataNight: device.lastDataNight,
        currentDataDay: "",
        currentDataNight: "",
        device: device._id,
        account: device.account._id,
      })
    : (initDeviceData = {
        createDate: new Date(),
        tariff: "Однотарифный",
        lastData: device.lastData,
        currentData: "",
        device: device._id,
        account: device.account._id,
      });

  const addDeviceDataSubmit = async (deviceData: TypeDeviceData) => {
    await addDeviceData(device.account._id, deviceData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Приборы учета / Подача показаний"
      title="Приборы учета"
      mainTitle="Приборы учета"
    >
      <h2>
        Подача показаний по прибору учета №{device.number} ({device.assignment}{" "}
        - {device.tariff})
      </h2>
      {device.tariff === "Многотарифный" ? (
        <MultiTariffForm
          initDeviceData={initDeviceData}
          onSubmit={addDeviceDataSubmit}
        />
      ) : device.tariff === "Двухтарифный" ? (
        <MultiTariffForm
          initDeviceData={initDeviceData}
          onSubmit={addDeviceDataSubmit}
        />
      ) : (
        <DeviceDataForm
          initDeviceData={initDeviceData}
          onSubmit={addDeviceDataSubmit}
        />
      )}
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

export default AddDeviceData;
