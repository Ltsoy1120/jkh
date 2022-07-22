import type { NextPage } from "next";
import SubjectForm from "../../../components/Forms/PageForms/ControlObjects/SubjectForm";
import MainLayout from "../../../components/MainLayout";
import { SubjectData } from "../../../models/ISubject";
import { createSubject } from "../../../store/actions/subjectActions";
import { useAppSelector } from "../../../store/hooks";

const AddSubject: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const initSubject = {
    lastName: "",
    name: "",
    patronymic: "",
    dateOfBirth: null,
    gender: "",
    phones: [],
    email: "",
    placeOfWork: "",
    workPhone: "",
    passportSeries: "",
    passportNumber: "",
    departmentCode: "",
    dateOfIssue: null,
    issuedBy: "",
    type: "Физическое лицо",
    isActive: true,
    company: companyId,
  };
  const addSubjectSubmit = async (subjectData: SubjectData) => {
    await createSubject(subjectData);
  };

  return (
    <MainLayout title="Паспортный стол" mainTitle="Добавление нового субъекта">
      <SubjectForm initApplication={initSubject} onSubmit={addSubjectSubmit} />
    </MainLayout>
  );
};

export default AddSubject;
