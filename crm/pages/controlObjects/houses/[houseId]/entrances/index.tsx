import MainLayout from "../../../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import ButtonGroup from "../../../../../components/Buttons/ButtonGroup";
import { wrapper } from "../../../../../store/store";
import getHouseById from "../../../../api/getHouseById";
import { HouseProps } from "../editHouse";
import EntrancesFilter from "../../../../../components/Filters/ControlObjects/EntrancesFilter";
import EntrancesTable from "../../../../../components/Tables/ControlObjects/EntrancesTable";
import Tabs from "../../../../../components/Tabs";
import { settingsHouseLinks } from "../../../../../components/Tabs/tabLinks";
import AddPlus from "../../../../../components/AddPlus";
import {
  getEntrances,
  getEntrancesByHouse,
} from "../../../../../store/actions/controlObjectActions";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { useEffect } from "react";

const Entrances: NextPage<HouseProps> = ({ house }) => {
  const isLoading = useAppSelector((state) => state.controlObjects.isLoading);
  const entrances = useAppSelector(getEntrances());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntrancesByHouse(house?._id));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Редактирование дома"
      title="Редактировать дом"
      mainTitle={`дом ${house?.address}`}
    >
      <Tabs tabLinks={settingsHouseLinks(house?._id)} />
      <AddPlus
        name="Добавить новый подъезд"
        href={`/controlObjects/houses/${house?._id}/addEntrance`}
      />
      {!isLoading ? (
        <>
          {entrances?.length ? (
            <>
              <EntrancesFilter houseId={house._id} />
              <EntrancesTable houseId={house._id} entrances={entrances} />
            </>
          ) : (
            <>
              <h2>Добавленных подъездов нет</h2>
            </>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const house = await getHouseById(ctx);
      return {
        props: house ? { house } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });
export default Entrances;
