import { NextPage } from "next";
import MainLayout from "../../../components/MainLayout";
import OfficeForm from "../../../components/Forms/PageForms/OfficeForm";
import { OfficeData } from "../../../models/IOffice";
import { addOfficeCompany } from "../../../store/actions/companyActions";
import { useRouter } from "next/router";

const AddOffice: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const initDayOfSchedule = {
    isReception: true,
    timeOne: {
      start: "",
      end: "",
    },
    timeTwo: {
      start: "",
      end: "",
    },
  };
  const initOffice = {
    name: "",
    address: "",
    dateOfWork: "",
    timeOfWork: "",
    timeOfLunch: "",
    phones: [],
    noPreRegistration: true,
    schedule: {
      Mo: initDayOfSchedule,
      Tu: initDayOfSchedule,
      We: initDayOfSchedule,
      Th: initDayOfSchedule,
      Fr: initDayOfSchedule,
      Sa: initDayOfSchedule,
      Su: initDayOfSchedule,
    },
  };

  const addOfficeSubmit = async (officeData: OfficeData) => {
    await addOfficeCompany(companyId, officeData);
  };

  return (
    <MainLayout
      title="Добавить новый офис"
      mainTitle="Добавление офиса компании"
    >
      <OfficeForm initOffice={initOffice} onSubmit={addOfficeSubmit} />
    </MainLayout>
  );
};
export default AddOffice;
