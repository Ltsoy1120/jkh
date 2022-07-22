import moment from "moment";
import type { NextPage } from "next";
import { useEffect } from "react";
import ReceptionForm from "../../components/Forms/PageForms/ReceptionOfCitizens/ReceptionForm";
import MainLayout from "../../components/MainLayout";
import {
  getHouses,
  getHousesByCompany,
} from "../../store/actions/controlObjectActions";
import { createReception } from "../../store/actions/receptionActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const AddReception: NextPage = () => {
  const company = useAppSelector((state) => state.companies.company);
  const houses = useAppSelector(getHouses());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHousesByCompany(company._id));
  }, [dispatch]);
  const initReception = {
    office: null,
    date: moment(new Date()).format("DD.MM.YYYY"),
    time: "",
    topic: "",
    visiterName: "",
    visiterPhone: "",
    address: "",
    numberOfApartment: "",
    account: null,
    text: "",
    files: [],
    company: company._id,
  };

  const addReceptionSubmit = async (receptionData: FormData) => {
    await createReception(receptionData);
  };

  return (
    <MainLayout
      breadcrumbs="Диспетчерская / Заявки / Новая заявка"
      title="новая заявка"
      mainTitle="новая заявка"
    >
      <ReceptionForm
        initReception={initReception}
        onSubmit={addReceptionSubmit}
        houses={houses}
        offices={company.offices}
        companyId={company._id}
      />
    </MainLayout>
  );
};

export default AddReception;
