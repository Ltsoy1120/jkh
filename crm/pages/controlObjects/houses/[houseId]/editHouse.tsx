import React from "react";
import MainLayout from "../../../../components/MainLayout";
import Tabs from "../../../../components/Tabs";
import { IHouse } from "../../../../models/IHouse";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../store/store";
import getHouseById from "../../../api/getHouseById";
import HouseForm from "../../../../components/Forms/PageForms/ControlObjects/HouseForm";
import ButtonGroup from "../../../../components/Buttons/ButtonGroup";
import { settingsHouseLinks } from "../../../../components/Tabs/tabLinks";
import { editHouse } from "../../../../store/actions/controlObjectActions";
import { useAppSelector } from "../../../../store/hooks";

export interface HouseProps {
  house: IHouse;
}

const EditHouse: NextPage<HouseProps> = ({ house }) => {
  console.log("house", house);
  const companyId = useAppSelector((state) => state.companies.company)?._id;

  const initHouse = {
    address: house.address,
    geo: house.geo,
    timezone: house.timezone ? house.timezone : "",
    cadastralNumber: house.cadastralNumber ? house.cadastralNumber : "",
    fiasCode: house.fiasCode ? house.fiasCode : "",
    yearOfCommissioning: house.yearOfCommissioning
      ? house.yearOfCommissioning
      : "",
    totalArea: house.totalArea ? house.totalArea : "",
    numberOfFloors: house.numberOfFloors ? house.numberOfFloors : 0,
    numberOfUnderFloors: house.numberOfUnderFloors
      ? house.numberOfUnderFloors
      : 0,
    culturalStatus: house.culturalStatus ? house.culturalStatus : "",
    condition: house.condition ? house.condition : "",
    lifeCicleStage: house.lifeCicleStage ? house.lifeCicleStage : "",
    typeOfControl: house.typeOfControl ? house.typeOfControl : "",
    basisOfControl: house.basisOfControl ? house.basisOfControl : "",
    startDate: house.startDate ? house.startDate : null,
    endDate: house.endDate ? house.endDate : null,
    energyEfficiencyClass: house.energyEfficiencyClass
      ? house.energyEfficiencyClass
      : "",
    classAddedDate: house.classAddedDate ? house.classAddedDate : null,
    comments: house.comments ? house.comments : "",
    docs: house.docs ? house.docs : [],
    photos: house.photos ? house.photos : [],
    company: house.company,
  };

  const EditHouseSubmit = async (houseData: FormData) => {
    await editHouse(companyId, house._id, houseData);
  };

  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Объекты управления / Дома / Список домов / Редактирование дома"
        title="Редактировать дом"
        mainTitle={`дом ${house.address}`}
      >
        <Tabs tabLinks={settingsHouseLinks(house._id)} />
        <HouseForm initHouse={initHouse} edit onSubmit={EditHouseSubmit} />
        <ButtonGroup children1="Поместить в архив" children2="Удалить объект" />
      </MainLayout>
    </React.Fragment>
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

export default EditHouse;
