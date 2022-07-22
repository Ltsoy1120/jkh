import React, { useEffect } from "react";
import moment from "moment";
import { apiURL } from "../../../../config";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import HousesTable from "../../../../components/Tables/ControlObjects/HousesTable";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  getHouses,
  getHousesByCompany,
} from "../../../../store/actions/controlObjectActions";
import ButtonGroup from "../../../../components/Buttons/ButtonGroup";
import HousesFilter from "../../../../components/Filters/ControlObjects/HousesFilter";

const Houses: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.controlObjects.isLoading);
  const houses = useAppSelector(getHouses());
  const today = moment().format("YYYY-MM-DD");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHousesByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Список домов"
      title="Объекты управления"
      mainTitle="Список домов"
    >
      <ButtonGroup
        children1="Выгрузить в Exсel"
        children2="Добавить новый дом"
        // href1={apiURL + "/files/" + today + ".xlsx"}
        href2="/controlObjects/houses/addHouse"
        width1={200}
      />
      {!isLoading ? (
        <>
          {houses.length ? (
            <>
              <HousesFilter houses={houses} companyId={companyId} />
              <HousesTable companyId={companyId} houses={houses} />
            </>
          ) : (
            <h2>Лицевые счета отсутствуют</h2>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export default Houses;
