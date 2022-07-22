import { NextPage } from "next";
import MainLayout from "../../../components/MainLayout";
import HouseForm from "../../../components/Forms/PageForms/ControlObjects/HouseForm";
import { createHouse } from "../../../store/actions/controlObjectActions";
import { HouseData } from "../../../models/IHouse";
import { useAppSelector } from "../../../store/hooks";

const AddHouse: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  console.log("companyId", companyId);

  const initHouse = {
    address: "",
    geo: "",
    timezone: "",
    typeOfControl: "",
    basisOfControl: "",
    startDate: null,
    fiasCode: "",
    company: companyId,
  };
  const AddHouseSubmit = async (houseData: HouseData) => {
    await createHouse(companyId, houseData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Список домов / Добавить новый дом"
      title="Добавить новый дом"
      mainTitle="Добавить новый дом"
    >
      <HouseForm initHouse={initHouse} onSubmit={AddHouseSubmit} />
    </MainLayout>
  );
};
export default AddHouse;
