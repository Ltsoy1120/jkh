import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import EntranceForm from "../../../../../../components/Forms/PageForms/ControlObjects/EntranceForm";
import MainLayout from "../../../../../../components/MainLayout";
import { EntranceData, IEntrance } from "../../../../../../models/IHouse";
import { editEntrance } from "../../../../../../store/actions/controlObjectActions";
import { wrapper } from "../../../../../../store/store";
import getEntranceById from "../../../../../api/getEntranceById";

export interface EditEntranceProps {
  entrance: IEntrance;
}

const EditEntrance: NextPage<EditEntranceProps> = ({ entrance }) => {
  const houseId = useRouter().query.houseId.toString();
  const initEntrance = {
    numberOfEntrance: entrance.numberOfEntrance,
    yearOfConstruction: entrance.yearOfConstruction,
    conditionOfEntrance: entrance.conditionOfEntrance,
    numberOfFloors: entrance.numberOfFloors,
    apartmentsFromTo: entrance.apartmentsFromTo,
    house: entrance.house,
  };
  const EditEntranceSubmit = async (entranceData: EntranceData) => {
    await editEntrance(houseId, entrance._id, entranceData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Список домов / Редактирование дома / подъезда"
      title="Редактирование подъезда"
      mainTitle="Редактирование подъезда"
    >
      <EntranceForm initEntrance={initEntrance} onSubmit={EditEntranceSubmit} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const entrance = await getEntranceById(ctx);
      return {
        props: entrance ? { entrance } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditEntrance;
