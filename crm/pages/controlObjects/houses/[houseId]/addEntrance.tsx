import { NextPage } from "next";
import { useRouter } from "next/router";
import EntranceForm from "../../../../components/Forms/PageForms/ControlObjects/EntranceForm";
import MainLayout from "../../../../components/MainLayout";
import { EntranceData } from "../../../../models/IHouse";
import { addEntrance } from "../../../../store/actions/controlObjectActions";

const AddEntrance: NextPage = () => {
  const houseId = useRouter().query.houseId.toString();
  const initEntrance = {
    numberOfEntrance: "",
    yearOfConstruction: "",
    conditionOfEntrance: "",
    numberOfFloors: "",
    apartmentsFromTo: "",
    house: houseId,
  };
  const addEntranceSubmit = async (entranceData: EntranceData) => {
    await addEntrance(houseId, entranceData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Список домов / Добавить новый дом"
      title="Добавить новый дом"
      mainTitle="Добавить новый дом"
    >
      <EntranceForm initEntrance={initEntrance} onSubmit={addEntranceSubmit} />
    </MainLayout>
  );
};

export default AddEntrance;
