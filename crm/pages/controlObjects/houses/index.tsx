import React, { useEffect } from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import HousesTable from "../../../components/Tables/ControlObjects/HousesTable";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { NextPage } from "next";
import {
  getAllHouses,
  getHouses,
} from "../../../store/actions/controlObjectActions";
import HousesFilter from "../../../components/Filters/ControlObjects/HousesFilter";

const Houses: NextPage = () => {
  const houses = useAppSelector(getHouses());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllHouses());
  }, [dispatch]);

  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Объекты управления / Дома / Список домов"
        title="Объекты управления"
        mainTitle="Список домов"
      >
        <HousesFilter houses={houses} />
        <HousesTable houses={houses} />
      </MainLayout>
    </React.Fragment>
  );
};
export default Houses;
