import MainLayout from "../../../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../../store/store";
import getHouseById from "../../../../api/getHouseById";
import { HouseProps } from "../editHouse";
import Tabs from "../../../../../components/Tabs";
import { settingsHouseLinks } from "../../../../../components/Tabs/tabLinks";
import AddPlus from "../../../../../components/AddPlus";
import {
  getApartments,
  getApartmentsByHouse,
} from "../../../../../store/actions/controlObjectActions";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { useEffect } from "react";
import ApartmentsTable from "../../../../../components/Tables/ControlObjects/ApartmentsTable";
import ApartmentsFilter from "../../../../../components/Filters/ControlObjects/ApartmentsFilter";

const Apartments: NextPage<HouseProps> = ({ house }) => {
  const isLoading = useAppSelector((state) => state.controlObjects.isLoading);
  const apartments = useAppSelector(getApartments());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getApartmentsByHouse(house?._id));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Редактирование дома"
      title="Редактировать дом"
      mainTitle={`дом ${house?.address}`}
    >
      <Tabs tabLinks={settingsHouseLinks(house?._id)} />
      <AddPlus
        name="Добавить новое помещение"
        href={`/controlObjects/houses/${house?._id}/addApartment`}
      />
      {!isLoading ? (
        <>
          {apartments?.length ? (
            <>
              <ApartmentsFilter houseId={house._id} />
              <ApartmentsTable houseId={house._id} apartments={apartments} />
            </>
          ) : (
            <>
              <h2>Добавленных помещений нет</h2>
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
export default Apartments;
