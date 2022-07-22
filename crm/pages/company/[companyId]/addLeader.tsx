import { NextPage } from "next";
import MainLayout from "../../../components/MainLayout/MainLayout";
import Tabs from "../../../components/Tabs";
import LeaderForm from "../../../components/Forms/PageForms/LeaderForm/LeaderForm";
import {
  addLeaderCompany,
  getCompany,
} from "../../../store/actions/companyActions";
import { LeaderData } from "../../../models/IUser";
import { useAppSelector } from "../../../store/hooks";
import { companyLinks } from "../../../components/Tabs/tabLinks";

const AddLeader: NextPage = () => {
  const company = useAppSelector(getCompany());
  const initLeader = {
    lastName: "",
    name: "",
    patronymic: "",
    dateOfBirth: null,
    phones: [],
    email: "",
    position: "",
    role: "",
    fullnameInParent: "",
    basisForAppointment: "",
  };

  const leaderFormSubmit = async (leaderData: LeaderData) => {
    await addLeaderCompany(company._id, leaderData);
  };

  return (
    <MainLayout
      title="Добавление компании"
      mainTitle="Добавление руководителя компании "
    >
      <Tabs tabLinks={companyLinks(company._id)} />
      <h2 style={{ marginBottom: " 30px" }}>
        Компания <span>"{company.name}"</span>
      </h2>
      <LeaderForm initLeader={initLeader} onSubmit={leaderFormSubmit} />
    </MainLayout>
  );
};

export default AddLeader;
