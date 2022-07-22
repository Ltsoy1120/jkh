import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../../../../components/MainLayout";
import { wrapper } from "../../../../store/store";
import Tabs from "../../../../components/Tabs";
import { settingsSubjectLinks } from "../../../../components/Tabs/tabLinks";
import SubjectForm from "../../../../components/Forms/PageForms/ControlObjects/SubjectForm";
import { ISubject, SubjectData } from "../../../../models/ISubject";
import { getFullName } from "../../../../utils/functions";
import getSubjectById from "../../../api/getSubjectById";
import { editSubject } from "../../../../store/actions/subjectActions";
import { setSubjectData } from "../../../../store/slices/subjectSlice";

export interface SubjectProps {
  subject: ISubject;
}

const EditSubject: NextPage<SubjectProps> = ({ subject }) => {
  const initSubject = {
    lastName: subject.lastName,
    name: subject.name,
    patronymic: subject.patronymic ? subject.patronymic : "",
    dateOfBirth: subject.dateOfBirth,
    gender: subject.gender,
    phones: subject.phones,
    email: subject.email,
    placeOfWork: subject.placeOfWork ? subject.placeOfWork : "",
    workPhone: subject.workPhone ? subject.workPhone : "",
    passportSeries: subject.passportSeries,
    passportNumber: subject.passportNumber,
    departmentCode: subject.departmentCode,
    dateOfIssue: subject.dateOfIssue,
    issuedBy: subject.issuedBy,
    type: subject.type,
    isActive: subject.isActive,
    company: subject.company,
  };
  const editSubjectSubmit = async (subjectData: SubjectData) => {
    await editSubject(subject._id, subjectData);
  };

  return (
    <MainLayout title="Паспортный стол" mainTitle={getFullName(subject)}>
      <Tabs tabLinks={settingsSubjectLinks(subject._id)} />
      <SubjectForm initApplication={initSubject} onSubmit={editSubjectSubmit} />
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const subject = await getSubjectById(ctx);
      store.dispatch(setSubjectData(subject));
      return {
        props: subject ? { subject } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditSubject;
