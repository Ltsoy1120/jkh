import type { NextPage } from "next";
import { useEffect } from "react";
import ApplicationForm from "../../components/Forms/PageForms/Control/ApplicationForm";
import MainLayout from "../../components/MainLayout";
import { createApplication } from "../../store/actions/applicationActions";
import {
  getHouses,
  getHousesByCompany,
} from "../../store/actions/controlObjectActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const AddApplication: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const houses = useAppSelector(getHouses());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHousesByCompany(companyId));
  }, [dispatch]);

  const initApplication = {
    type: "",
    text: "",
    files: [],
    address: "",
    numberOfEntrance: "",
    floor: "",
    numberOfApartment: "",
    applicantFullName: "",
    accountNumber: "",
    phone: "",
    isPhoneBindToAccount: false,
    company: companyId,
  };
  const addApplicationSubmit = async (applicationData: FormData) => {
    await createApplication(applicationData);
  };

  return (
    <MainLayout
      breadcrumbs="Диспетчерская / Заявки / Новая заявка"
      title="новая заявка"
      mainTitle="новая заявка"
    >
      <ApplicationForm
        initApplication={initApplication}
        onSubmit={addApplicationSubmit}
        houses={houses}
        companyId={companyId}
      />
    </MainLayout>
  );
};

export default AddApplication;
